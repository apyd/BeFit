import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpService} from '../shared/http.service';
@Component({
  selector: 'app-add-product-form',
  templateUrl: './add-product-form.component.html',
  styleUrls: ['./add-product-form.component.css']
})

export class AddProductFormComponent implements OnInit {

  constructor(
    private http: HttpService) {
  }

  addProductForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    brand: new FormControl(''),
    packageCapacity: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
    unit: new FormControl('g', [Validators.required]),
    caloricValue: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
    protein: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
    carbohydrates: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
    fat: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
    barcode: new FormControl('')
  });

  onSubmit() {
    this.http.addProduct(this.addProductForm.value).subscribe(product => console.log(product));
  }

  ngOnInit() {}
}
