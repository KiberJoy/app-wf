import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
})
export class SecondComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public scroll() {
    const block = document.getElementById('app-fourth');
    block!.scrollIntoView({behavior: 'smooth'});
  }
}
