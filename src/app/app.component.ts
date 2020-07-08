import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayBool = false;
  storingArray = [];
  counter = 0; 
  display(){
    this.displayBool = !this.displayBool;
    this.storingArray.push(this.counter+" | "+new Date());
    // this.storingArray.push(this.counter);
    this.counter++;
  }
}
