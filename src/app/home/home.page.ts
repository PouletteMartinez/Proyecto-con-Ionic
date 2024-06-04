import { Component } from '@angular/core';
import { List } from '../shared/interfaces/list.interface';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public imgs: List[] = [];
  public message: string = '';
  public disabledBtn = true;

  constructor() { 
    this.getDatos();
    this.message = 'Estamos cargando tu información...';
    setTimeout(() => {
      this.message = '¡Disfruta de este nuevo conocimiento!';
      this.disabledBtn = false;
    }, 13000);
  }


  getDatos(): void  {
    this.imgs = [
      {id: 0, img: '../../assets/imgs/bulbasaur.png', description: 'Recuerda que los Pokémon tipo TIERRA son debiles con ataques tipo AGUA', btn: ''},
      {id: 1, img: '../../assets/imgs/squirtle.png', description: 'No olvides curar a tus Pokemon después de cada batalla', btn: ''},
      {id: 2, img: '../../assets/imgs/charmander.png', description: 'Completa tu Pokedex atrapando más Pokémones!', btn: 'POKEDEX'},
    ]
  }
}
