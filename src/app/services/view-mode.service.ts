import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

export enum ViewMode {
  MOBILE = 'mobile',
  DESKTOP = 'desktop',
}

@Injectable({
  providedIn: 'root'
})
export class ViewModeService {
  private viewMode$: BehaviorSubject<ViewMode | null> = new BehaviorSubject<ViewMode | null>(null);
  constructor() {
  }

  public setViewMode(screenWidth: number) {
    this.viewMode$.next(screenWidth < 767 ? ViewMode.MOBILE : ViewMode.DESKTOP)
  }

  public getViewMode() {
    return this.viewMode$.asObservable();
  }
}
