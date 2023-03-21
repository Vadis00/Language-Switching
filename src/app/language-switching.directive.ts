import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { ArabicAlphabetMap, COMBINATION_SYMBOLS, IsShiftDownArabicAlphabetMap, SYNCFUSION_COMPONENTS } from './const/language-switching.directive.const';

@Directive({
  selector: '[languageSwitching]'
})
export class LanguageSwitchingDirective {

  constructor(private el: ElementRef, private _renderer: Renderer2) {
    //assign the attribute dir=rtl to the component
    this._renderer.setAttribute(this.el.nativeElement, 'dir', 'rtl');
  }


  /**
   * This decorator listens to the keypress event
   *
   * Determines which key on the keyboard was pressed
   * Using a character match collection replaces the typed character with the corresponding character of the Arabic alphabet
   *
   * Does nothing if the keyboard layout is already Arabic
   *
   */
  @HostListener('keypress', ['$event'])
  spaceEvent(event: any) {
    const conponent = this.detectedComponent(this.el);

    const alphabetMap = this.getCurrentAlphabet(event);

    if (this.checkHotKeys(event) || this.isAlreadyInputInArabic(event.key, event.keyCode, alphabetMap)) {
      return;
    }

    if (alphabetMap.get(event.keyCode)) {
      event.preventDefault();

      let char = '';
      if (alphabetMap.get(event.keyCode) === COMBINATION_SYMBOLS) {
        char = this.characterCombination(event.keyCode, alphabetMap);
      } else {
        char = this.geSymbolByKeyCode(event.keyCode, alphabetMap);
      }
      conponent.value += char;

    }
  }

  /**
   * Returns the table of correspondence of key code and characters of the Arabic alphabet
   *
   */
  private getCurrentAlphabet(event: any) {
    if (event.shiftKey) {
      return IsShiftDownArabicAlphabetMap;
    }
    else {
      return ArabicAlphabetMap;
    }
  }

  /**
   * Defines ctrl + c, ctrl + v, ctrl + a, etc.
   *
   */
  private checkHotKeys(event: any): boolean {
    if (event.ctrlKey && (event.keyCode == 86 || event.keyCode == 65 || event.keyCode == 67)) {
      return true;
    }
    return false;
  }

  private characterCombination(symbolCode: number, alphabet: Map<number, string>): string {
    let result = '';
    if (symbolCode) {
      if (symbolCode == 71) {
        let char = this.geSymbolByKeyCode(symbolCode, ArabicAlphabetMap);
        result += char;
        char = Function("return '\\u" + '0623' + "';")();
        result += char;

      } else if (symbolCode == 66) {
        let char = this.geSymbolByKeyCode(71, ArabicAlphabetMap);
        result += char;

        char = Function("return '\\u" + '0622' + "';")();
        result += char;
      }
    } else {
      if (symbolCode == 66) {
        let char = this.geSymbolByKeyCode(71, alphabet);
        result += char;

        char = Function("return '\\u" + '0627' + "';")();
        result += char;
      }
    }

    return result;
  }

  /**
   * Determines the current keyboard layout, if the keyboard is already Arabic - terminates the directive
   *
   */
  private isAlreadyInputInArabic(symbol: number, symbolNumber: number, alphabet: Map<number, string>): boolean {
    var code = alphabet.get(symbolNumber);
    if (code && code !== COMBINATION_SYMBOLS && this.geSymbolByKeyCode(symbolNumber, alphabet) === symbol) {
      return true;
    }
    return false;
  }

  /**
   * Gets the symbol based on a character code
   *
   */
  private geSymbolByKeyCode(symbolCode: number, alphabet: Map<number, string>) {
    var codeValue = alphabet.get(symbolCode)
    return Function("return '\\u" + codeValue + "';")();
  }

  /**
  * Defines component libraries such syncfusion or Angular material
  *
  */
  private detectedComponent(el: ElementRef) {
    switch (this.el.nativeElement.tagName.toLowerCase()) {
      case SYNCFUSION_COMPONENTS.Input:
        return el.nativeElement.children[0].children[0];
      case SYNCFUSION_COMPONENTS.Richtexteditor:
        return el.nativeElement.children[0];
      default:
        return (el.nativeElement as HTMLInputElement);
    }

  }
}
