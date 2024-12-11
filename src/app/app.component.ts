import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  AgeList = [
    {key: '12', value: 12},
    {key: '44', value: 44},
  ]
}
