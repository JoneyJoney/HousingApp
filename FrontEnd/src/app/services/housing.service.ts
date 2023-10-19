import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
// import { IProperty } from '../property/IProperty.interface';
import { Observable } from 'rxjs/internal/Observable';
import { IProperty } from '../model/IProperty';
import { Property } from '../model/property';
import { IPropertyBase } from '../model/IPropertyBase';


@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http: HttpClient) { }

  getpropertybyid(id: number) {
    return this.getAllProperties().pipe(
      map(proparray => {
        return proparray.filter(p => p.Id == id);
      })
    )
  }


  getAllProperties(SellRent?: number): Observable<IPropertyBase[]> {
    return this.http.get("data/properties.json").pipe(
      map(data => {
        const propertiesarray: Array<IPropertyBase> = [];
        const array = Object.values(data);
        const localproperties = JSON.parse(localStorage.getItem('newprop'));

        for (const i in localproperties) {
          if (SellRent) {
            if (localproperties.hasOwnProperty(i) && localproperties[i].SellRent === SellRent) {
              console.log(localproperties[i]);
              propertiesarray.push(localproperties[i]);
            }
          }
          else {
            propertiesarray.push(localproperties[i]);
          }
        }
        for (const i in array) {
          if (SellRent) {
            if (array.hasOwnProperty(i) && array[i].SellRent === SellRent) {
              console.log(array[i]);
              propertiesarray.push(array[i]);
            }
          }
          else {
            propertiesarray.push(array[i]);
          }
        }
       
        return propertiesarray;
      }
      )
    );
  }


  addProperty(property: Property) {
    let newprop = [property];
    if (localStorage.getItem('newprop')) {
      newprop = [property, ...JSON.parse(localStorage.getItem('newprop'))];
    }
    localStorage.setItem('newprop', JSON.stringify(newprop));
  }

  newPropID() {
    if (localStorage.getItem('PID')) {
      localStorage.setItem('PID', String(+localStorage.getItem('PID') + 1));
      return +localStorage.getItem('PID');
    } else {
      localStorage.setItem('PID', '101');
      return 101;
    }
  }

}
