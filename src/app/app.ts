import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Fils } from './fils/fils';
import { ServNom } from './serv-nom';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, Fils],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  providers: [ServNom]   // Method 2
})
export class App {

  valeurParent = '';

  constructor(public servNom: ServNom) {
    this.servNom.addData('item added from app component');
  }
}