import { OrgaoService } from './../services/domain/orgao.service';
import { PerfilService } from './../services/domain/perfil.service';
import { PaginaService } from './../services/domain/pagina.service';
import { PerfilParaAcesso } from './../utils/perfil-para-acesso';
import { DateNow } from './../utils/datenow';
import { AjusteEstoqueService } from './../services/domain/ajusteestoque.service';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { DateFormatPipe } from './../utils/date-format';
import { MovimentacaoService } from './../services/domain/movimentacao.service';
import { DateTimeFormatPipe } from './../utils/date-time-format';
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

import { IonicSelectableModule } from 'ionic-selectable';

import { InAppBrowser } from '@ionic-native/in-app-browser';

import { File } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';




@NgModule({
  declarations: [
    MyApp,
    DateTimeFormatPipe,
    DateFormatPipe

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    IonicModule.forRoot(MyApp),
    BrowserAnimationsModule,
    IonicSelectableModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp, 
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
    EntradaService,
    MovimentacaoService,
    DateTimeFormatPipe,
    DateFormatPipe,
    InAppBrowser,
    FileTransfer,
    AjusteEstoqueService,
    File,
    FileOpener,
    DateNow,
    PerfilParaAcesso,
    PaginaService,
    PerfilService,
    OrgaoService
  ]
})
export class AppModule {}
