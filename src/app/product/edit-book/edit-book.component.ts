import {Component, OnInit} from '@angular/core';
import {ServiceApiService} from '../../service/service-api.service';
import {IResponse} from '../../iresponse';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  book;
  id: any;
  formBook: FormGroup;


  constructor(private apiService: ServiceApiService, private fb: FormBuilder, private router: Router, private routerMap: ActivatedRoute) {
  }

  ngOnInit() {
    this.id = this.routerMap.snapshot.paramMap.get('id');
    this.getBook(this.id);
    this.formBook = this.fb.group({
      name: [''],
      body: [''],
      read: []
    });
  }

  getBook(id: number) {
    this.apiService.findBook(id).subscribe((response: IResponse) => {
      console.log(response.data);
      this.formBook.patchValue({
        name: response.data.name,
        body: response.data.body,
        read: response.data.read,
      });
    });
  }

  update() {
    this.apiService.update(this.formBook.value, this.id).subscribe(response => {
      this.router.navigate(['']);
    });
  }
}
