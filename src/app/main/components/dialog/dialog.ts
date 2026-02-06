import { Component, ElementRef, ViewChild, inject, AfterViewInit, OnDestroy } from '@angular/core';
import { TestService } from '../../../test-service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dialog',
  standalone: true,
  templateUrl: './dialog.html',
  styleUrl: './dialog.scss',
})
export class Dialog implements AfterViewInit, OnDestroy {
  service = inject(TestService);
  @ViewChild('dialogRef') dialogRef!: ElementRef<HTMLDialogElement>;
  private sub!: Subscription;

  ngAfterViewInit(): void {
    if (this.service.isDialogOpen) {
      this.dialogRef.nativeElement.showModal();
    }

    // -----------------------------------------------------

    this.sub = this.service.dialogOpen$.subscribe((open) => {
      if (open) {
        this.dialogRef.nativeElement.showModal();
      } else {
        this.dialogRef.nativeElement.close();
      }
    });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
