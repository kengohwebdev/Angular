import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 applicationName="My CRM in Angular"
 studentName  = "Morphex"

 isDevEnvironment = true;
 showDiv=true;
 togglediv(){
 this.showDiv = !this.showDiv;
 }


 countries =["UK","USA","Germany","Italy","Spain"]
 cats = ["Sphynx", "British Shorthair", "Ragdoll", "Siamese", "Maine Coon" ]
 catlove =["fish", "world domination"]
 cathate =["dog", "bath"]

 name = 'Dynamic Form';
 url="http:example.php";
 
}