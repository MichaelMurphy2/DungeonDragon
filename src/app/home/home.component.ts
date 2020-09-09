import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
flipped: boolean = false;

  constructor() {

   
   }

  ngOnInit(): void {
  }
  toggleView() {
    this.flipped = !this.flipped;
    }
}
