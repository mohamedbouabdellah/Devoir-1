import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produits',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './produits.component.html',
  styleUrl: './produits.component.css'
})
export class ProduitsComponent implements OnInit  {
  produits : string[]; 

  constructor() {
    this.produits = ["PC Asus", "Imprimante Epson", "Tablette Samsung"];
   }
  
   ngOnInit() {
     }


}
