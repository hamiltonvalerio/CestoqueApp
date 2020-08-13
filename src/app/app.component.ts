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

  pages: Array<{title: string, component: string}>;

  constructor(public platform: Platform, app: App, public statusBar: StatusBar, public splashScreen: SplashScreen, public auth: AuthService) {
    this.initializeApp();

    this.platform.ready().then(() => {
      this.platform.registerBackButtonAction(() => {
          app.navPop();
      });
  }) 

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Dashboard', component: 'DashboardPage' },
      { title: 'Produção', component: 'ProducaoPage' },
      { title: 'Insumos', component: 'InsumosPage' },
      { title: 'Produtos', component: 'ProdutoPage' },
      { title: 'Categorias', component: 'CategoriasPage' },
      { title: 'Fornecedores', component: 'FornecedorPage' },
      { title: 'Unidades de Medida', component: 'UnidadePage' },
      { title: 'Localizações', component: 'LocalizacaoPage' },
      { title: 'Entradas', component: 'EntradaPage' },
      { title: 'Saídas', component: 'SaidaPage' },
      { title: 'Profile', component: 'ProfilePage' },
      { title: 'Logout', component: '' },
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
