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
  constructor(
    private client: HttpClient
  ) { }

  ngOnInit() {
    this.client.get<any>('http://40.76.175.239/postavke/v1/postavke').subscribe(data => {
      console.log(data);
      this.postavke = data;
    });
  }

}
