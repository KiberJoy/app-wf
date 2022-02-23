import { Component, HostListener, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators';
import { HeaderLinksModel } from 'src/app/models/header-link.model';
import { ViewMode, ViewModeService } from 'src/app/services/view-mode.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  public _logoUrl: string = '/assets/logo-wf.svg';
  public _mobileMenuUrl: string = '/assets/menu.svg';
  public _isVisible: boolean = false;
  public _isDesktopHeader!: boolean;
  public _links: HeaderLinksModel[] = [
    {name: 'About me', url: '#app-fourth' },
    {name: 'Relationships', url: '#app-fourth' },
    {name: 'Requirements', url: '#app-fourth' },
    {name: 'Users', url: '#app-fourth' },
    {name: 'Sign Up', url: '#app-fourth' },
  ]
  public _mobileLinks: HeaderLinksModel[][] = [
    [
      {name: 'About me', url: '#app-fourth' },
      {name: 'Relationships', url: '#app-fourth' },
      {name: 'Users', url: '#app-fourth' },
      {name: 'Sign up', url: '#app-fourth' },
      {name: 'Terms and Conditions', url: '#app-fourth' }
    ],
    [
      {name: 'About me', url: '#app-fourth' },
      {name: 'Relationships', url: '#app-fourth' },
      {name: 'Users', url: '#app-fourth' },
      {name: 'Sign up', url: '#app-fourth' },
      {name: 'Terms and Conditions', url: '#app-fourth' }
    ],
    [
      {name: 'About me', url: '#app-fourth' },
      {name: 'Relationships', url: '#app-fourth' },
      {name: 'Users', url: '#app-fourth' },
      {name: 'Sign up', url: '#app-fourth' },
      {name: 'Terms and Conditions', url: '#app-fourth' }
    ],
  ]

  constructor(private viewModeService: ViewModeService) { }

  ngOnInit(): void {
    this.viewModeService.getViewMode()
    .pipe(
      filter(viewMode => !!viewMode),
    )
    .subscribe(viewMode => {
      viewMode === ViewMode.DESKTOP ? this._isDesktopHeader = true : this._isDesktopHeader = false;
    })
  }

  public mobileMenuToggle() {
    this._isVisible = !this._isVisible;
    this._isVisible == true ? document.querySelector('body')?.classList.add('app-lock') : document.querySelector('body')?.classList.remove('app-lock');
  }

  public stop(e:any) {
    e.stopPropagation();
  }

  @HostListener("window:scroll")
  public onWindowScroll() {
    this._links.forEach(link => {
      const block = document.querySelector(link.url)?.getBoundingClientRect();
      link.active = block!.top <= 0 && block!.bottom >= 0;
    })
    this._mobileLinks.forEach(linkArray => {
      linkArray.forEach(link => {
        const block = document.querySelector(link.url)?.getBoundingClientRect();
        link.active = block!.top <= 0 && block!.bottom >= 0;
      })
    })
  }
}
