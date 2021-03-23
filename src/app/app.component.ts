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

  pages: Array<{title: string, component: string, img: string}>;

  constructor(public platform: Platform, app: App, public statusBar: StatusBar, public splashScreen: SplashScreen, public auth: AuthService) {
    this.initializeApp();

    this.platform.ready().then(() => {
      this.platform.registerBackButtonAction(() => {
          app.navPop();
      });
  }) 

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Dashboard', component: 'DashboardPage', img: 'assets/icon/desktop-outline.svg'},
      { title: 'Produção', component: 'ProducaoPage', img: 'assets/icon/flask-outline.svg' },
      { title: 'Insumos', component: 'InsumosPage', img: 'assets/icon/eyedrop-outline.svg' },
      { title: 'Produtos', component: 'ProdutoPage', img: 'assets/icon/medkit-outline.svg' },
      { title: 'Categorias', component: 'CategoriasPage', img: 'assets/icon/folder-outline.svg' },
      { title: 'Fornecedores', component: 'FornecedorPage', img: 'assets/icon/briefcase-outline.svg' },
      { title: 'Unidades de Medida', component: 'UnidadePage', img: 'assets/icon/beaker-outline.svg' },
      { title: 'Localizações', component: 'LocalizacaoPage', img: 'assets/icon/trail-sign-outline.svg' },
      { title: 'Movimentações', component: 'MovimentacaoPage', img: 'assets/icon/repeat-outline.svg' },
      { title: 'Entradas', component: 'EntradaPage', img: 'assets/icon/share-outline.svg' },
      { title: 'Saídas', component: 'SaidaPage', img: 'assets/icon/exit-outline.svg' },
      { title: 'Profile', component: 'ProfilePage', img: 'assets/icon/person-outline.svg' },
      { title: 'Manual', component: 'ManualPage', img: 'assets/icon/book-outline.svg' },
      { title: 'Logout', component: '', img: 'assets/icon/log-out-outline.svg' },
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
