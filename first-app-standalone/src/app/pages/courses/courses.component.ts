import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Strings } from '../../enum/strings.enum';

@Component({
  selector: 'app-courses',
  imports: [],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {

  // @Input() courses: any[] = [];
  courses: any[] = [];
  @Input() isAdmin = false;
  @Output() del = new EventEmitter();

  ngOnInit() {
    this.getCourses();
  }

  getCourses() {
    const data = localStorage.getItem(Strings.STORAGE_KEY);
    console.log(data);
    if(data){
      this.courses = JSON.parse(data);
    }
  }

  deleteCourse(course: any) {
    this.del.emit(course);
  }

}
