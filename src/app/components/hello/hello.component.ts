import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {

  public name = "Nikhil Mahirrao";
   
  constructor() { }

  ngOnInit() {
  }

}
