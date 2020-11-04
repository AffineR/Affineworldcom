import { Component, OnInit, HostListener, Inject } from '@angular/core';  
import { trigger, state, transition, style, animate } from '@angular/animations'; 
import { DOCUMENT, Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aboutnavbar',
  templateUrl: './aboutnavbar.component.html',
  styleUrls: ['./aboutnavbar.component.css'],
  animations:[ 
    trigger('fade',
    [ 
      state('void', style({ opacity : 0})),
      transition(':enter',[ animate(300)]),
      transition(':leave',[ animate(500)]),
    ]
    )]
})
export class AboutnavbarComponent implements OnInit {

  user:any;
  check:boolean;
  login:boolean;

  constructor(@Inject(DOCUMENT) document,private router:Router,private loc:Location) { }

  ngOnInit()
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

  logout()
  {
    localStorage.clear();
    this.loc.back();
  }


}
