import { Component } from '@angular/core';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-first-child',
  standalone: true,
  imports: [],
  templateUrl: './first-child.component.html',
  styleUrl: './first-child.component.scss',
  providers: [{ provide: BaseComponent, useExisting: FirstChildComponent }]
})
export class FirstChildComponent extends BaseComponent {
  override message = 'FirstChild message';
}
