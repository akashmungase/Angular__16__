import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForkjoinComponent } from './forkjoin.component';

describe('ForkjoinComponent', () => {
  let component: ForkjoinComponent;
  let fixture: ComponentFixture<ForkjoinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForkjoinComponent]
    });
    fixture = TestBed.createComponent(ForkjoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
