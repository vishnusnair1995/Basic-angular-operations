import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
import { RegisterService } from './register.service';
import { User } from './user';
@Component({
  selector: 'app-registrationform',
  templateUrl: './registrationform.component.html',
  styleUrls: ['./registrationform.component.css']
})
export class RegistrationformComponent implements OnInit {
 userForm:any;
 submitted:any;
 data:any;
 user: User;

  constructor(private fb:FormBuilder,private registerService:RegisterService) {
    this.user = new User
   }

  ngOnInit() {
    this.setFormValues()
  }
  setFormValues()
  {
    this.userForm = this.fb.group({
      firstName : ['',[Validators.required]],
      lastName : [''],
      email :[''],
      password : ['']
    })

  }
  onSubmit(formValues:any)
  {
    this.submitted = true;
    console.log(this.userForm.valid);
    if(this.userForm.valid)
    {
      this.user = this.userForm.value;
      this.registerService.postFormValues(this.user).subscribe(res=>

        {
          console.log(res)
        });
      console.log(formValues);
    }

  }
  get f() { return this.userForm.controls; }
  loadApiData()
  {
    this.registerService.getData().subscribe(res=>
   { this.data = res
    console.log(this.data) });
  }
}
