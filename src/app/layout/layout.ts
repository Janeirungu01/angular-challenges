import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, RouterModule],
  templateUrl: './layout.html',
  styleUrl: './layout.scss'
})
export class Layout {
   pageTitle: string = '';

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => {
          let route = this.activatedRoute.firstChild;
          while (route?.firstChild) {
            route = route.firstChild;
          }
          return route?.snapshot.data['title'] || 'Dashboard';
        })
      )
      .subscribe(title => {
        this.pageTitle = title;
      });
  }

}
