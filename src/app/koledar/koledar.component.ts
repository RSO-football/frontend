import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-koledar',
  templateUrl: './koledar.component.html',
  styleUrls: ['./koledar.component.css']
})
export class KoledarComponent implements OnInit {
//rezervacije?igrisceId={stevilka}
  typeControl = new FormControl();
  trenerControl = new FormControl();
  datumControl = new FormControl();
  trenerIzbire = new Array();
  vreme = ""
  slika = "https://live.staticflickr.com/"

  koledar: any[];
  igrisceId = -1;
  constructor(
    private client: HttpClient,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.igrisceId = this.route.snapshot.params.igrisceId;
    this.client.get<any>('http://40.76.175.239/rezervacije/v1/rezervacije?igrisceId='+ this.igrisceId).subscribe(data => {
      console.log(data);
      this.koledar = data;
    });

    this.client.get<any>('http://40.76.175.239/uporabniki/v1/uporabniki/trenerji').subscribe(data => {
      console.log(data);
      for(var t in data){
        
      this.trenerIzbire.push(data[t].uporabnikId)
      }

    });

    this.client.get<any>('http://40.76.175.239/rezervacije/v1/rezervacije/' + this.igrisceId + '/vreme').subscribe(data => {
      this.vreme = data["current"]["weather"][0]["description"]
      console.log(data)
      console.log(this.vreme)
    });

    this.client.get<any>('http://40.76.175.239/igrisca/v1/igrisca/' + this.igrisceId + '/slika').subscribe(data => {

      console.log(data)
      this.slika += data["server"] + "/" + data["idSlike"] + "_" + data["secret"] + ".jpg"
    });
  }

  parseDateC(dateC){
    var datum = new Date(dateC)
    return datum.toLocaleDateString("en-US") + " " + datum.getHours() + ":" + datum.getMinutes();

  }

  dodajRezervacijo(){
    this.client.post<any>('http://40.76.175.239/rezervacije/v1/rezervacije',{
      eventType: this.typeControl.value,
      trenerId: this.trenerControl.value,
      startTime: this.datumControl.value,
      igrisceId: this.igrisceId
    }).subscribe(data => {
      console.log(data)
    });
  }
}
