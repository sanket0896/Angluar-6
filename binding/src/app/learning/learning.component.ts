import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learning',
  templateUrl: './learning.component.html',
  styleUrls: ['./learning.component.css']
})
export class LearningComponent implements OnInit {

  public myname = "Kabira";
  public message = "";
  constructor() { }

  ngOnInit() {
  }
  public func() {
    return "Called from function.";
  }
  public onClick() {
    this.message = "Button clicked!";
  }
}
