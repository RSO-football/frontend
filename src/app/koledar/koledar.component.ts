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
