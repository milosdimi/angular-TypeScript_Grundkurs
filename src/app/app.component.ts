import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'TypeScript_Grundkurs';

  theString: string = 'Hello, TypeScript_Grundkurs';
  theNumber: number = 42;
  theBoolean: boolean = true;

  theUndefined: undefined = undefined;
  theNull: null = null;

  theAnyType: any = 'This can be any type';

  // 05 - types bei Arrays und Funktionen

  theArrayOfNumbers: number[] = [1, 2, 3, 4, 5];

  theFunction = (a: number, b: number): number => {
    return a + b;
  };

  // 06 - literals und tupels

  noteType: 200 | 404 = 404;
  theArray = [200,404, 'Two', true] as [number, number, string, boolean];



  constructor() {
    console.log(this.theString);
    console.log(this.theNumber);
    console.log(this.theBoolean);
    console.log(this.theUndefined);
    console.log(this.theNull);
    console.log(this.theAnyType);
    // 05 - types bei Arrays und Funktionen
    console.log(this.theArrayOfNumbers);
    console.log(this.theFunction(5, 10));
    // 06 - literals und tupels
    this.noteType = 200;

  }
}
