import { Directive, ElementRef, Renderer, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appBookImageHover]'
})
export class BookImageHoverDirective implements AfterViewInit {

	constructor(private element:ElementRef, private renderer: Renderer) {}

	ngAfterViewInit()
	{
		this.element.nativeElement.addEventListener('mouseenter', () => this.renderer.setElementStyle(this.element.nativeElement, 'transform', 'scale(1.2)'));
		this.element.nativeElement.addEventListener('mouseleave', () => this.renderer.setElementStyle(this.element.nativeElement, 'transform', 'scale(1)'));
	}
}
