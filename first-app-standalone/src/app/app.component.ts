import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
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
