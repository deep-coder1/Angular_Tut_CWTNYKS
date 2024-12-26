import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
// export class AppComponent implements OnInit {
  // title = 'first-app-standalone';

  // constructor() {
  //   console.log('constructor');
  // }

  // ngOnInit() {
  //   console.log('ngOnInit');
  //   // this.changeTitle();
  // }

  // changeTitle() {
  //   this.title = 'Coding Technyks';
  // }
}
