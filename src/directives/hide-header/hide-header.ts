import { Directive, ElementRef, Renderer, Renderer2 } from '@angular/core';

/**
 * Generated class for the HideHeaderDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[hide-header]', // Attribute selector
  host: {
    "(ionScroll)": "onScrooll($event)"
  }
})
export class HideHeaderDirective {

  private header: HTMLElement;
  private headerHeight: number;
  private scroollContent: HTMLElement;

  constructor(private element: ElementRef, private renderer: Renderer) {
    
  }

  ngOnInit(){
    this.scroollContent = this.element.nativeElement.getElementsByClassName("scrooll-content")[0];
  }

  onScrooll(event){
    if(!this.header){
      this.header = event.headerElement;
      this.headerHeight = this.header.clientHeight;
      console.log(this.headerHeight);
    }

    if(event.scrollTop > 0){
      this.renderer.setElementStyle(this.header, "top", "-" + this.headerHeight + "px");
      this.renderer.setElementStyle(this.scroollContent, "margin-top", "0px");
    }else{
      this.renderer.setElementStyle(this.header, "top", "0px");
      this.renderer.setElementStyle(this.scroollContent, "margin-top", "-" + this.headerHeight + "px");
    }
  }

}
