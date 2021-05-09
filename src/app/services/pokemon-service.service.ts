import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PokemonServiceService {

  baseUrl="https://pokeapi.co/api/v2"

  constructor(private http: HttpClient) { }

   //Obtiene pokemon
   getPokemons(index){
    return this.http.get<any>(`${this.baseUrl}/pokemon/${index}`)
  }


  public uploadImage(image: File): Observable<Response> {
    const formData = new FormData();

    formData.append('file', image);
    formData.append('file', "hola");

    return this.http.post<any>('http://192.168.0.11:3307/test', formData);
  }
}
