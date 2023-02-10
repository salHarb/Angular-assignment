import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
   allProducts = ['Women', 'Men'];
  subTitle:string='This is a porduct list'
}
