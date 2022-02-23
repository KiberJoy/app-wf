import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
})
export class TooltipComponent implements OnInit {
  @Input() hintText!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
