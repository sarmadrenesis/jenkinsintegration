import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: any
  submitted = false;
  roles:any
  
  constructor( private apiService:ApiService, public router:Router) { 
    this.roles = []
  }

  ngOnInit(): void {
    this.getAllRoles();
    this.registerForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      role :  new FormControl('', Validators.required),
    })
  }

  getAllRoles(){
    this.apiService.get(`roles/allRoles`).subscribe(result=>{
     result.data.forEach((element:any) => {
       if(element.roleName !== 'superAdmin'){
         this.roles.push({"id": element._id, "name": element.roleName})
       }
     });
    })
  }

  get f() { return this.registerForm.controls; }

  save() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    const finalObject = {
      email : this.registerForm.controls.email.value,
      firstName : this.registerForm.controls.firstName.value,
      lastName : this.registerForm.controls.lastName.value,
      role : this.registerForm.controls.role.value,
      password: this.registerForm.controls.password.value,
    }
    this.apiService.add(`users/addUser`,finalObject).subscribe((resp:any)=>{
      if (resp.type === 'success') {
        Swal.fire({
          icon: 'success',
          title: 'Done.!',
          text: resp.message,
        });
        this.router.navigateByUrl('/');
      }else{
        Swal.fire({
          icon: 'error',
          text: resp.message,
        });
      }
    })      
  }
}
