import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Language-Switching';

  public data: Object[] = ['ضض', 'Basketball', 'Cricket', 'Golf', 'Hockey'];
  // set placeholder text to DropDownList input element
  public text: string = 'Select a game';


}
