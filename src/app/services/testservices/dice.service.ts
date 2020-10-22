import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DiceService {

  myRoll:number = 0;

  constructor() { }


  D2Roll(myRoll){
    this.myRoll = Math.floor(Math.random() * 2 + 1);
    this.playAudio();
    return this.myRoll;
  }

  D4Roll(myRoll){
    this.myRoll =  Math.floor(Math.random() * 4 + 1);
    this.playAudio();
    return this.myRoll;
  }

  D6Roll(myRoll){
    this.myRoll =  Math.floor(Math.random() * 6 + 1);
    this.playAudio();
    return this.myRoll;
  }

  D8Roll(myRoll){
    this.myRoll =  Math.floor(Math.random() * 8 + 1);
    this.playAudio();
    return this.myRoll;
  }

  D10Roll(myRoll){
    this.myRoll =  Math.floor(Math.random() * 10 + 1);
    this.playAudio();
    return this.myRoll;
  }

  D20Roll(myRoll){
    this.myRoll=  Math.floor(Math.random() * 20 + 1);
    this.playAudio();
    return this.myRoll;
  }

  D100Roll(myRoll){
     this.myRoll = Math.floor(Math.random() * 100 + 1);
     this.playAudio();
    return this.myRoll
  }

  reset(myRoll){
    this.myRoll = 0;
    this.playAudio2();
    return this.myRoll
  }
  playAudio(){
    let audio = new Audio();
    audio.src = "../../../assets/audio/dieThrow.mp3";
    audio.load();
    audio.play();
  }

  playAudio2(){
    let audio = new Audio();
    audio.src = "../../../assets/audio/reset.wav";
    audio.load();
    audio.play();
  }


  

}
