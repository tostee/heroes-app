import { Component } from '@angular/core';
import { Hero } from 'src/app/models/hero/hero';
import { HeroServiceService } from 'src/app/services/hero-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  constructor(public heroService: HeroServiceService) {}
  heroes: Hero[] = [];
  getHeroes(): void {
    this.heroService
      .getHeroes()
      .subscribe((heroes) => (this.heroes = heroes.slice(1, 5)));
  }

  ngOnInit() {
    this.getHeroes();
  }
}
