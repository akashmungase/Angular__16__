import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor(private commonService: CommonService) {}

  ngOnInit(): void {

  }

  sendToSecond() {
    this.commonService.passDataFromFirstToSecond.next(
      {name: 'Akash', email: 'akash@test.com'}
    )
  }
}
