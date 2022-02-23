import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
})
export class WrapperComponent implements OnInit {
  @HostBinding('class.app-wrapper') hostClass = true;
  constructor() { }

  ngOnInit(): void {
  }

}
