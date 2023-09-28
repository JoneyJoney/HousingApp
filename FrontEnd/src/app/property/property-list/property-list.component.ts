import { Component } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent {

  properties : Array<any>  = [
    {
      "Id" : 1,
    "Name" : "Hassan Manzil",
    "Type" : "House",
     "Price" : 500000
    },
    {
      "Id" : 5,
    "Name" : "Mohammad Kainat",
    "Type" : "Duniya",
     "Price" : 600000
    },
    {
      "Id" : 2,
    "Name" : "Hussain Manzil",
    "Type" : "House",
     "Price" : 700000
    },
    {
      "Id" : 3,
    "Name" : "Abbas Villa",
    "Type" : "Villa",
     "Price" : 60000
    },
    {
      "Id" : 4,
    "Name" : "Ali Mansion",
    "Type" : "Mansion",
     "Price" : 900000
    }
]

}
