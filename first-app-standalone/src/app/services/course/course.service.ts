import { Injectable, signal, WritableSignal } from '@angular/core';
import { Strings } from '../../enum/strings.enum';
import { Course } from '../../interfaces/course.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CourseService {

  // private courses$ = new BehaviorSubject<Course[]>([]);

  // get courses() {
  //   return this.courses$.asObservable();
  // }

  private courses: WritableSignal<Course[]> = signal<Course[]>([]);

  get courseSignal() {
    return this.courses.asReadonly();
  }

  constructor() {
    this.loadCourses();
  }

  // getCourses() {
  //   const data = localStorage.getItem(Strings.STORAGE_KEY);
  //   // console.log(data);
  //   if (data) {
  //     const courses = JSON.parse(data);
  //     // this.courses[0] = { ...this.couyyyrses[0], isActive: true }
  //     // this.courses$.next(courses);
  //     this.updateCourses(courses);

  //     this.courses.set(courses);
  //     return courses;
  //   }
  //   return [];
  // }

  loadCourses() {
    const data = localStorage.getItem(Strings.STORAGE_KEY);
    // console.log(data);
    if (data) {
      const courses = JSON.parse(data);

      this.courses.set(courses);
      // return courses;
    }
    // return [];
  }

  getCourses(): Course[] {
    return this.courses();
  }

  addCourse(data: Course) {
    // const courses = this.courses$.value;
    // const newCourses = [...courses, { ...data, id: courses.length + 1 }];

    // this.courses$.next(newCourses);
    // this.updateCourse(newCourses);


    // const courses = this.courses();
    // const newCourse = { ...data, id: courses.length + 1 };
    // const newCourses = [...courses, newCourse];

    // this.courses.update((courses_data) => [...courses_data, newCourse]);

    // save in local storage
    // this.setItem(newCourses);
    // return newCourses;


    let updatedCourses: Course[] = [];

    this.courses.update(courses => {
      const newCourse = { ...data, id: courses.length + 1 };
      const updatedCourses = [...courses, newCourse];
      this.setItem(updatedCourses);
      return updatedCourses;
    })

    return updatedCourses;
  }

  deleteCourse(data: Course) {
    // let courses: Course[] = this.courses$.value;
    // courses = courses.filter(course_item => course_item.id != data.id);
    // this.updateCourse(courses);

    // this.setItem(courses);

    this.courses.update((courses) => {
      const updatedCourses = courses.filter(c => c.id !== data.id);
      this.setItem(updatedCourses);
      return updatedCourses;
    });
  }

  // updateCourse(data: Course[]) {
  //   this.courses$.next(data);
  // }

  setItem(data: Course[]) {
    localStorage.setItem(Strings.STORAGE_KEY, JSON.stringify(data));
  }
}
