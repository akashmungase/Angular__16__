import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input() fruitName: string = '';

  @Output() Product = new EventEmitter<any>();

  sendProduct() {
    this.Product.emit(
      [
        { name: 'Laptop', price: 1000 },
        { name: 'Mobile', price: 2000 }
      ]
    );
  }

  calledFromParent() {
    console.log('this is called from parent');
  }
}
