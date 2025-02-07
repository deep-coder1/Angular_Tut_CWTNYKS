import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CoursesComponent } from '../courses/courses.component';
import { AboutComponent } from "../about/about.component";
import { HttpClient } from '@angular/common/http';
// import { Strings } from '../../enum/strings.enum';
// import { Router } from '@angular/router';
// import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  // imports: [RouterModule],
  // imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [CoursesComponent, AboutComponent],
})
export class HomeComponent {
  // courses: any[] = [];

  // val: number = 2;

  // private router = inject(Router);

  // // constructor(private router: Router) {}

  private http = inject(HttpClient);

  // navigate() {
  //   this.router.navigate(['/about']);
  // }

  ngOnInit() {
    console.log('home ngoninit');
    // this.getCourses();

    this.fetchHttpData();
  }

  fetchHttpData() {
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe({
      next: (posts) => {
        console.log(posts);
      },
      error: (e) => {
        console.log(e);
        console.error(e);
      }
    });
  }

  // getCourses() {
  //   const data = localStorage.getItem(Strings.STORAGE_KEY);
  //   console.log(data);
  //   if (data) {
  //     this.courses = JSON.parse(data);
  //   }
  // }
}
