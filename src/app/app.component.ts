import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'TypeScript_Grundkurs';

  theString: string = 'Hello, TypeScript_Grundkurs';
  theNumber: number = 42;
  theBoolean: boolean = true;

  theUndefined: undefined = undefined;
  theNull: null = null;

  theAnyType: any = 'This can be any type';

  constructor() {
    console.log(this.theString);
    console.log(this.theNumber);
    console.log(this.theBoolean);
    console.log(this.theUndefined);
    console.log(this.theNull);
    console.log(this.theAnyType);
  }


}
