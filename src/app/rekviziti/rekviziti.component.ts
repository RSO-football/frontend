import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-rekviziti',
  templateUrl: './rekviziti.component.html',
  styleUrls: ['./rekviziti.component.css']
})
export class RekvizitiComponent implements OnInit {
  rekviziti : any[];
  typeControl = new FormControl();
  trenerControl = new FormControl();
  cenaControl = new FormControl();

  constructor(
    private client: HttpClient
  ) { }

  ngOnInit() {
    this.client.get<any>('https://40.76.175.239/rekviziti/v1/rekviziti').subscribe(data => {
      console.log(data);
      this.rekviziti = data
    });
  }

  dodajRekvizit(){
    this.client.post<any>('https://40.76.175.239/rekviziti/v1/rekviziti',{
      type: this.typeControl.value,
      trenerId: this.trenerControl.value,
      cost: this.cenaControl.value
    }).subscribe(data => {
      console.log(data)
    });

  }
}
