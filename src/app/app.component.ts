import { Component } from '@angular/core';
import { PokemonService } from "./core/services/pokemon.service"
import { ItemsService } from "./core/services/items.service"
import { Router } from '@angular/router';
import { catchError, throwError, Subject, takeUntil, map } from 'rxjs';
import { Pokemon } from "./core/models/pokemon.model"
import { Pokemons } from "./core/models/pokemons.model"
import { Items } from "./core/models/items.model"
import { Item } from "./core/models/item.model"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  pokemon!: Pokemon
  pokemons!: Pokemons
  item!: Item
  items!: Items
  notifier = new Subject<void>()

  constructor(
    private readonly pokemonService: PokemonService,
    private readonly itemsService: ItemsService,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    this.getPokemonByName('magikarp')
    this.getAllPokemon()
    this.getAllItems()
    this.getItemById(1)
  }

  ngOnDestroy(): void {
    this.notifier.next()
    this.notifier.complete()
  }

  getAllPokemon() {
    this.pokemonService.getAll()
      .pipe(
        takeUntil(this.notifier),
        catchError((err) => {
          void this.router.navigate(["/"]);
          return throwError(() => err);
        })
      )
      .subscribe((pokemons) => {
        this.pokemons = pokemons
        console.log(this.pokemons);
      })
  }

  getPokemonByName(pokemonName: string) {
    this.pokemonService.getByName(pokemonName)
      .pipe(
        takeUntil(this.notifier),
        catchError((err) => {
          void this.router.navigate(["/"]);
          return throwError(() => err);
        })
      )
      .subscribe((pokemon) => {
        this.pokemon = pokemon
        console.log(this.pokemon.name);
      })
  }

  getPokemonById(id: number) {
    this.pokemonService.getById(id)
      .pipe(
        takeUntil(this.notifier),
        catchError((err) => {
          void this.router.navigate(["/"]);
          return throwError(() => err);
        }),
      )
      .subscribe((pokemon) => {
        this.pokemon = pokemon
        console.log(this.pokemon.name);
      })
  }

  getAllItems() {
    this.itemsService.getAll()
      .pipe(
        takeUntil(this.notifier),
        catchError((err) => {
          void this.router.navigate(["/"]);
          return throwError(() => err);
        })
      )
      .subscribe((items) => {
        this.items = items
        console.log(this.items);
      })
  }

  getItemByName(itemName: string) {
    this.itemsService.getByName(itemName)
      .pipe(
        takeUntil(this.notifier),
        catchError((err) => {
          void this.router.navigate(["/"]);
          return throwError(() => err);
        })
      )
      .subscribe((item) => {
        this.item = item
        console.log(this.item.name);
      })
  }

  getItemById(id: number) {
    this.itemsService.getById(id)
      .pipe(
        takeUntil(this.notifier),
        catchError((err) => {
          void this.router.navigate(["/"]);
          return throwError(() => err);
        }),
      )
      .subscribe((item) => {
        this.item = item
        console.log(this.item.name);
      })
  }

}
