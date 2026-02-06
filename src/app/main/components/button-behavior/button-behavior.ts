import { AfterContentInit, Component, inject } from '@angular/core';
import { TestService } from '../../../test-service';

@Component({
  selector: 'app-button-behavior',
  imports: [],
  templateUrl: './button-behavior.html',
  styleUrl: './button-behavior.scss',
})
export class ButtonBehavior {
  service = inject(TestService);
}
