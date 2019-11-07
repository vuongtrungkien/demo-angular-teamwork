import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ServiceApiService} from '../../service/service-api.service';
import {Router} from '@angular/router';
import {IResponse} from '../../iresponse';

@Component({
  selector: 'app-test-api',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  books: IBook[] = [];
  p = 1;

  constructor(private  http: HttpClient, private  apiService: ServiceApiService, private router: Router) {
  }

  ngOnInit() {
    this.getAll();
  }
  getAll() {
    this.apiService.getBooks().subscribe((next: IResponse) => {
      this.books = next.data;
      console.log(this.books);
    });
  }

  deleteBook(id: number) {
    this.apiService.delete(id).subscribe(value => {
      console.log(value);
      this.getAll();
    });
    console.log(this.books);
  }

}
