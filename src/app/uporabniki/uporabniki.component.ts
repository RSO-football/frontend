import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-uporabniki',
  templateUrl: './uporabniki.component.html',
  styleUrls: ['./uporabniki.component.css']
})
export class UporabnikiComponent implements OnInit {
  public idArray = new Array();
  public uporabniki: any[];
  public selectedOptionId = 1;
  public selectedOptionRole: string;

  constructor(
    private client: HttpClient
  ) { }

  ngOnInit() {
    this.client.get<any>('http://40.76.175.239/uporabniki/v1/uporabniki').subscribe(data => {
      //console.log(data);
      this.uporabniki = data
      for(var igralec in data){
        this.idArray.push(data[igralec].uporabnikId);
      }
    });
  }

  public posodobi(){
    this.client.put<any>('http://40.76.175.239/uporabniki/v1/uporabniki/' +this.selectedOptionId,{
      role: this.selectedOptionRole,
      uporabnikID: 123
    }).subscribe(data => {
      //console.log(data);

    });
  }

      

}
