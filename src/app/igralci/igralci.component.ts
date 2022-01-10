import { Component, OnInit } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-igralci',
  templateUrl: './igralci.component.html',
  styleUrls: ['./igralci.component.css']
})
export class IgralciComponent implements OnInit {

  public igralciArray: any[];
  public imeControl = new FormControl('');
  public opisControl = new FormControl('');
  public idArray = new Array();
  public imeArray = new Array();
  public selectedOption: string;

  constructor(
    private client: HttpClient
  ) { }

  ngOnInit() {
    this.client.get<any>('http://40.76.175.239/igralci/v1/igralci').subscribe(data => {
      console.log(data);
      this.igralciArray = data;
      for(var igralec in data){
        this.idArray.push(data[igralec].igralecId);
        this.imeArray.push(data[igralec].name);
      }
    });
  }

  public dodajIgralca(){
    this.client.post<any>('http://40.76.175.239/igralci/v1/igralci', {
      name: this.imeControl.value,
      description: this.opisControl.value
    }).subscribe(data => {
      console.log(data);
    });
  }

  public izbrisiIgralca(){
    this.client.delete<any>('http://40.76.175.239/igralci/v1/igralci/'+ this.idArray[this.imeArray.indexOf(this.selectedOption)]).subscribe(data => {
      console.log(data);
    })
  };

}
