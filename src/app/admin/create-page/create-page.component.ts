import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validator, Validators} from "@angular/forms";
import {Product} from "../../shared/interfaces";
import {AdminService} from "../shared/services/admin.service";

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss']
})
export class CreatePageComponent implements OnInit {
  form!: FormGroup;
  image: string = '';


  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      imageChoose: new FormControl('', Validators.required),
      image: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    const product: Product = {
      title: this.form.value.title,
      category: this.form.value.category,
      price: this.form.value.price,
      image: this.form.value.image,
    };

    this.adminService.createProduct(product).subscribe((res) => {
      this.form.reset();
      this.image = '';
    });

  }

  onFileChange($event: Event) {
    const target = $event.target as HTMLInputElement;
    const reader = new FileReader();

    if(target.files && target.files.length) {
      console.log(target.files)
      const file = target.files[0];
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.image = reader.result as string;
        this.form.patchValue({
          image: this.image
        });
      }
    }
  }
}
