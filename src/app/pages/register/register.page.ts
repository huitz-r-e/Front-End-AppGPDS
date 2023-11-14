import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  formRegister!:FormGroup;
  constructor(private fb:FormBuilder) { 
    this.formRegister=this.fb.group({
      password: ['', [Validators.required,
      Validators.maxLength(40),
      Validators.minLength(6)]],
      NUE: ['', Validators.required],
      id_rol: ['', Validators.required],
     });
  }

  ngOnInit() {
  }

  submit(){

  }

}
