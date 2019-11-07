import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CreateProductComponent} from './product/create-product/create-product.component';
import {ListProductComponent} from './product/list-product/list-product.component';
import {EditBookComponent} from './product/edit-book/edit-book.component';


const routes: Routes = [
  {
    path: 'add',
    component: CreateProductComponent,
  },
  {
    path: '',
    component: ListProductComponent,
    pathMatch: 'full',
  },
  {
    path: 'edit/:id',
    component: EditBookComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
