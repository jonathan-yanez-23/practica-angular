import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const TOKEN_API = '233290038863864'
const baseUrl = "https://www.superheroapi.com/api.php/"+TOKEN_API+"/"
@Injectable({
  providedIn: 'root'
})
export class ApiheroesService {

  constructor(private http: HttpClient) { }

  // getCharacters(){
  //   return this.http.get(baseUrl);
  // }

  // La api no puede devolver info de varios heroes a la vez
  getCharactersById(id: number) {
    return this.http.get(baseUrl+id);
  }
}
