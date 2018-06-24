import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!'; 
  
  public isClickedVisible = false;
  public toggleMenu = function () {
      console.log('hi');
      this.isClickedVisible = !this.isClickedVisible;
  }
}
