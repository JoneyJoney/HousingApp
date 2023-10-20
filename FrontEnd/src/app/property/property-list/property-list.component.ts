import { Component } from '@angular/core';
import { HousingService } from 'src/app/services/housing.service';
import { AnimationStyleMetadata } from '@angular/animations';
import { ActivatedRoute } from '@angular/router';
import { IPropertyBase } from 'src/app/model/IPropertyBase';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent {
  SellRent : number =  1;
  //properties : Array<IPropertyBase>  = [] ;
  properties: IPropertyBase[];
  City = '';
  SearchCity = '';
  SortbyParam = '';
  SortDirection = 'asc';
  

  constructor(private route: ActivatedRoute, private housingservice : HousingService){
  
  if(this.route.snapshot.url.toString())
  {
    this.SellRent = 2;
  }
  
    this.housingservice.getAllProperties(this.SellRent).subscribe(
      data=>
      { 
        let newProperty : [] ;
        this.properties = data;
      } ,error => {
        console.log(error);
      }

    );

  }


  onCityFilter()
  {
    this.SearchCity = this.City;

  }
  onCityFilterClear()
  {
    this.SearchCity = '';
    this.City = '';
  }

  onSortDirection()
  {
    if(this.SortDirection === 'desc')
    {
      this.SortDirection = 'asc';
    }
    else{
      this.SortDirection = 'desc';
    }


  }

  
    
}
