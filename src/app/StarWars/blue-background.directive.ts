import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appBlueBackground]'
})
export class BlueBackgroundDirective {

  constructor() { }
  @HostBinding('style.backgroundColor') background = 'white';
  @HostListener('mouseenter') public enter() {
    this.background = 'lightblue'
  }
  @HostListener('mouseleave') public leave() {
    this.background = 'white'
  }


}
