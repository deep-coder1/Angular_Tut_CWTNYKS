import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
// import { Router } from '@angular/router';
// import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  // imports: [RouterModule],
  // imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  // val: number = 2;

  // private router = inject(Router);

  // // constructor(private router: Router) {}

  // navigate() {
  //   this.router.navigate(['/about']);
  // }

}
