import { Component } from '@angular/core';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-second-child',
  standalone: true,
  imports: [],
  templateUrl: './second-child.component.html',
  styleUrl: './second-child.component.scss',
  providers: [{ provide: BaseComponent, useExisting: SecondChildComponent }]
})
export class SecondChildComponent extends BaseComponent {
  override message = 'SecondChild message';
}
