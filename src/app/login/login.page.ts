import { Component, OnInit, AfterContentInit, AfterViewInit,OnDestroy } from '@angular/core';
import {  MenuController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

 constructor( public menuCtrl: MenuController){}

 ngOnInit() {
    this.menuCtrl.enable(false);
    this.menuCtrl.swipeEnable(false);
  }
  ngAfterContentInit()  {
    this.menuCtrl.enable(false);
    this.menuCtrl.swipeEnable(false);
  }
  ngAfterViewInit() {
    this.menuCtrl.enable(false);
    this.menuCtrl.swipeEnable(false);
  }
  ngOnDestroy() {
    this.menuCtrl.enable(true);
    this.menuCtrl.swipeEnable(true);
  }

}
