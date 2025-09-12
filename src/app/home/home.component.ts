import { Component, inject } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingService } from '../housing.service'; 
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housing-location';

@Component({
  selector: 'app-home',
  imports: [HousingLocationComponent, CommonModule],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" />
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="results">
      <!-- Recibe, manda(local) -->
      <!-- <app-housing-location [housingLocation1]="housingLocation"></app-housing-location> -->
      <!-- Se tiene que importar commonModule si no no funcionara la linea debajo -->
      <!-- <app-housing-location *ngFor="let housingLocation of housingLocationList" [housingLocation]="housingLocation"></app-housing-location> -->
      @for (housingLocation of housingLocationList; track housingLocation.id) {
        <app-housing-location [housingLocation]="housingLocation"></app-housing-location>
      } @empty {
        <p>No hay ubicaciones disponibles.</p>
      }
      </section>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);

  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }
}
