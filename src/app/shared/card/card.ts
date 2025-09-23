import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.html',
  styleUrl: './card.scss'
})
export class Card {
  @Input() title!: string;
  @Input() value!: number;
  @Input() color!: string; 
  @Input() icon!: string;  
  @Input() change!: string; 
  @Input() trend: 'up' | 'down' | 'plus' = 'up';
}
