import { Injectable } from '@angular/core';
import { Strings } from '../../enum/strings.enum';
import { Course } from '../../interfaces/course.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private courses$ = new BehaviorSubject<Course[]>([]);

  get courses() {
    return this.courses$.asObservable();
  }

  constructor() { }

  getCourses(): Course[] {
    const data = localStorage.getItem(Strings.STORAGE_KEY);
    console.log(data);
    if(data){
      const courses = JSON.parse(data);
      // this.courses[0] = { ...this.couyyyrses[0], isActive: true }
      return courses;
    }
    return [];
    }

    addCourse(data: Course) {

  }
}
