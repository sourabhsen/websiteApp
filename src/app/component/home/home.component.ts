import { Component } from '@angular/core';
import { HostListener, ElementRef } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes
} from '@angular/core';



@Component({
 templateUrl: './home.html',
  animations: [
    trigger('moveBgImageSection', [
      state('show', style({
        opacity:0.4,
        transform: "translate3d(0,0,0)",
        transition: 'all 0.5s ease-in 1s'
      })),
      state('hide',style({
        opacity: 0.6,
        transform: "translateX(0%)",
        transition: 'all 0.5s ease-in 1s'
      })),
      transition('hide => show', animate('700ms ease-out')),
      transition('show => hide', animate('700ms ease-out'))
    ]),
    trigger('moveBgImage', [
      state('show', style({
        opacity:0.5,
        transform: "translate3d(0px, -101.543px, 0px) scale(1.20147)",
        transition: 'all 0.5s ease-in 1s'
      })),
      state('hide',style({
       
        transform: "translateX(0%)",
        transition: 'all 0.5s ease-in 1s'
      })),
      transition('hide => show', animate('700ms ease-out')),
      transition('show => hide', animate('700ms ease-out'))
    ]),
  ]
})

// Component class
export class HomeComponent {

state = 'hide'

  constructor(public el: ElementRef) { }

    @HostListener('window:scroll', ['$event'])
    checkScroll() {
      const componentPosition = this.el.nativeElement.offsetTop
      const scrollPosition = window.pageYOffset

      if (scrollPosition >= 100) {
        this.state = 'show'
      } else {
        this.state = 'hide'
      }

    }






}