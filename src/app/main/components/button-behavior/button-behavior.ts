import { AfterContentInit, Component, inject, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { TestService } from '../../../test-service';

@Component({
  selector: 'app-button-behavior',
  imports: [],
  templateUrl: './button-behavior.html',
  styleUrl: './button-behavior.scss',
})
export class ButtonBehavior implements AfterContentInit, OnDestroy {
  service = inject(TestService);
  private sub!: Subscription;

  ngAfterContentInit(): void {
    this.sub = this.service.dialogOpen$.subscribe((open) => {
      if (open) {
      } else {
      }
    });
  }

  openDialog() {
    this.service.openDialog();
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
