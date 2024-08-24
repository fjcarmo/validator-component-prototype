import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { ValidatorComponent } from '../validator/validator.component';
import { FirstChildComponent } from '../first-child/first-child.component';
import { SecondChildComponent } from '../second-child/second-child.component';

@Component({
  selector: 'app-group',
  standalone: true,
  imports: [ValidatorComponent, FirstChildComponent, SecondChildComponent],
  templateUrl: './group.component.html',
  styleUrl: './group.component.scss'
})
export class GroupComponent {
  
  @ViewChild('render', { static: true, read: ViewContainerRef }) containerRef!: ViewContainerRef;

  ngOnInit(): void {
    if (this.containerRef) {
      this.containerRef.clear();
      this.containerRef.createComponent(FirstChildComponent);
      this.containerRef.createComponent(SecondChildComponent);
    }
  }
}
