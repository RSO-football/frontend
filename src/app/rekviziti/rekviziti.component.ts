import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-rekviziti',
  templateUrl: './rekviziti.component.html',
  styleUrls: ['./rekviziti.component.css']
})
export class RekvizitiComponent implements OnInit {

  constructor(
    private client: HttpClient
  ) { }

  ngOnInit() {
    this.client.get<any>('http://40.76.175.239/rekviziti/v1/rekviziti').subscribe(data => {
      console.log(data);

    });
  }

}
