import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IResponse} from '../iresponse';


@Injectable({
  providedIn: 'root'
})
export class ServiceApiService {
  data: any;
  private readonly API_URL = 'http://localhost:8000/api/';

  constructor(private http: HttpClient) {
  }

  getBooks(): Observable<IResponse> {
    return this.http.get<IResponse>(this.API_URL + 'books');
  }

  addBook(book: IBook) {
    return this.http.put(this.API_URL + 'books/add', book);
  }

  delete(id: number) {
    return this.http.delete(this.API_URL + 'books/' + id);
  }

  findBook(id: number): Observable<IResponse> {
    return this.http.get<IResponse>(this.API_URL + 'books/' + id);
  }

  update(value: any, id: number) {
    return this.http.patch(this.API_URL + 'books/' + id, value);
  }
}
