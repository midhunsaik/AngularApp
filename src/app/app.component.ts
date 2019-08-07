import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DirectivesDemo';
  name :string="Midhun";

  imageUrl :string="./assets/images/home.jpg";
 
  companyName :string="legato";

  //structural components
    //ngIf
  vissible : boolean = true;

  //ngSwitch
  color :string="red";

  //ngFor
  fruits :string[]=["blueberry","strawberry","apple","pineapple","custardapple","greenapple"];

ngOnInit(){

} 

greetUser(){
    console.log("Hello "+this.name);

}
}
