import {
  BarcodeScanner,
  BarcodeScannerOptions,
} from "@ionic-native/barcode-scanner";
import { DateNow } from "./../../utils/datenow";
import { DateTimeFormatPipe } from "./../../utils/date-time-format";
import { LocalizacaoDTO } from "./../../models/localizacao.dto";
import { InsumolocalizacaoDTO } from "./../../models/insumolocalizacao.dto";
import { ModalQuantidademinimaPage } from "./../modal-quantidademinima/modal-quantidademinima";
import { InsumoService } from "./../../services/domain/insumo.service";
import { LocalizacaoService } from "./../../services/domain/localizacao.service";
import { Component, ViewChild } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  LoadingController,
  ModalController,
  ViewController,
  AlertController,
  Searchbar,
  Platform,
} from "ionic-angular";

import { File } from "@ionic-native/file/ngx";
import * as pdfmake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";
import { controlNameBinding } from "@angular/forms/src/directives/reactive_directives/form_control_name";
import moment from "moment";

/**
 * Generated class for the LocalizacaoInsumosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-localizacao-insumos",
  templateUrl: "localizacao-insumos.html",
})
export class LocalizacaoInsumosPage {
  page: number = 0;
  insumosLocalizacao: InsumolocalizacaoDTO[];
  nomeLocalizacao: string = "";
  data = moment().format("MM/DD/YYYY HH:mm");
  shouldShowCancel: boolean = true;
  localizacao: LocalizacaoDTO;

  botaoQuantidadeMinima: boolean = false;
  dataControle: boolean = true;

  localizacaoId: string;

  options: BarcodeScannerOptions;
  encodeText: string = "";
  encodeData: any = {};
  scannedData: string = "";
  plataforma: boolean = true;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public localizacaoService: LocalizacaoService,
    public insumoService: InsumoService,
    public LoadingController: LoadingController,
    public modal: ModalController,
    public viewCtrl: ViewController,
    public alertCtrl: AlertController,
    public file: File,
    public dateTimeFormatPipe: DateTimeFormatPipe,
    public dateNow: DateNow,
    private scanner: BarcodeScanner,
    public platform: Platform
  ) {
    this.nomeLocalizacao = this.navParams.get("localizacao_nome");
  }

  scan() {
    this.options = {
      prompt: "Posicione o código de barras!",
    };
    this.scanner.scan(this.options).then(
      (data) => {
        this.scannedData = data.text;
        this.buscaInsumoPorLoteLei(this.scannedData);
      },
      (err) => {
        console.log("Erro: ", err);
      }
    );
  }

  encode() {
    this.scanner.encode(this.scanner.Encode.TEXT_TYPE, this.encodeText).then(
      (data) => {
        this.encodeData = data;
      },
      (err) => {
        console.log("Erro: ", err);
      }
    );
  }

  ionViewDidLoad() {
    if (this.platform.is("mobile")) {
      this.plataforma = false;
    } else {
      this.plataforma = true;
    }

    this.getItens();
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  atualizaQtdMinima(event: Event) {
    let modalQuantidademinimaPage = this.modal.create(
      "ModalQuantidademinimaPage",
      {
        evento: event,
      }
    );
    modalQuantidademinimaPage.onDidDismiss(() => {
      this.getItens();
    });
    modalQuantidademinimaPage.present();
  }

  buscaInsumoPorLoteLei(loteLei: string) {
    this.insumoService
      .findInsumoLocalizacaoByLotelei(this.localizacaoId, loteLei)
      .subscribe((response) => {
        this.insumosLocalizacao = response.sort();
      });
  }

  buscaInsumo(ev: any, tipo: string) {
    let val = ev.target.value;
    if (val && val.trim() != "") {
      switch (tipo) {
        case "nome":
          this.insumoService
            .findInsumoLocalizacaoByNome(this.localizacaoId, val)
            .subscribe((response) => {
              this.insumosLocalizacao = response.sort();
            });
          /*this.insumosLocalizacao.filter((item) => {
            return (item.insumo.nome.toLowerCase().indexOf(val.toLowerCase()) > -1);
          })*/
          break;
        case "codalmox":
          this.insumoService
            .findInsumoLocalizacaoByCodalmox(this.localizacaoId, val)
            .subscribe((response) => {
              this.insumosLocalizacao = response.sort();
            });
          /*this.insumosLocalizacao = this.insumosLocalizacao.filter((item) => {
            return (item.codigoalmoxarifado.toLowerCase().indexOf(val.toLowerCase()) > -1);
          })*/
          break;
        case "lotelei":
          this.insumoService
            .findInsumoLocalizacaoByLotelei(this.localizacaoId, val)
            .subscribe((response) => {
              this.insumosLocalizacao = response.sort();
            });
          /*this.insumosLocalizacao = this.insumosLocalizacao.filter((item) => {
            return (item.loteLEI.toLowerCase().indexOf(val.toLowerCase()) > -1);
          })*/
          break;
        case "sublotelei":
          this.insumoService
            .findInsumoLocalizacaoBySublotelei(this.localizacaoId, val)
            .subscribe((response) => {
              this.insumosLocalizacao = response.sort();
            });
          /*this.insumosLocalizacao = this.insumosLocalizacao.filter((item) => {
            return (item.subloteLEI != null?item.subloteLEI.toLowerCase().indexOf(val.toLowerCase()) > -1:"");
          })*/
          break;
      }
    } else {
      this.getItens();
    }
  }

  ajustaDataControle() {
    this.insumosLocalizacao.forEach((il) => {
      if (il.dataPrevisaoControle != null) {
        il.dataPrevisaoControle = this.dateTimeFormatPipe.transformhifem(
          this.dateNow.getDateFormatado(il.dataPrevisaoControle)
        );
      }
    });
  }

  onCancel() {
    this.getItens();
  }

  getItens() {
    let loader = this.presentLoading();

    this.localizacaoId = this.navParams.get("localizacao_id");
    if (this.navParams.get("localizacao_atualizaqtdminima") != null) {
      if (this.navParams.get("localizacao_atualizaqtdminima") === false) {
        this.botaoQuantidadeMinima = true;
      }
      if (this.navParams.get("localizacao_controle") === true) {
        this.dataControle = false;
      }
    }

    this.insumosLocalizacao = [];
    //this.insumoService.findByLocalizacao(localizacaoId,this.page, 30)
    this.insumoService
      .findInsumoLocalizacaoByLocalizacao(this.localizacaoId, this.page, 30)
      .subscribe(
        (response) => {
          let start = this.insumosLocalizacao.length;
          this.insumosLocalizacao = this.insumosLocalizacao.concat(
            response["content"]
          );
          this.insumosLocalizacao.forEach((il) => {
            if (il.dataPrevisaoControle != null) {
              il.dataPrevisaoControle = this.dateTimeFormatPipe.transformhifem(
                this.dateNow.getDateFormatado(il.dataPrevisaoControle)
              );
            }
          });
          let end = this.insumosLocalizacao.length - 1;
          loader.dismiss();
        },
        (error) => {
          loader.dismiss();
        }
      );
  }

  presentLoading() {
    let loader = this.LoadingController.create({
      content: "Aguarde...",
    });
    loader.present();
    return loader;
  }

  doRefresh(refresher) {
    this.page = 0;
    this.insumosLocalizacao = [];
    this.getItens();
    setTimeout(() => {
      refresher.complete();
    }, 1000);
  }

  doInfinite(infiniteScroll) {
    this.page++;
    this.getItens();
    setTimeout(() => {
      infiniteScroll.complete();
    }, 1000);
  }

  createPdf() {
    pdfmake.vfs = pdfFonts.pdfMake.vfs;
    var headers = {
      fila_0: {
        col_1: {
          text: "Cod",
          style: "tableHeader",
          rowSpan: 2,
          alignment: "center",
          margin: [0, 5, 0, 0],
        },
        col_2: {
          text: "Item",
          style: "tableHeader",
          rowSpan: 2,
          alignment: "center",
          margin: [0, 5, 0, 0],
        },
        col_3: {
          text: "Unidade",
          style: "tableHeader",
          rowSpan: 2,
          alignment: "center",
          margin: [0, 5, 0, 0],
        },
        col_4: {
          text: "Qtd mínima",
          style: "tableHeader",
          rowSpan: 2,
          alignment: "center",
          margin: [0, 5, 0, 0],
        },
        col_5: {
          text: "Estoque",
          style: "tableHeader",
          rowSpan: 2,
          alignment: "center",
          margin: [0, 5, 0, 0],
        },
        col_6: {
          text: "Validade",
          style: "tableHeader",
          rowSpan: 2,
          alignment: "center",
          margin: [0, 5, 0, 0],
        },
      },
      fila_1: {
        col_1: { text: "Header 1", style: "tableHeader", alignment: "center" },
        col_2: { text: "Header 2", style: "tableHeader", alignment: "center" },
        col_3: { text: "Header 3", style: "tableHeader", alignment: "center" },
        col_4: { text: "Header 4", style: "tableHeader", alignment: "center" },
        col_5: { text: "Header 5", style: "tableHeader", alignment: "center" },
        col_6: { text: "Header 6", style: "tableHeader", alignment: "center" },
      },
    };
    var rows = this.insumosLocalizacao;

    var body = [];
    for (var key in headers) {
      if (headers.hasOwnProperty(key)) {
        var header = headers[key];
        var row = new Array();
        row.push(header.col_1);
        row.push(header.col_2);
        row.push(header.col_3);
        row.push(header.col_4);
        row.push(header.col_5);
        row.push(header.col_6);
        body.push(row);
      }
    }
    for (var keys in rows) {
      if (rows.hasOwnProperty(keys)) {
        var data = rows[keys];
        var row = new Array();
        row.push(data.codigoalmoxarifado);
        row.push(data.insumo.nome);
        row.push(data.insumo.unidade.nome);
        row.push(data.quantidademinima);
        row.push(data.quantidade);
        row.push(moment(data.dataValidade).format("MM/DD/YYYY"));
        body.push(row);
      }
    }

    var nomelocal = this.nomeLocalizacao;

    var dd = {
      pageSize: "A4",
      pageMargins: [40, 155, 40, 55],
      pageOrientation: "portrait",
      header: function () {
        return {
          margin: 40,
          columns: [
            {},
            {
              text: ["ESTOQUE " + nomelocal],
              alignment: "center",
              bold: true,
              margin: [-250, 40, 0, 0],
              fontSize: 24,
            },
          ],
        };
      },
      footer: function (currentPage, pageCount) {
        return {
          text: "Página " + currentPage.toString() + " de " + pageCount,
          alignment: "center",
          margin: [0, 30, 0, 0],
        };
      },
      content: [
        //{ text: 'Tables', style: 'header' },
        { text: this.nomeLocalizacao + " - " + this.data, style: "sub_header" },
        //{ text: 'A simple table (no headers, no width specified, no spans, no styling)', style: 'sta' },
        //'The following table has nothing more than a body array',
        {
          style: "sta",
          table: {
            widths: [30, 200, 60, 50, 50, 70],
            headerRows: 2,
            // keepWithHeaderRows: 1,
            body: body,
          },
        },
      ],
      styles: {
        header: {
          fontSize: 28,
          bold: true,
        },
        subheader: {
          fontSize: 15,
          bold: true,
        },
        quote: {
          italics: true,
        },
        small: {
          fontSize: 8,
        },
        sta: {
          fontSize: 11,
          bold: false,
          alignment: "center",
        },
      },
    };

    pdfmake.createPdf(dd).open();
  }
}
