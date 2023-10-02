import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { IProperty } from '../property/IProperty.interface';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http : HttpClient) { }

  getAllProperties(SellRent : number) : Observable<IProperty[]>
  {
    return this.http.get("data/properties.json").pipe(
      map(data=> {
         const propertiesarray : Array<IProperty> =  [];
         const array = Object.values(data);
         for(const i in array)
         {
         if(array.hasOwnProperty(i) && array[i].SellRent === SellRent)
           {
           console.log(array[i]);
          propertiesarray.push(array[i]);
          }
         }
         return propertiesarray;
      }
      )
    );
  }
}
