import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {

  html_code: Text;
  cssyle: Text;
  javascript_code: Text;
  constructor() { }

  ngOnInit() {
  }

}
