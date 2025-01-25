import { Component, inject, Input, signal } from '@angular/core';
// import { Component, EventEmitter, Input, Output } from '@angular/core';
// import { Strings } from '../../enum/strings.enum';
import { Course } from '../../interfaces/course.interface';
import { CourseService } from '../../services/course/course.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-courses',
  imports: [],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {

  // @Input() courses: any[] = [];
  // courses: any[] = [];
  // courses: Course[] = [];
  courses = signal<Course[]>([]);
  @Input() isAdmin = false;
  // @Output() del = new EventEmitter();
  coursesSub!: Subscription;
  private courseService = inject(CourseService);

  constructor(
    // private courseService: CourseService
  ) {}

  ngOnInit() {
    // this.courses = this.courseService.getCourses();
    this.courses.set( this.courseService.getCourses());
    // this.getCourses();

    this.coursesSub = this.courseService.courses.subscribe({
      next: (courses) => {
        // this.courses = courses;
        // console.log('courses', this.courses);

        this.courses.set(courses);
        console.log('courses', this.courses());

      },
      error: (e) => {
        console.log(e);

      }
    })
  }

  // getCourses() {
  //   const data = localStorage.getItem(Strings.STORAGE_KEY);
  //   console.log(data);
  //   if(data){
  //     this.courses = JSON.parse(data);
  //     // this.courses[0] = { ...this.couyyyrses[0], isActive: true }
  //   }
  // }

  deleteCourse(course: Course) {
    // this.del.emit(course);
    this.courseService.deleteCourse(course);
  }

  ngOnDestory() {
    console.log('courses ondestory');
    if(this.coursesSub) this.coursesSub.unsubscribe();
  }

}
