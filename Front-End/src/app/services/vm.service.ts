 
import { VmsComponent } from './../components/vms/vms.component';
 
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vm } from '../models/vm.model';
 

@Injectable({
  providedIn: 'root'
})
export class VmService {

  constructor(private http:HttpClient) { 

  }
  //recuperer tous les produits
  getAllVms():Observable<Vm[]>{
    let host=environment.host;
    return this.http.get<Vm[]>(host+"/vms");
  }
   
  
   
  select(vm:Vm):Observable<Vm>{
    let host=environment.host;
    vm.etat=!vm.etat;
    return this.http.put<Vm>(host+"/vms/"+vm.ip,vm);
  }
   
  saveVm(vm:Vm):Observable<void>{
    let host=environment.host;
    return this.http.post<void>(host+"/vms",vm);
  }
  updateProduct(vm:Vm):Observable<void>{
    let host=environment.host;
    return this.http.put<void>(host+"/vms/",vm.ip);
  }
  getVm(ip:string):Observable<Vm>{
    let host=environment.host;
    return this.http.get<Vm>(host+"/vms/"+ip);
  }
  
}
