import { PerfilParaAcesso } from './../utils/perfil-para-acesso';
import { LocalUser } from './../models/local_user';
import { StorageService } from './../services/storage.service';
import { AuthService } from './../services/auth.service';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, App } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';




@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: string = 'HomePage';

  pages: Array<{title: string, component: string, img: string, disabled: boolean}>;

  localUser : LocalUser;

  constructor(
    public platform: Platform, 
    app: App, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen, 
    public auth: AuthService,
    public storage: StorageService,
    public perfilParaAcesso: PerfilParaAcesso) {
    

    this.platform.ready().then(() => {
      this.platform.registerBackButtonAction(() => {
          app.navPop();
      });
      this.initializeApp();
    })

    
    this.localUser = this.storage.getLocalUser();
    console.log(this.localUser);

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Dashboard', component: 'DashboardPage', img: 'assets/icon/desktop-outline.svg', disabled: perfilParaAcesso.retornaPermissaoPorPerfil(this.localUser,'DashboardPage')},
      { title: 'Rastreamento', component: 'RastreamentoPage', img: 'assets/icon/analytics-outline.svg', disabled: perfilParaAcesso.retornaPermissaoPorPerfil(this.localUser,'RastreamentoPage')},
      { title: 'Produção', component: 'ProducaoPage', img: 'assets/icon/flask-outline.svg' , disabled: perfilParaAcesso.retornaPermissaoPorPerfil(this.localUser,'ProducaoPage')},
      { title: 'Insumos', component: 'InsumosPage', img: 'assets/icon/eyedrop-outline.svg', disabled: perfilParaAcesso.retornaPermissaoPorPerfil(this.localUser,'InsumosPage')},
      { title: 'Produtos', component: 'ProdutoPage', img: 'assets/icon/medkit-outline.svg', disabled: perfilParaAcesso.retornaPermissaoPorPerfil(this.localUser,'ProdutoPage')},
      { title: 'Categorias', component: 'CategoriasPage', img: 'assets/icon/folder-outline.svg', disabled: perfilParaAcesso.retornaPermissaoPorPerfil(this.localUser,'CategoriasPage')},
      { title: 'Fornecedores', component: 'FornecedorPage', img: 'assets/icon/briefcase-outline.svg', disabled: perfilParaAcesso.retornaPermissaoPorPerfil(this.localUser,'FornecedorPage')},
      { title: 'Unidades de Medida', component: 'UnidadePage', img: 'assets/icon/beaker-outline.svg', disabled: perfilParaAcesso.retornaPermissaoPorPerfil(this.localUser,'UnidadePage')},
      { title: 'Localizações', component: 'LocalizacaoPage', img: 'assets/icon/trail-sign-outline.svg', disabled: perfilParaAcesso.retornaPermissaoPorPerfil(this.localUser,'LocalizacaoPage')},
      { title: 'Movimentações', component: 'MovimentacaoPage', img: 'assets/icon/repeat-outline.svg', disabled: perfilParaAcesso.retornaPermissaoPorPerfil(this.localUser,'MovimentacaoPage')},
      { title: 'Entradas', component: 'EntradaPage', img: 'assets/icon/share-outline.svg', disabled: perfilParaAcesso.retornaPermissaoPorPerfil(this.localUser,'EntradaPage')},
      { title: 'Saídas', component: 'SaidaPage', img: 'assets/icon/exit-outline.svg', disabled: perfilParaAcesso.retornaPermissaoPorPerfil(this.localUser,'SaidaPage')},
      { title: 'Profile', component: 'ProfilePage', img: 'assets/icon/person-outline.svg', disabled: perfilParaAcesso.retornaPermissaoPorPerfil(this.localUser,'ProfilePage')},
      { title: 'Manual', component: 'ManualPage', img: 'assets/icon/book-outline.svg', disabled: perfilParaAcesso.retornaPermissaoPorPerfil(this.localUser,'ManualPage')},
      { title: 'Administração', component: 'AdministracaoPage', img: 'assets/icon/build-outline.svg' , disabled: perfilParaAcesso.retornaPermissaoPorPerfil(this.localUser,'AdministracaoPage')},
      { title: 'Logout', component: '', img: 'assets/icon/log-out-outline.svg', disabled: false},
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page : {title: string, component:string}) {
    switch (page.title){
      case 'Logout': 
        this.auth.logout();
        this.nav.setRoot('HomePage');
      break

      default: this.nav.setRoot(page.component);
    }
    
  }
}
