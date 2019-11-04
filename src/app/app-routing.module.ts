import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CreateBookComponent} from './api/create-book/create-book.component';
import {TestApiComponent} from './api/test-api/test-api.component';
import {EditBookComponent} from './api/edit-book/edit-book.component';


const routes: Routes = [
  {
    path: 'add',
    component: CreateBookComponent,
  },
  {
    path: '',
    component: TestApiComponent,
  },
  {
    path: 'edit/:id',
    component: EditBookComponent,
  },
  // {
  //   path: '',
  //   component: TestApiComponent,
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
