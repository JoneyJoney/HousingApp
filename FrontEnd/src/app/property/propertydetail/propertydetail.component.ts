import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-propertydetail',
  templateUrl: './propertydetail.component.html',
  styleUrls: ['./propertydetail.component.css']
})
export class PropertydetailComponent implements OnInit {
   PropertyId : number;
  constructor(private route : ActivatedRoute) {
    this.PropertyId = this.route.snapshot.params['id'];
   }

  ngOnInit() {
  }

}
