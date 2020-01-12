import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-subchild',
  templateUrl: './subchild.component.html',
  styleUrls: ['./subchild.component.css']
})
export class SubchildComponent implements OnInit {
@Input()
public addressArray:any;

  constructor() { }

  ngOnInit() {
  }

}
