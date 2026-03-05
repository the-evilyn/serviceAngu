import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-fils',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './fils.html',
  styleUrls: ['./fils.scss'],
})
export class Fils {
 
  @Input() valeurParenth = '';

  
  valeurFils = '';


  @Output() valeurFilsEvent = new EventEmitter<string>();

  sendvaleur() {
    this.valeurFilsEvent.emit(this.valeurFils);
  }
}
