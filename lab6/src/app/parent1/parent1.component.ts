import { Component, OnInit } from '@angular/core';
import {SharedValue} from '../sharedValue';
import {SharedService} from '../services/shared.service';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.css']
})
export class Parent1Component implements OnInit {
  // @ts-ignore
  sharedValueList: SharedValue[] ;

  constructor(private sharedService: SharedService) {
  }
  // tslint:disable-next-line:typedef
  getSharedValue() {
    this.sharedValueList = this.sharedService.getSharedValue();
    return this.sharedValueList;
  }

  ngOnInit(): void {
  }

}
