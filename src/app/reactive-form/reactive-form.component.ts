import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  myForm!: FormGroup;
  productForm!: FormGroup;

  posts: any[] = [];

  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }
  
  ngOnInit(): void {
    this.createControls();
    this.getPostsData();
  }

  createControls() {
    this.myForm = this.formBuilder.group({
      name: [],
      age: [],
      email: [],
      post: [],
      product: this.formBuilder.array([])
    })
    this.addProduct();
  }

  getPostsData() {
    this.http.get('https://jsonplaceholder.typicode.com/posts', {
      // headers: {
      //   Authorization: 'Bearer',
      //   Accept : 'application/json' 
      // }
    }).subscribe((result: any) => {
      this.posts = result;
    })
  }
  
  onSubmit() {
    console.log('myForm.value', this.myForm.value);
  }

  addProduct() {
    const productForm = this.formBuilder.group({
      name: [],
      price: []
    });
    this.product.push(productForm);
  }

  get product(): FormArray {
    return this.myForm.get('product') as FormArray;
  }

  removeProduct(index: number) {
    this.product.removeAt(index);
  }
}
