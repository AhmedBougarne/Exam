import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VmService } from 'src/app/services/vm.service';

@Component({
  selector: 'app-add-vm',
  templateUrl: './add-vm.component.html',
  styleUrls: ['./add-vm.component.css']
})
export class AddVmComponent implements OnInit {

  vmFormGroup=new FormGroup({});
  submitted?:boolean=false;
  constructor(private fb:FormBuilder,private vmService:VmService) {
   }

  ngOnInit(): void {
    this.vmFormGroup=this.fb.group({
      ip:["",Validators.required],
      name:["",Validators.required],
      etat:[false,Validators.required],
    })
  }
  onSaveVm(){
     this.submitted=true
     if(this.vmFormGroup.invalid) return;
     this.vmService.saveVm(this.vmFormGroup?.value)
        .subscribe(data=>{
          alert("Success saving Vm.")
        })
  }

}
