import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CoursesComponent } from '../courses/courses.component';
// import { Strings } from '../../enum/strings.enum';
// import { Router } from '@angular/router';
// import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  // imports: [RouterModule],
  // imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [CoursesComponent],
})
export class HomeComponent {
  // courses: any[] = [];

  // val: number = 2;

  // private router = inject(Router);

  // // constructor(private router: Router) {}

  // navigate() {
  //   this.router.navigate(['/about']);
  // }

  ngOnInit() {
    console.log('home ngoninit');
    // this.getCourses();
  }

  // getCourses() {
  //   const data = localStorage.getItem(Strings.STORAGE_KEY);
  //   console.log(data);
  //   if (data) {
  //     this.courses = JSON.parse(data);
  //   }
  // }
}
