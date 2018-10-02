import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';
/*
Renderer2: when you create dir within Angular, our app is being rendered mainly in the browser
but in other frameworks or Native scripts the rendering would be done diff

HostListener: listen to mouse movements on the screen and respond appropriately.
*/

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef,
    private renderer: Renderer2) { }

    @HostListener('mouseenter') onmouseenter() {
      this.renderer.addClass(this.el.nativeElement, 'highlight');
    }

    @HostListener('mouseleave') onmouseleave() {
      this.renderer.removeClass(this.el.nativeElement, 'highlight');
    }
}
