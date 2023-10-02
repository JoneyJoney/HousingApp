import { Component } from '@angular/core';
import { HousingService } from 'src/app/services/housing.service';
import { IProperty } from '../IProperty.interface';
import { AnimationStyleMetadata } from '@angular/animations';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent {
  SellRent : number =  1;
  properties : Array<IProperty>  = [] ;

  constructor(private route: ActivatedRoute, private housingservice : HousingService){
  if(this.route.snapshot.url.toString())
  {
    this.SellRent = 2;
  }
    this.housingservice.getAllProperties(this.SellRent).subscribe(
      data=>
      {
        this.properties = data;
        console.log(data);
        console.log(this.route.snapshot.url.toString());

      } ,error => {
        console.log(error);
      }

    );

  }
  
    
}
