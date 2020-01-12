import { Component,ViewChild, OnInit } from '@angular/core';
import { Page1Component} from  './page1/page1.component'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  @ViewChild('page1')
  page1Component:Page1Component;
  fromParent:any;
passValue()
{
this.page1Component.parentValue="new value";
}
ngOnInit()
{
this.fromParent="parentValue"
}
}