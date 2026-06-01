import { Observable } from "rxjs";

export interface FormSubmitInterface {
    Post(nazwa: string, cena: number, data: Date): Observable<any>;
    Put(id: number, nazwa: string, cena: number, data: Date): Observable<any>;
}