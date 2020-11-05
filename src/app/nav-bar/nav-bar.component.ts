import { Component, OnInit, HostListener, Inject } from '@angular/core';  
import { trigger, state, transition, style, animate } from '@angular/animations'; 
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  animations:[ 
    trigger('fade',
    [ 
      state('void', style({ opacity : 0})),
      transition(':enter',[ animate(300)]),
      transition(':leave',[ animate(500)]),
    ]
    )]
})
export class NavBarComponent implements OnInit {

  user:any;
  check:boolean;
  login:boolean;

  constructor(@Inject(DOCUMENT) document,private router:Router) { }

  ngOnInit()
  {
    this.getusebydata();
  }


  getusebydata()
  {
    var user=localStorage.getItem('user');
    this.user=JSON.parse(user);
    console.log(this.user)
    if(this.user!=null)
    {
      this.check=true;
      this.login=false;
    }
    else{
      this.check=false;
      this.login=true;
    }
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    if (document.body.scrollTop > 550 || document.documentElement.scrollTop > 550) {
      document.getElementById("mainNav").style.transition = "1s";
      document.getElementById("mainNav").style.backgroundColor = "rgb(46, 115, 206)";
      document.getElementById("btne").style.color = "blue";
      // document.getElementById("dopdownconstent").style.backgroundColor = "rgb(46, 115, 206)";
      // document.getElementById("dopdownconsten").style.backgroundColor = "rgb(46, 115, 206)";
    } else {
      document.getElementById("mainNav").style.transition = "1s";
      document.getElementById("mainNav").style.backgroundColor = "rgba(0,0,0,0.2)";
      // document.getElementById("dopdownconstent").style.backgroundColor = "";
      // document.getElementById("dopdownconsten").style.backgroundColor = "";
    }
  }


  logout()
  {
    localStorage.clear();
    this.getusebydata();
  }


}
