import { Directive, ElementRef, HostListener, Input, OnChanges, Renderer2 } from '@angular/core';
import { ArabicAlphabetMap, COMBINATION_SYMBOLS, IsShiftDownArabicAlphabetMap, SYNCFUSION_COMPONENTS } from './const/language-switching.directive.const';


@Directive({
  selector: '[languageSwitching]'
})
export class LanguageSwitchingDirective {
  @Input() languageSwitching = '';



  constructor(private el: ElementRef, private _renderer: Renderer2) {
    this._renderer.setAttribute(this.el.nativeElement, 'dir', 'rtl');
  }

  @HostListener('keydown', ['$event'])
  spaceEvent(event: any) {
    const conponent = this.detectedComponent(this.el);

    const alphabetMap = this.getCurrentAlphabet(event);
    console.log(event.keyCode)
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


  private getCurrentAlphabet(event: any) {
    if (event.shiftKey) {
      return IsShiftDownArabicAlphabetMap;
    }
    else {
      return ArabicAlphabetMap;
    }
  }

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

  private isAlreadyInputInArabic(symbol: number, symbolNumber: number, alphabet: Map<number, string>): boolean {
    var code = alphabet.get(symbolNumber);
    if (code && code !== COMBINATION_SYMBOLS && this.geSymbolByKeyCode(symbolNumber, alphabet) === symbol) {
      return true;
    }
    return false;
  }

  private geSymbolByKeyCode(symbolCode: number, alphabet: Map<number, string>) {
    var codeValue = alphabet.get(symbolCode)
    return Function("return '\\u" + codeValue + "';")();
  }

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
