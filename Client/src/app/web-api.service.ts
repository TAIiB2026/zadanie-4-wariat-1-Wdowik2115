import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProduktClass } from './classes/produkt.class';
import { GetDataInterface } from './interfaces/get-data.interface';
import {FormSubmitInterface} from "./interfaces/form-submit.interface";

@Injectable({
  providedIn: 'root'
})
export class WebApiService implements GetDataInterface, FormSubmitInterface {

  private apiUrl = 'http://localhost:5108/api/produkty';

  constructor(private http: HttpClient) {}

  Get(): Observable<ProduktClass[]> {
    return this.http.get<ProduktClass[]>(this.apiUrl);
  }

  GetByID(id: number): Observable<ProduktClass> {
    return this.http.get<ProduktClass>(`${this.apiUrl}/${id}`);
  }
  Post(nazwa: string, cena: number, data: Date): Observable<any> {
    return this.http.post(this.apiUrl, { nazwa, cena, dataWaznosci: data });
  }

  Put(id: number, nazwa: string, cena: number, data: Date): Observable<any> {
    return this.http.put(this.apiUrl, { id, nazwa, cena, dataWaznosci: data });
  }
    Delete(id: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.apiUrl}/${id}`);
    }
}
