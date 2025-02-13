import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHoverColor]',
  standalone: true
})
export class HoverColorDirective {

  @Input() defaultColor: string = 'black'; // Default text color
  @Input() hoverColor: string = 'orange'; // Color on hover

  constructor(private el: ElementRef) {
    this.setColor(this.defaultColor);
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.setColor(this.hoverColor); // Change to hover color on mouse enter
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setColor(this.defaultColor); // Change back to default color on mouse leve
  }

  private setColor(color: string) {
    this.el.nativeElement.style.color = color;
  }

}
