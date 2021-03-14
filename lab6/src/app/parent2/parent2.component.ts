import { Component, OnInit } from '@angular/core';
import {SharedValue} from '../sharedValue';
import {SharedService} from '../services/shared.service';

@Component({
  selector: 'app-parent2',
  templateUrl: './parent2.component.html',
  styleUrls: ['./parent2.component.css']
})
export class Parent2Component implements OnInit {

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
