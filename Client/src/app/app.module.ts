import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProduktyComponent } from './produkty/produkty.component';
import { FormularzComponent } from './formularz/formularz.component';
import { RepozytoriumPamiecioweService } from './repozytorium-pamieciowe.service';
import { WebApiService } from './web-api.service';
import { GET_DATA_TOKEN } from './tokens/get-data.token';
import { FORM_SUBMIT_TOKEN } from './tokens/form-submit.token';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePl from '@angular/common/locales/pl';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';

registerLocaleData(localePl);

@NgModule({
  declarations: [
    AppComponent,
    ProduktyComponent,
    FormularzComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideHttpClient(),
    RepozytoriumPamiecioweService,
    WebApiService,
    {
      provide: GET_DATA_TOKEN, useClass: WebApiService,
    }, 
    {
      provide: FORM_SUBMIT_TOKEN, useClass: WebApiService
    },
    { 
      provide: LOCALE_ID, useValue: 'pl-PL' 
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
