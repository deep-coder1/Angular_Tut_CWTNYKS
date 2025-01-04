import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CoursesComponent } from '../courses/courses.component';
import { Strings } from '../enum/strings.enum';

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
  cover!: string;
  cover_file: any;
  showError = false;
  courses: any[] = [];

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

    this.saveCourse(form.value);
  }

  saveCourse(formValue: any) {
    console.log(formValue);

    const data = {
      ...formValue,
      image: this.cover,
      id: this.courses.length + 1,
    };

    localStorage.setItem(Strings.STORAGE_KEY, JSON.stringify(this.courses));

    this.courses = [ ...this.courses, data ];
  }

}
