import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  
  title = 'frontend-football';
  public igrisca = ["Crno", "Zeleno"];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private client: HttpClient
  ){


  }
  ngOnInit(): void {
    //this.client.get<any>('https://api.openweathermap.org/data/2.5/onecall?lat='+123+'&lon='+123+'&appid=0d587ecb059f1f1612f1d59ba2597bb4').subscribe(data => {
    //  console.log(data);
    //})         
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

  public preusmeriKoledar(){
    this.router.navigate(['koledar/' + 1], {relativeTo: this.route});
  }
}
