import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
 styleUrls: ['./app.component.css']
}) 
export class AppComponent {
  title = 'dice-code';

  D2Roll(diceRoll){
    diceRoll.innerHTML = "D2: Dice Roll is " + Math.floor(Math.random() * 2 + 1);
  }

  D4Roll(diceRoll){
    diceRoll.innerHTML = "D4: Dice Roll is " + Math.floor(Math.random() * 4 + 1);
  }

  D6Roll(diceRoll){
    diceRoll.innerHTML = "D6: Dice Roll is " + Math.floor(Math.random() * 6 + 1);
  }

  D8Roll(diceRoll){
    diceRoll.innerHTML = "D8: Dice Roll is " + Math.floor(Math.random() * 8 + 1);
  }

  D10Roll(diceRoll){
    diceRoll.innerHTML = "D10: Dice Roll is " + Math.floor(Math.random() * 10 + 1);
  }

  D20Roll(diceRoll){
    diceRoll.innerHTML = "D20: Dice Roll is " + Math.floor(Math.random() * 20 + 1);
  }

  D100Roll(diceRoll){
    diceRoll.innerHTML = "D100: Percentage is " + Math.floor(Math.random() * 100 + 1) + "%";
  }

  reset(diceRoll){
    diceRoll.innerHTML = ""
  }
}

