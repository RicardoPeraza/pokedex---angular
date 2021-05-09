import { Component, OnInit } from '@angular/core';
import { PokemonServiceService } from 'src/app/services/pokemon-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

   //creo array de prokemon que voy a utilizar para ponerlo en las tarjetas
   pokemons = [];
   data: any[] = [];

  constructor(private service: PokemonServiceService) {

    
   }

  ngOnInit(): void {

    this.getPokemons();
  }

  getPokemons() {
    let pokemonData;
    
    for (let i = 1; i <= 150; i++) {
      this.service.getPokemons(i).subscribe(res => {
        pokemonData = {
          position: i,
          image: res.sprites.front_default,
          name: res.name
        };
        //ponemos la data que viene del servicio en un arreglo
        this.data.push(pokemonData);
        },
        err => {
         
        }
      );
    }
  }



  }


