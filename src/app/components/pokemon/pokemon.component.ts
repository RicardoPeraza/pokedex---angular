import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonServiceService } from 'src/app/services/pokemon-service.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  data: any[] = [];

  constructor(private router: ActivatedRoute,private service: PokemonServiceService) { 

    this.router.params.subscribe( params => {

      this.getPokemon( params['id'] );
     

    });
  }

  ngOnInit(): void {
  }

  getPokemon(id:number){

    let pokemonData
    
    this.service.getPokemons(id).subscribe(res => {
      pokemonData = {
        position: id,
        image: res.sprites.front_default,
        name: res.name
      };
      //ponemos la data que viene del servicio en un arreglo
      this.data.push(pokemonData);
      },
      err => {
        console.log(err);
      }
    );

  }



  

}
