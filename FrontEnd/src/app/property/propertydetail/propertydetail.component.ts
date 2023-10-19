import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Property } from 'src/app/model/property';
import { HousingService } from 'src/app/services/housing.service';

@Component({
  selector: 'app-propertydetail',
  templateUrl: './propertydetail.component.html',
  styleUrls: ['./propertydetail.component.css']
})
export class PropertydetailComponent implements OnInit {
   PropertyId : number;
   property = new Property();
  constructor(private route : ActivatedRoute,private housing : HousingService) {
    this.PropertyId = this.route.snapshot.params['id'];

    this.route.params.subscribe(
      (params) => {
        this.housing.getpropertybyid(this.PropertyId).subscribe(
          data => {
            console.log(data);
            this.property.Name = data[0].Name;
            this.property.BHK = data[0].BHK;
            this.property.PType = data[0].PType;
            this.property.Price = data[0].Price;
            this.property.City = data[0].City;
            this.property.BuiltArea = data[0].BuiltArea;
            this.property.CarpetArea = data[0].CarpetArea;
            this.property.FType = data[0].FType;
            this.property.FloorNo = data[0].FloorNo;

            this.property.AOP = data[0].AOP;
            this.property.Possession = data[0].Possession;
            this.property.MainEntrance = data[0].MainEntrance;

             this.property.Gated = data[0].Gated;
            this.property.Security = data[0].Security;
            this.property.Maintenance = data[0].Maintenance;
            this.property.Description = data[0].Description;
            this.property.Address = data[0].Address;
            this.property.Address2 = data[0].Address2;
          }
        );
      }
    )

   }

  ngOnInit() {
  }

}
