<<<<<<< HEAD
=======
import { UnidadeService } from './../services/domain/unidade.service';
import { FornecedorService } from './../services/domain/fornecedor.service';
>>>>>>> 95d8ab5... Git Reset
import { ColaboradorService } from './../services/domain/colaborador.service';
import { AuthService } from './../services/auth.service';
import { CategoriaService } from './../services/domain/categoria.service';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ErrorInterceptorProvider } from '../interceptors/error-interceptor';
import { StorageService } from '../services/storage.service';
import { AuthInterceptorProvider } from '../interceptors/auth-interceptor';
<<<<<<< HEAD
=======
import { LocalizacaoService } from '../services/domain/localizacao.service';
>>>>>>> 95d8ab5... Git Reset

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CategoriaService,
<<<<<<< HEAD
=======
    FornecedorService,
    UnidadeService,
    LocalizacaoService,
>>>>>>> 95d8ab5... Git Reset
    AuthInterceptorProvider,
    ErrorInterceptorProvider,
    AuthService,
    StorageService, 
    ColaboradorService
  ]
})
export class AppModule {}
