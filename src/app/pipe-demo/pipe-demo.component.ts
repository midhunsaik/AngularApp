import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent implements OnInit {

  stringData :string;
  value : number;
  datepipe: Date;


  constructor() {
    this.stringData="Midhun Sai";
    this.value = 150.1234;
    this.datepipe= new Date();
  

   }

  ngOnInit() {
  }

}
