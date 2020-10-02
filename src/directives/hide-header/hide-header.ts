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
  private fixedContent: HTMLElement;
  private scrollContent: HTMLElement;
  private transitionTime: string = "400";

  constructor(private element: ElementRef, private renderer: Renderer) {
    console.log(element);
    console.log(renderer);
  }

  ngOnInit(){

    this.scrollContent = this.element.nativeElement.getElementsByClassName("scroll-content")[0];
    this.fixedContent = this.element.nativeElement.getElementsByClassName("fixed-content")[0];

    this.renderer.setElementStyle(this.scrollContent, "transition", "margin-top "+ this.transitionTime);
    this.renderer.setElementStyle(this.fixedContent, "transition", "margin-top "+ this.transitionTime);

  }

  onScrooll(event){

    console.log(event);

    if(!this.header){
      this.header = event.headerElement;
      this.headerHeight = this.header.clientHeight;

      this.renderer.setElementStyle(this.header, "transition", "top "+ this.transitionTime);
      //console.log(this.headerHeight);
    }

    event.domWrite(() => {
      console.log(event.directionY);
      if(event.directionY == "down"){
        this.renderer.setElementStyle(this.header, "top", "-" + this.headerHeight + "px");
        this.renderer.setElementStyle(this.scrollContent, "margin-top", "0px");
        this.renderer.setElementStyle(this.fixedContent, "margin-top", "0px");
      }else{
        this.renderer.setElementStyle(this.header, "top", "0px");
        this.renderer.setElementStyle(this.scrollContent, "margin-top", this.headerHeight + "px");
        this.renderer.setElementStyle(this.fixedContent, "margin-top", this.headerHeight + "px");
      }

    });
  }

}
