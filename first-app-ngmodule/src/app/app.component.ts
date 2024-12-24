import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: '<div>Coding World</div>',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  // title = 'first-app-ngmodule';

  title = 'Code with technyks';

  constructor() {
    console.log('constructor');
  }

  ngOnInit() {
    console.log('ngOnInit');
    // this.changeTitle();
  }

  changeTitle() {
    this.title = 'Coding Technyks';
  }
}
