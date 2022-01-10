import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-igrisca',
  templateUrl: './igrisca.component.html',
  styleUrls: ['./igrisca.component.css']
})
export class IgriscaComponent implements OnInit {
  public igriscaArray: any[];
  public idArray = new Array();
  public imenaArray = new Array();
  selectedOption: String;

  public longitudeControl = new FormControl();
  latitudeControl = new FormControl();
  igrisceControl = new FormControl();


  constructor(
    private client: HttpClient
  ) { }

  ngOnInit() {

    this.client.get<any>('https://40.76.175.239/igrisca/v1/igrisca').subscribe(data => {
      //console.log(data);
      this.igriscaArray = data;
      for (var id in data){
        this.idArray.push(data[id].igrisceId)
        this.imenaArray.push(data[id].name)
      }
    });
  }

  izbrisiIgrisce(){
    this.client.delete<any>('https://40.76.175.239/igrisca/v1/igrisca/'+ this.idArray[this.imenaArray.indexOf(this.selectedOption)]).subscribe(data => {

    });
  }

  dodajIgrisce(){
    this.client.post<any>('https://40.76.175.239/igrisca/v1/igrisca',{
      latitude: this.latitudeControl.value,
      longitude: this.longitudeControl.value,
      name: this.igrisceControl.value
    }).subscribe(data => {
      console.log(data)
    });
  }

}
