import { Component, Input } from '@angular/core';
// import { Component, EventEmitter, Input, Output } from '@angular/core';
// import { Strings } from '../../enum/strings.enum';
import { Course } from '../../interfaces/course.interface';
import { CourseService } from '../../services/course/course.service';

@Component({
  selector: 'app-courses',
  imports: [],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {

  // @Input() courses: any[] = [];
  // courses: any[] = [];
  courses: Course[] = [];
  @Input() isAdmin = false;
  // @Output() del = new EventEmitter();

  constructor(private courseService: CourseService) {}

  ngOnInit() {
    // this.getCourses();
  }

  // getCourses() {
  //   const data = localStorage.getItem(Strings.STORAGE_KEY);
  //   console.log(data);
  //   if(data){
  //     this.courses = JSON.parse(data);
  //     // this.courses[0] = { ...this.couyyyrses[0], isActive: true }
  //   }
  // }

  deleteCourse(course: any) {
    // this.del.emit(course);
  }

}
