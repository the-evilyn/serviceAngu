import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Fils } from './fils/fils';
import { ServNom } from './serv-nom';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, Fils],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  protected readonly title = signal('projet1test');
  
  valeurParent = '';
  valeurFils = '';

   constructor(public servNom: ServNom) {}
  valeurdepuisFilsFn(event: any) {
    this.valeurFils = event;
    this.servNom.message = `Value from fils: ${event}`;

    }

  }
  


   