import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  EmployeeId: any;
  constructor(private route: Router) {

  }

  ionViewWillEnter(){
    this.EmployeeId = window.localStorage.getItem("empId");
    console.log(this.EmployeeId);
}

  logout(){
    this.route.navigate(['./login']);
    localStorage.removeItem('empId');
  }
}
