import { Injectable } from '@angular/core';
import { Strings } from '../../enum/strings.enum';
import { Course } from '../../interfaces/course.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private courses$ = new BehaviorSubject<Course[]>([]);

  get courses() {
    return this.courses$.asObservable();
  }

  constructor() {}

  getCourses() {
    const data = localStorage.getItem(Strings.STORAGE_KEY);
    console.log(data);
    if (data) {
      const courses = JSON.parse(data);
      // this.courses[0] = { ...this.couyyyrses[0], isActive: true }
      this.courses$.next(courses);
      return courses;
    }
    return [];
  }

  addCourse(data: Course) {
    const courses = this.courses$.value;
    const newCourses = [...courses, { ...data, id: courses.length + 1 }];

    // this.courses$.next(newCourses);
    this.updateCourse(newCourses);

    // save in local storage
    this.setItem(newCourses);
  }

  updateCourse(data: Course[]) {
    this.courses$.next(data);
  }

  setItem(data: Course[]) {
    localStorage.setItem(Strings.STORAGE_KEY, JSON.stringify(data));
  }
}
