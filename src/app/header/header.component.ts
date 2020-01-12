import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
pageNumber:any;
  constructor() { }

  ngOnInit() {
  }
changePage(pageNumber)
{
  this.pageNumber=pageNumber;
  console.log(this.pageNumber)
}
}
