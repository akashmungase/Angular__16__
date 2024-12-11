import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit, OnDestroy {

  subscription!: Subscription;

  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    this.subscription = this.commonService.passDataFromFirstToSecond.subscribe(result => {
      console.log('result', result);
    })
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}