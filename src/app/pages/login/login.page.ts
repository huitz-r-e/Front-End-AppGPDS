import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { AuthServiceService } from 'src/app/auth-service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertController, LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  // email:any
  // password:any
  // contact:any

  // constructor(private toastController: ToastController, private alertController: AlertController, private loadingController: LoadingController, private router: Router, public formBuilder: FormBuilder) { }
  formLogin!:FormGroup;
  constructor(private fb:FormBuilder, private authService:AuthServiceService,private toast:ToastController, private router:Router) { 
    this.formLogin=this.fb.group({
      password: ['', [Validators.required,
      Validators.maxLength(40),
      Validators.minLength(6)]],
      nombre: ['', Validators.required]
     });
  }

  ngOnInit() {
   
  }

  submit(){
    let data=this.formLogin.value;
    
    this.authService.login(data).subscribe((res:any)=>{
    console.log(res);
    
      this.authService.guardarToken(res.Token);
      this.authService.guardarUser(res.Usuario);
    
    if(res){
      this.presentToast('Has iniciado sesión', 'balloon')
      console.log('newdata true login');
      this.router.navigate(['/home-admin'])
      this.token1=false;
     } else {
       this.presentToast('Usuario o password incorrectos', 'box')
       console.log('es incorrcto');
       
     }
    
      
    })
  }

  async presentToast(mensaje:string, icono:string) {
    //let prod = this.myform.form.value
    const toast = await this.toast.create({
      message: mensaje,
      icon:icono,
      duration: 2000
    });
    toast.present();
  }

  token1: boolean | undefined;

  incorrectL(){
    this.token1=true;
  }

  // async login() {
  //   const loading = await this.loadingController.create();
  //   await loading.present();
  //   // console.log(this.email + this.password);
  //   if (this.ionicForm.valid) {

    //   //  await  loading.dismiss();
    //   const user = await this.authService.loginUser(this.ionicForm.value.email, this.ionicForm.value.password).catch((err) => {
    //     this.presentToast(err)
    //     console.log(err);
    //     loading.dismiss();
    //   })

    //   if (user) {
    //     loading.dismiss();
    //     this.router.navigate(['/home'])
    //   }
    // } else {
    //   return console.log('Please provide all the required values!');
  //   }

  // }
  // get errorControl() {
  //   return this.ionicForm.controls;
  // }

  // async presentToast(message: undefined) {
  //   console.log(message);

  //   const toast = await this.toastController.create({
  //     message: message,
  //     duration: 1500,
  //     position: 'top',
  //   });

  //   await toast.present();
  // }

}
