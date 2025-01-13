import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CoursesComponent } from '../courses/courses.component';
import { Strings } from '../../enum/strings.enum';

@Component({
  selector: 'app-admin',
  imports: [
    FormsModule,
    // NgIf,
    // NgFor,
    CoursesComponent
  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
})
export class AdminComponent {

  model: any = {};
  cover!: string | null;
  cover_file: any;
  showError = false;
  // courses: any[] = [];

  ngOnInit() {
    console.log('admin ngoninit');
    // this.getCourses();

  }

  // getCourses() {
  //   const data = localStorage.getItem(Strings.STORAGE_KEY);
  //   console.log(data);
  //   if(data){
  //     this.courses = JSON.parse(data);
  //   }
  // }

  onFileSelected(event: any) {
    console.log(event);

    const file = event.target.files[0];
    if(file) {
      this.cover = file;
      const reader = new FileReader();
      console.log(reader);
      reader.onload = () => {
        const dataUrl = reader.result!.toString();
        this.cover = dataUrl;
        console.log('image: ', this.cover);
      };
      reader.readAsDataURL(file);
      this.showError = false;
    }
  }

  onSubmit(form: NgForm) {
    if(form.invalid || !this.cover) {
      console.log('Form invalid');
      form.control.markAllAsTouched();
      if(!this.cover) {
        this.showError = true;
      }
      return;
    }

    if(this.cover) {
      console.log();

    }

    console.log(form.value);

    this.saveCourse(form);
  }

  clearForm(form: NgForm) {
    form.reset();
    this.cover = null;
    this.cover_file = null;
  }

  saveCourse(form: NgForm) {
    const formValue = form.value;
    console.log(formValue);

    // const data = {
    //   ...formValue,
    //   image: this.cover,
    //   id: this.courses.length + 1,
    // };

    // this.courses = [ ...this.courses, data ];
    // // this.localStorage.setItem(Strings.STORAGE_KEY, JSON.stringify(this.courses));
    // this.setItem(this.courses);

    this.clearForm(form);

  }

  deleteCourse(course: any) {
    // this.courses = this.courses.filter(course_item => course_item.id != course.id);
    // this.setItem(this.courses);
  }

  setItem(data: any) {
    localStorage.setItem(Strings.STORAGE_KEY, JSON.stringify(data));
  }

}
