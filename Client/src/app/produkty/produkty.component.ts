import { Component, inject } from '@angular/core';
import { GET_DATA_TOKEN } from '../tokens/get-data.token';
import { WebApiService } from '../web-api.service';
import {Observable} from "rxjs";
import {ProduktClass} from "../classes/produkt.class";


@Component({
  selector: 'taiib2-produkty',
  standalone: false,
  templateUrl: './produkty.component.html',
  styles: ``
})
export class ProduktyComponent {
  private readonly service = inject(GET_DATA_TOKEN);
  public readonly webApi = inject(WebApiService);

  public data$ = this.service.Get();

  usun(id: number): void {
    this.webApi.Delete(id).subscribe(() => {
      this.data$ = this.service.Get();
    });
  }
}
