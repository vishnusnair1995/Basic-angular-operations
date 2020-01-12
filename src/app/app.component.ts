import { Component,ViewChild } from '@angular/core';
import { Page1Component} from  './page1/page1.component'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('page1')
  page1Component:Page1Component;

passValue()
{
this.page1Component.parentValue="new value";
}
}