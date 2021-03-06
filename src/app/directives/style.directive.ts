import {Directive, ElementRef, HostBinding, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
 selector:'[appStyle]'
})
export class StyleDirective {
 @Input('appStyle') color:string = 'blue'
 @Input() dStyles: {border?: string, fontWeight?: string, borderRadius?: string}

 @HostBinding('style.color') elColor = null;

 constructor(private el: ElementRef, private renderer: Renderer2) {
 // this.r.setStyle(this.el.nativeElement, 'color', 'blue');
 }

 @HostListener('click' , ['$event.target']) onClick(event){
  console.log(event);
 }

 @HostListener('mouseenter') onEnter(){
  this.elColor = this.color;
  //this.renderer.setStyle(this.el.nativeElement, 'color', this.color);
  // this.renderer.setStyle(this.el.nativeElement, 'fontWeight', this.dStyles.fontWeight);
  // this.renderer.setStyle(this.el.nativeElement, 'border', this.dStyles.border);
  // this.renderer.setStyle(this.el.nativeElement, 'borderRadius', this.dStyles.borderRadius);
 }

 @HostListener('mouseleave') onLeave(){
  this.elColor = null;
 // this.renderer.setStyle(this.el.nativeElement, 'color', null);
  // this.renderer.setStyle(this.el.nativeElement, 'fontWeight', null);
  // this.renderer.setStyle(this.el.nativeElement, 'border', null);
  // this.renderer.setStyle(this.el.nativeElement, 'borderRadius', null);

 }


 // @HostListener('dblclick', ['$event.target']) onDBClick(){
 //  const div = this.renderer.createElement('div');
 //  const text = this.renderer.createText('Hello world!');
 //
 //  this.renderer.appendChild(div, text);
 //  this.renderer.appendChild(this.el.nativeElement, div);
 //
 //  console.log('you db')
 // }






}
