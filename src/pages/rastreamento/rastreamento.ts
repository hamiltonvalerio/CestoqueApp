import {
  BarcodeScanner,
  BarcodeScannerOptions,
} from "@ionic-native/barcode-scanner";
import { InsumomovimentacaoDTO } from "./../../models/insumomovimentacao.dto";
import { EntradaDTO } from "./../../models/entrada.dto";
import { InsumoEntradaDTO } from "./../../models/insumoentrada.dto";
import { InsumolocalizacaoDTO } from "./../../models/insumolocalizacao.dto";
import { IonicSelectableComponent } from "ionic-selectable";
import { InsumoService } from "./../../services/domain/insumo.service";
import { MovimentacaoService } from "./../../services/domain/movimentacao.service";
import { LocalizacaoService } from "./../../services/domain/localizacao.service";
import { DateTimeFormatPipe } from "./../../utils/date-time-format";
import { DateNow } from "./../../utils/datenow";
import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ViewController,
  AlertController,
  LoadingController,
  Platform,
} from "ionic-angular";

/**
 * Generated class for the RastreamentoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-rastreamento",
  templateUrl: "rastreamento.html",
})
export class RastreamentoPage {
  lotesLEI: string[];
  insumolocalizacao: InsumolocalizacaoDTO;
  insumosLocalizacoes: InsumolocalizacaoDTO[] = [];
  insumosLocalizacoesSelecionados: InsumolocalizacaoDTO[];
  insumoEntradaDTO: InsumoEntradaDTO;
  entradaDTO: EntradaDTO;
  insumosMovimentacoes: InsumomovimentacaoDTO[] = [];

  options: BarcodeScannerOptions;
  encodeText: string = "";
  encodeData: any = {};
  scannedData: string = "";
  plataforma: boolean = true;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public dateNow: DateNow,
    public dateTimeFormatPipe: DateTimeFormatPipe,
    public localizacaoService: LocalizacaoService,
    public movimentacaoService: MovimentacaoService,
    public viewCtrl: ViewController,
    public alertCtrl: AlertController,
    public insumoService: InsumoService,
    public loadingCtrl: LoadingController,
    private scanner: BarcodeScanner,
    public platform: Platform
  ) {}

  ionViewDidLoad() {
    if (this.platform.is("mobile")) {
      this.plataforma = false;
    } else {
      this.plataforma = true;
    }
    this.loadLotesLEI();
  }

  scan() {
    this.options = {
      prompt: "Posicione o código de barras!",
    };
    this.scanner.scan(this.options).then(
      (data) => {
        this.scannedData = data.text;
        this.loteLEIBarcode(this.scannedData);
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

  loadLotesLEI() {
    this.insumoService.findLotesLEIInsumosLocalizacoes().subscribe(
      (response) => {
        this.insumosLocalizacoes = response.sort();
      },
      (error) => {
        //loader.dismiss();
      }
    );
  }

  loteLEIBarcode(loteLei: string) {
    this.insumoService.findInsumoEntradaByLoteLEI(loteLei).subscribe(
      (response) => {
        this.insumoEntradaDTO = response;
      },
      (error) => {
        //loader.dismiss();
      }
    );

    this.insumoService.findInsumosLocalizacoesByLoteLEI(loteLei).subscribe(
      (response) => {
        this.insumosLocalizacoesSelecionados = response.sort();
      },
      (error) => {
        //loader.dismiss();movimentacoesPorLoteLEI
      }
    );

    this.movimentacaoService.movimentacoesPorLoteLEI(loteLei).subscribe(
      (response) => {
        this.insumosMovimentacoes = response.sort();
        console.log(this.insumosMovimentacoes);
      },
      (error) => {
        //loader.dismiss();movimentacoesPorLoteLEI
      }
    );
  }

  loteLEIChange(event: {
    component: IonicSelectableComponent;
    value: InsumolocalizacaoDTO;
  }) {
    this.insumoService
      .findInsumoEntradaByLoteLEI(event.value.loteLEI)
      .subscribe(
        (response) => {
          this.insumoEntradaDTO = response;
        },
        (error) => {
          //loader.dismiss();
        }
      );

    this.insumoService
      .findInsumosLocalizacoesByLoteLEI(event.value.loteLEI)
      .subscribe(
        (response) => {
          this.insumosLocalizacoesSelecionados = response.sort();
        },
        (error) => {
          //loader.dismiss();movimentacoesPorLoteLEI
        }
      );

    this.movimentacaoService
      .movimentacoesPorLoteLEI(event.value.loteLEI)
      .subscribe(
        (response) => {
          this.insumosMovimentacoes = response.sort();
          console.log(this.insumosMovimentacoes);
        },
        (error) => {
          //loader.dismiss();movimentacoesPorLoteLEI
        }
      );
  }
}
