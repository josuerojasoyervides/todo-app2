import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Items } from "../models/items.model"
import { Item } from "../models/item.model"

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private readonly http: HttpClient) { }

  getAll(): Observable<Items> {
    return this.http
      .get<Items>(`/item/?limit=151`)
  }

  getByName(name: string): Observable<Item> {
    return this.http
      .get<Item>(`/item/${name}`)
  }

  getById(id: number): Observable<Item> {
    return this.http
      .get<Item>(`/item/${id}`)
  }

}
