import { InsumolocalizacaoDTO } from "./../../models/insumolocalizacao.dto";
import { ModalQuantidademinimaPage } from "./../modal-quantidademinima/modal-quantidademinima";
import { InsumoService } from "./../../services/domain/insumo.service";
import { LocalizacaoService } from "./../../services/domain/localizacao.service";
import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  LoadingController,
  ModalController,
  ViewController,
  AlertController,
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
  data = moment().format('MM/DD/YYYY HH:mm');


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public localizacaoService: LocalizacaoService,
    public insumoService: InsumoService,
    public LoadingController: LoadingController,
    public modal: ModalController,
    public viewCtrl: ViewController,
    public alertCtrl: AlertController,
    public file: File
  ) {
    this.nomeLocalizacao = this.navParams.get("localizacao_nome");
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad LocalizacaoInsumosPage");
    //this.loadData();
    this.getItens();
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  atualizaQtdMinima(event: Event) {
    console.log("ENTROU");
    console.log(event);
    let modalQuantidademinimaPage = this.modal.create(
      "ModalQuantidademinimaPage",
      { evento: event }
    );
    modalQuantidademinimaPage.onDidDismiss(() => {
      this.getItens();
    });
    modalQuantidademinimaPage.present();
  }

  /*getItens(){
    let localizacaoId = this.navParams.get('localizacao_id');
    console.log("aqui: "+localizacaoId);

    this.insumoService.findInsumoLocalizacaoByLocalizacao(localizacaoId,this.page, 30)
    .subscribe(response => {
      
      this.insumosLocalizacao = response.sort();
      
    },
    error => {})

    console.log(this.insumosLocalizacao);

    this.insumosLocalizacao.forEach(function (value){
      console.log(value);
    })

  }*/

 
  getItens() {
    let localizacaoId = this.navParams.get("localizacao_id");
    let loader = this.presentLoading();
    this.insumosLocalizacao = [];
    //this.insumoService.findByLocalizacao(localizacaoId,this.page, 30)
     this.insumoService
      .findInsumoLocalizacaoByLocalizacao(localizacaoId)
      .subscribe(
        (response) => {
          let start = this.insumosLocalizacao.length;
          this.insumosLocalizacao = this.insumosLocalizacao.concat(
            response["content"]
          );
         
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

  createPdf() {
    pdfmake.vfs = pdfFonts.pdfMake.vfs;
    var headers = {
      fila_0:{
          col_1:{ text: 'Cod', style: 'tableHeader',rowSpan: 2, alignment: 'center',margin: [0, 5, 0, 0] },
          col_2:{ text: 'Item', style: 'tableHeader',rowSpan: 2, alignment: 'center',margin: [0, 5, 0, 0] },
          col_3:{ text: 'Unidade', style: 'tableHeader',rowSpan: 2, alignment: 'center',margin: [0, 5, 0, 0] },
          col_4:{ text: 'Qtd mínima', style: 'tableHeader',rowSpan: 2, alignment: 'center',margin: [0, 5, 0, 0] },
          col_5:{ text: 'Estoque', style: 'tableHeader',rowSpan: 2, alignment: 'center',margin: [0, 5, 0, 0] },
          col_6:{ text: 'Validade', style: 'tableHeader',rowSpan: 2, alignment: 'center',margin: [0, 5, 0, 0] },
      },
      fila_1:{
          col_1:{ text: 'Header 1', style: 'tableHeader', alignment: 'center' },
          col_2:{ text: 'Header 2', style: 'tableHeader', alignment: 'center' }, 
          col_3:{ text: 'Header 3', style: 'tableHeader', alignment: 'center' },
          col_4:{ text: 'Header 4', style: 'tableHeader', alignment: 'center' }, 
          col_5:{ text: 'Header 5', style: 'tableHeader', alignment: 'center' },
          col_6:{ text: 'Header 6', style: 'tableHeader', alignment: 'center' }

      }
  }
  var rows = this.insumosLocalizacao;
  
  var body = [];
  for (var key in headers){
      if (headers.hasOwnProperty(key)){
          var header = headers[key];
          var row = new Array();
          row.push( header.col_1 );
          row.push( header.col_2 );
          row.push( header.col_3 );
          row.push( header.col_4 );
          row.push( header.col_5 );
          row.push( header.col_6 );
          body.push(row);
      }
  }
  for (var keys in rows) 
  {
      if (rows.hasOwnProperty(keys))
      {
        var data = rows[keys];
        console.log(data)
          var row = new Array();
          row.push( data.codigoalmoxarifado );
          row.push( data.insumo.nome );
          row.push( data.insumo.unidade.nome );
          row.push( data.quantidademinima );
          row.push( data.quantidade );
          row.push( moment(data.dataValidade).format('MM/DD/YYYY') );
          body.push(row);
      }
  }
  
  var dd = {
          pageSize: "A4",
          pageMargins: [40,155,40,55],
          pageOrientation: 'portrait',
          header: function() {
              return {
                  margin: 40,
                  columns: [
                    {
                      },
                      { text:['ESTOQUE REAGENTES LIOFILIZADOS'], 
                              alignment: 'center',bold:true,margin:[-250,40,0,0],fontSize: 24}
                  ]
              }
          },
          footer: function(currentPage, pageCount) {
              return { text:'Página '+ currentPage.toString() + ' de ' + pageCount, alignment: 'center',margin:[0,30,0,0] };
          },
          content: [
              //{ text: 'Tables', style: 'header' },
              { text: this.nomeLocalizacao+' - '+this.data, style: "sub_header" },
              //{ text: 'A simple table (no headers, no width specified, no spans, no styling)', style: 'sta' },
              //'The following table has nothing more than a body array',
              {
                  style: 'sta',
                  table: {
                      widths: [ 30, 200, 60, 50, 50, 70 ],
                      headerRows: 2,
                      // keepWithHeaderRows: 1,
                      body: body
                  }
              }],
          styles: {
              header: {
                  fontSize: 28,
                  bold: true
              },
              subheader: {
                  fontSize: 15,
                  bold: true
              },
              quote: {
                  italics: true
              },
              small: {
                  fontSize: 8
              },
              sta: {
                  fontSize: 11,
                  bold: false,
                  alignment: 'center'
              }
          }
  }
   
    pdfmake.createPdf(dd).open();
  }
   
}
