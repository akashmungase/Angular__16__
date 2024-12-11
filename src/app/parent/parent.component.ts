import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, AfterViewInit {

  FruitName: string = 'Apple';


  @ViewChild('temp') temp!: ElementRef;
  @ViewChild('childComponent') childComponent!: ChildComponent;

  ngOnInit(): void {
    console.log('ngOnInit called');
  }

  getProduct(event: any) {
    console.log('event', event);
  }

  ngAfterViewInit(): void {
    this.temp.nativeElement.style.color = "red";
    this.childComponent.calledFromParent();
  }
}
