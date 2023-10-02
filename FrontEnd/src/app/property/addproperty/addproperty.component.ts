import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';

@Component({
  selector: 'app-addproperty',
  templateUrl: './addproperty.component.html',
  styleUrls: ['./addproperty.component.css']
})
export class AddpropertyComponent implements OnInit {

  constructor(private route : Router) { }

  ngOnInit() {
  }

  // Back()
  // {
  //   this.route.navigate(['/']);
  // }

  SubmitData(form:any)
  {
    console.log(form.value);
  }

}
