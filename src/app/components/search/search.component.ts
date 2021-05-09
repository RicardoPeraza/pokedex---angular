import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PokemonServiceService } from 'src/app/services/pokemon-service.service';


class ImageSnippet {
  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  data: any[] = [];
  selectedFile: ImageSnippet;

  constructor(private service: PokemonServiceService) { }

  ngOnInit(): void {
  }


  buscar(f: NgForm){
    console.log(f.value.termino)
    let pokemonData;
    this.service.getPokemons(f.value.termino).subscribe((res:any)=>{
      pokemonData = {
        position: f.value.termino,
        image: res.sprites.front_default,
        name: res.name
      };
      //ponemos la data que viene del servicio en un arreglo
      this.data.push(pokemonData);
      f.resetForm();
     
      
    })

  }

  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {

      this.selectedFile = new ImageSnippet(event.target.result, file);

      this.service.uploadImage(this.selectedFile.file).subscribe(
        (res:any) => {
        
        }
        )
    });

    reader.readAsDataURL(file);
  }



}
