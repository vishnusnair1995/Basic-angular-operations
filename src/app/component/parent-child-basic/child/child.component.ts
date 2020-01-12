import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
public childArray:any;
  constructor() { }

  ngOnInit() {
    this.childArray={name:'ngConf 2025', date: '3/1/2025', time: '8am',
     location:
     {address: '123 Main St', city: 'Salt Lake City, UT', country: 'USA'}}

  }

}
