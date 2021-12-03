import { Vm } from './../../models/vm.model';
import { Component, OnInit } from '@angular/core';
import { catchError, map, Observable, of, startWith } from 'rxjs';
import { VmService } from 'src/app/services/vm.service';
import { Router } from '@angular/router';
import { AppDataState, DataStateEnum } from 'src/state/vm.state';

@Component({
  selector: 'app-vms',
  templateUrl: './vms.component.html',
  styleUrls: ['./vms.component.css']
})
export class VmsComponent implements OnInit {

  vms$?:Observable<AppDataState<Vm[]>>;
  readonly DataStateEnum=DataStateEnum;
  constructor(private vmService: VmService, private router:Router) { }

  ngOnInit(): void {
  }
  onGetAllVms(){
    console.log("start...")
    this.vms$=
      this.vmService.getAllVms().pipe(
        map((data: any)=>{
          console.log(data)
          return ({dataState:DataStateEnum.LOADED,data:data})
        }),
        startWith({dataState:DataStateEnum.LOADING}),
        catchError((err: { message: any; })=>of({dataStat:DataStateEnum.ERROR,errorMessage:err.message}))

      );
 }
 onNewVm(){
  this.router.navigateByUrl("/new-vm")
}
onSelect(v:Vm){
  this.vmService.select(v)
     .subscribe(data=>{
       v.etat=data.etat;
     })

}

}
