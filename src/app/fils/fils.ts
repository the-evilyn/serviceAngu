import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ServNom } from '../serv-nom';

@Component({
  selector: 'app-fils',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './fils.html',
  styleUrl: './fils.scss'
})
export class Fils {

  valeurFils = '';

  constructor(public servNom: ServNom) {}

  envoyer() {
    this.servNom.addData('item added from fils component');
  }
}