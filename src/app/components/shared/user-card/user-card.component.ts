import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { filter, skip, switchMap, take, tap } from 'rxjs/operators';
import { UserModel } from 'src/app/models/user-card.model';
import { ViewMode, ViewModeService } from 'src/app/services/view-mode.service';
import { UserCardService } from '../../../services/user-card.service';



@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
})
export class UserCardComponent implements OnInit {
  public _limit: number = 9;
  public _offset: number = 0;
  public _totalUsers: number = 0;
  public _users: UserModel[] = [];
  private customLimit: number = 0;
  private params = new HttpParams();

  constructor(
    private userCardService: UserCardService,
    private viewModeService: ViewModeService,
  ) { }

  ngOnInit(): void {

    this.userCardService.getResetUsersObservable()
    .pipe(
      tap(() => {
        this._users = [];
      }),
      switchMap(resetUsersObservable => {
        let resetParams = new HttpParams()
        this.customLimit = 6;
        resetParams = resetParams.set('count', 6).set('offset', 0)
        return this.userCardService.getUsers(resetParams)
      })
    )
    .subscribe((response: any) => {
      this._users = response.users;
      this._totalUsers = response.total_users;
    })

    this.viewModeService.getViewMode()
    .pipe(
      filter(viewMode => !!viewMode),
      take(1),
      switchMap(viewMode => {
      if (viewMode === ViewMode.DESKTOP) {
        this._limit = 9
      } else {
        this._limit = 3
      }
      this.buildHttpParams(this._limit, this._offset);
      return this.userCardService.getUsers(this.params);
    }))
    .subscribe((response: any) => {
      console.log(response);
      this._users = response.users;
      this._totalUsers = response.total_users;
    })

    this.viewModeService.getViewMode()
    .pipe(
      filter(viewMode => !!viewMode),
      skip(1)
    )
    .subscribe(viewMode => {
      if (viewMode === ViewMode.DESKTOP) {
        this._limit = 9
      } else {
        this._limit = 3
      }
    })
  }

  public loadMoreUsers() {
    if(this.customLimit) {
      this._offset += this.customLimit;
      this.customLimit = 0;
    } else {
      this._offset += this._limit;
    }

    this.buildHttpParams(this._limit, this._offset);
    this.userCardService.getUsers(this.params)
    .pipe(take(1))
    .subscribe((response: any) => {
      this._users.push(...response.users);
      this._totalUsers = response.total_users;
    });
  }

  private buildHttpParams(newLimit: number, newOffset: number) {
    this.params = this.params
    .set('count', newLimit)
    .set('offset', newOffset)
  }
}
