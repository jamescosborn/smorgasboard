import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'smorgasbord';
  now: Date;

  ngOnInit() {
    this.now = new Date();
  }

}
