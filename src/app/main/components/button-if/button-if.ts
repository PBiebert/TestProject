import { Component, inject } from '@angular/core';
import { TestService } from '../../../test-service';

@Component({
  selector: 'app-button-if',
  imports: [],
  templateUrl: './button-if.html',
  styleUrl: './button-if.scss',
})
export class ButtonIf {
  service = inject(TestService);

  openDialog() {
    this.service.isDialogOpen = true;
    console.log('button if wurde gedrück : isDialogOpen=' + this.service.isDialogOpen);
  }
}
