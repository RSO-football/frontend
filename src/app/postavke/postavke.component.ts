import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-postavke',
  templateUrl: './postavke.component.html',
  styleUrls: ['./postavke.component.css']
})
export class PostavkeComponent implements OnInit {

    postavke: any[];
    dolgovi: any[];
    
    idControl = new FormControl()
    postavkaControl = new FormControl()
    idControl2 = new FormControl()
    postavkaControl2 = new FormControl()
    novaControl2 = new FormControl()

  constructor(
    private client: HttpClient
  ) { }

  ngOnInit() {
    this.client.get<any>('https://40.76.175.239/postavke/v1/postavke').subscribe(data => {
      console.log(data);
      this.postavke = data;
    });
    this.client.get<any>('https://40.76.175.239/postavke/v1/postavke/place').subscribe(data => {
      console.log(data);
      this.dolgovi = data;
    });
  }

  posodobiPostavko(){

    this.client.put<any>('https://40.76.175.239/postavke/v1/postavke/'+this.postavkaControl2.value,{
      pay: this.novaControl2.value,
      uporabnikID: this.idControl2.value
    }).subscribe(data => {
      console.log(data);
    });
  }

  ustvariPostavko(){

    this.client.post<any>('https://40.76.175.239/postavke/v1/postavke',{
      uporabnikID: this.idControl.value,
      pay: this.postavkaControl.value
    }).subscribe(data => {
      console.log(data);
    });
  }

}
