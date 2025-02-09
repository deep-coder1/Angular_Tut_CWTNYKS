import { Component, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Course } from '../../interfaces/course.interface';
import { CourseService } from '../../services/course/course.service';

@Component({
  selector: 'app-admin',
  standalone: false,

  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
// export class AdminComponent {

// }



export class AdminComponent {

  model: any = {};
  cover!: string | null;
  cover_file: any;
  showError = false;
  // courses: any[] = [];

  private courseService = inject(CourseService);

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

  async saveCourse(form: NgForm) {
    try {
      const formValue = form.value;
      console.log(formValue);

      const data: Course = {
        ...formValue,
        image: this.cover,
        // id: this.courses.length + 1,
      };

      await this.courseService.addCourse(data);

      // this.courses = [ ...this.courses, data ];
      // // this.localStorage.setItem(Strings.STORAGE_KEY, JSON.stringify(this.courses));
      // this.setItem(this.courses);

      this.clearForm(form);
    } catch(e) {
      console.log(e);;

    }

  }

  // deleteCourse(course: any) {
  //   // this.courses = this.courses.filter(course_item => course_item.id != course.id);
  //   // this.setItem(this.courses);
  // }

  // setItem(data: any) {
  //   localStorage.setItem(Strings.STORAGE_KEY, JSON.stringify(data));
  // }

}
