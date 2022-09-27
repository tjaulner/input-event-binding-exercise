import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'header';

  updateTitle(event: Event) {
    this.title = (<HTMLInputElement>event.target).value;
  }
}
