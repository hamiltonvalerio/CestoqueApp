import { EntradaService } from './../services/domain/entrada.service';
import { InsumoService } from './../services/domain/insumo.service';
import { UnidadeService } from './../services/domain/unidade.service';
import { FornecedorService } from './../services/domain/fornecedor.service';
import { ColaboradorService } from './../services/domain/colaborador.service';
import { AuthService } from './../services/auth.service';
import { CategoriaService } from './../services/domain/categoria.service';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { BrMaskerModule, BrMaskerIonic3 } from 'brmasker-ionic-3';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ErrorInterceptorProvider } from '../interceptors/error-interceptor';
import { StorageService } from '../services/storage.service';
import { AuthInterceptorProvider } from '../interceptors/auth-interceptor';
import { LocalizacaoService } from '../services/domain/localizacao.service';
import { ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    IonicModule.forRoot(MyApp),
    BrowserAnimationsModule,
    
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
    FornecedorService,
    UnidadeService,
    LocalizacaoService,
    InsumoService,
    AuthInterceptorProvider,
    ErrorInterceptorProvider,
    AuthService,
    StorageService, 
    ColaboradorService,
    EntradaService
  ]
})
export class AppModule {}
