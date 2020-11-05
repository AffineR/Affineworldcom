import { Component, OnInit, HostListener, Inject, Input  } from '@angular/core';  
import { trigger, state, transition, style, animate } from '@angular/animations'; 
import { DOCUMENT } from '@angular/common';
import { NgxSpinnerService } from "ngx-spinner";
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations:[ 
    trigger('fade',
    [ 
      state('void', style({ opacity : 0})),
      transition(':enter',[ animate(300)]),
      transition(':leave',[ animate(500)]),
    ]
    )]
})
export class HomeComponent implements OnInit {

  @Input()
  url: string = "https://deployavatar.web.app/";
  urlSafe: SafeResourceUrl;

  constructor(@Inject(DOCUMENT) document,private spinner: NgxSpinnerService,public sanitizer: DomSanitizer) { }

  ngOnInit() {  
    this.spinners();
    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    var vid=document.getElementById("myVideo");
    if (document.body.scrollTop > 650 || document.documentElement.scrollTop > 550) {
      vid.oncanplay;
    } else {
      vid.onpause;
    }
  }

  spinners()
  {
    this.spinner.show();
 
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
  }


}