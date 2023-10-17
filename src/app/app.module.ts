import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { ProdutoDetalheComponent } from './produtos/produto-detalhe/produto-detalhe.component';
import { ProdutoListagemComponent } from './produtos/produto-listagem/produto-listagem.component';

@NgModule({
  declarations: [
    AppComponent,


    ProdutoDetalheComponent,
    ProdutoListagemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
