import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddVmComponent } from './components/add-vm/add-vm.component';
import { HomeComponent } from './components/home/home.component';
import { VmsComponent } from './components/vms/vms.component';

const routes: Routes = [
  {path:"vms", component:VmsComponent},
  {path:"", component:HomeComponent },
  {path:"new-product", component:AddVmComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
