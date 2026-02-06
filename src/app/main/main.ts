import { Component } from '@angular/core';
import { Dialog } from './components/dialog/dialog';
import { ButtonIf } from './components/button-if/button-if';
import { ButtonBehavior } from './components/button-behavior/button-behavior';

@Component({
  selector: 'app-main',
  imports: [Dialog, ButtonIf, ButtonBehavior],
  templateUrl: './main.html',
  styleUrl: './main.scss',
})
export class Main {}
