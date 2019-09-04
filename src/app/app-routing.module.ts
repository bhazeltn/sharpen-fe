import { SkatersComponent } from './skaters/skaters.component';
import { SkaterListComponent } from './skaters/skater-list/skater-list.component';
import { EditSkaterComponent } from './skaters/edit-skater/edit-skater.component';
import { AddSkaterComponent } from './skaters/add-skater/add-skaters.components';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'add-skater' },
  { path: 'add-skater', component: AddSkaterComponent },
  { path: 'edit-skater/:id', component: EditSkaterComponent },
  { path: 'skater-list', component: SkaterListComponent },
  // { path: 'skaters', component: SkatersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
