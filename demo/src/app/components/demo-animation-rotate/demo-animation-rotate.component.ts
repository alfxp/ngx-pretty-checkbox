import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-demo-animation-rotate',
  templateUrl: './demo-animation-rotate.component.html',
  styleUrls: ['./demo-animation-rotate.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoAnimationRotateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}