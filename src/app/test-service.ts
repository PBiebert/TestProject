import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TestService {
  isDialogOpen: boolean = false;

  private dialogOpenSubject = new BehaviorSubject<boolean>(false);
  dialogOpen$: Observable<boolean> = this.dialogOpenSubject.asObservable();

  openDialog() {
    this.dialogOpenSubject.next(true);
  }

  closeDialog() {
    this.dialogOpenSubject.next(false);
  }
}
