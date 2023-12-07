import { Component } from '@angular/core';

@Component({
  selector: 'app-pokeball-button',
  templateUrl: './pokeball-button.component.html',
  styleUrl: './pokeball-button.component.scss'
})
export class PokeballButtonComponent {

  pokeButton() {
    if (typeof document !== 'undefined') {
      document.getElementById('pokeballButton')!.addEventListener('click', function () {
        this.classList.toggle('makeCircle');
      });
    }
  }

}
