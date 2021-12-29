import { Component } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend-football';
  public igrisca = ["Crno", "Zeleno"];

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ){


  }

  public preusmeriUporabniki(){
      this.router.navigate(['uporabniki'], {relativeTo: this.route});
  }

  public preusmeriIgralci(){
    this.router.navigate(['igralci'], {relativeTo: this.route});
  }

  public preusmeriPostavke(){
    this.router.navigate(['postavke'], {relativeTo: this.route});
  }

  public preusmeriIgrisca(){
    this.router.navigate(['igrisca'], {relativeTo: this.route});
  }
}
