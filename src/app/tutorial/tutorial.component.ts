import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css']
})
export class TutorialComponent implements OnInit {
  value:string="haiiii";
@Input()
property;
  constructor() {

   }

  ngOnInit() {
    this.changeValue()
  }
  changeValue()
  {
    this.value="fffffffffff";
  }
  ngOnChanges()
  {
    alert("hello");
  }
callEvent(event:any)
{
  this.value = event;

}

}
