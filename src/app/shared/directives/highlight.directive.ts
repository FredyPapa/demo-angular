import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {

  @Input() highlightColor!: string
  @Input() title!: string


  tooltipElement: any;

  constructor(private el: ElementRef) {
    this.tooltipElement = document.createElement('div');
    this.tooltipElement.classList.add('tooltiptext');
  }

  // @HostListener('click')
  // onClick() {
  //   console.log('click');
  //   this.setBackgrounHighlight('red');
  // }

  @HostListener('mouseenter')
  onMouseenter() {
    console.log('mouseenter');
    this.tooltipElement.innerText = this.title;
    this.el.nativeElement.classList.add('tooltip-demo');
    this.el.nativeElement.append(this.tooltipElement);
    // this.setBackgrounHighlight(this.highlightColor ?? 'yellow');
  }

  @HostListener('mouseleave')
  onMouseleave() {
    console.log('mouseleave');
    this.el.nativeElement.classList.remove('tooltip-demo');
    this.tooltipElement.remove();
    // this.setBackgrounHighlight(null);
  }

  // private setBackgrounHighlight(color: string | null) {
  //   this.el.nativeElement.style.backgroundColor = color;
  // }
}
