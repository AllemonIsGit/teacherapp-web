import { Injectable, Renderer2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HTMLService {

  constructor(
    private renderer: Renderer2
  ) { }

  validateInput(valid: boolean, elementSelector: String): boolean {
    if (!valid) {
      var inputElement = this.renderer.selectRootElement(elementSelector)
      this.renderer.addClass(inputElement, 'myInputInvalid')
      return true
    }
    var inputElement = this.renderer.selectRootElement(elementSelector)
    this.renderer.removeClass(inputElement, 'myInputInvalid')
    return false


  }
}
