import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin',
  imports: [
    FormsModule,
    // NgIf
  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
})
export class AdminComponent {

  model: any = {};
  cover!: string;
  cover_file: any;
  showError = false;

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
  }
}
