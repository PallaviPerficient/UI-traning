import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  EmployeeID: any ='';
  constructor(private route: Router,private toastController: ToastController) { }

  ngOnInit() {
  }


  login(){
    console.log(this.EmployeeID);
    if(this.EmployeeID != ''){
      window.localStorage.setItem('empId', this.EmployeeID);
      this.route.navigate(['./tabs']);
    
    this.EmployeeID ='';
    }else{
this.presentToast();
    }
  }


  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Please enter Employee ID',
      duration: 1500,
    //  position: 'top'
    });
  
    await toast.present();
  }
}
