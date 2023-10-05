import { Produto } from './produto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from './produto';
import { ProdutoSeletor } from '../model/seletor/produto.seletor';


@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  private readonly API = 'http://localhost:8080/api/produtos';

  constructor(private httpClient: HttpClient) { }

listarTodos(): Observable <Array<Produto>> {
  return this.httpClient.get<Array<Produto>>(this.API);
}

listarComSeletor(seletor: ProdutoSeletor) {
  return this.httpClient.post<Array<Produto>>(this.API + "/filtro", seletor);
}

salvar(produto: Produto): Observable<Produto> {
  return this.httpClient.post<Produto>(this.API, produto);
}




}
