import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Pokemon } from "../models/pokemon.model"
import { Pokemons } from "../models/pokemons.model"

@Injectable({ providedIn: 'root' })
export class PokemonService {
  constructor(private readonly http: HttpClient) { }

  getAll(): Observable<Pokemons> {
    return this.http
      .get<Pokemons>(`/pokemon/?limit=151`)
  }

  getByName(name: string): Observable<Pokemon> {
    return this.http
      .get<Pokemon>(`/pokemon/${name}`)
  }

  getById(id: number): Observable<Pokemon> {
    return this.http
      .get<Pokemon>(`/pokemon/${id}`)
  }

}
