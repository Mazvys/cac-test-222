import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnotherComponent } from './another/another.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {path:"", component:TestComponent},
  {path:'test', component:TestComponent},
  {path:"another",component:AnotherComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
