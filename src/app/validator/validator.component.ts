import { AfterViewInit, Component, QueryList, ViewChildren } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { FirstChildComponent } from '../first-child/first-child.component';
import { SecondChildComponent } from '../second-child/second-child.component';

@Component({
  selector: 'app-validator',
  standalone: true,
  imports: [FirstChildComponent, SecondChildComponent],
  templateUrl: './validator.component.html',
  styleUrl: './validator.component.scss'
})
export class ValidatorComponent implements AfterViewInit {
  @ViewChildren(BaseComponent) children!: QueryList<BaseComponent>;

  ngAfterViewInit() {
    console.log(this.children);
  }
}
