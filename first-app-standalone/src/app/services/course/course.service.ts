import { Injectable } from '@angular/core';
import { Strings } from '../../enum/strings.enum';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }

  getCourses() {
    const data = localStorage.getItem(Strings.STORAGE_KEY);
    console.log(data);
    if(data){
      const courses = JSON.parse(data);
      // this.courses[0] = { ...this.couyyyrses[0], isActive: true }
    }
  }
}
