import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {ServiceApiService} from '../../service/service-api.service';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {IValidation} from '../../ivalidation';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {
  formBooks;
  validator: IValidation = {};

  constructor(private fb: FormBuilder, private bookService: ServiceApiService, private http: HttpClient, private router: Router) {
  }

  ngOnInit() {
    this.formBooks = this.fb.group({
      name: ['', Validators.required],
      body: ['', Validators.required],
      read: false,
    });
  }

  addBook() {
    this.bookService.addBook(this.formBooks.value).subscribe(
      value => {
        this.router.navigate(['']);
      }, error => {
        console.log(error.error.errors);
        this.validator = error.error.errors;
      }
    );

  }

}
