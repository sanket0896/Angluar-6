import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learning',
  templateUrl: './learning.component.html',
  styleUrls: ['./learning.component.css']
})
export class LearningComponent implements OnInit {

  public myname = "Kabira";
  public message = "";
  public name = "";
  public display = false;
  constructor() { }

  ngOnInit() {
  }
  public func() {
    return "Called from function.";
  }
  public onClick(event) {
    this.message = "Button clicked!";
    console.log(event);
  }
  public logName(value) {
    console.log(value);
  }
}
