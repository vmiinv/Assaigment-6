import { Component, OnInit } from '@angular/core';
import {SharedValue} from '../../sharedValue';
import {Parent2Component} from '../parent2.component';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css']
})
export class Child3Component implements OnInit {

  // @ts-ignore
  sharedValueList: SharedValue[] ;
  constructor(private parent2Component: Parent2Component) { }
  // tslint:disable-next-line:typedef
  getSharedValue() {
    this.sharedValueList = this.parent2Component.getSharedValue();
  }
  ngOnInit(): void {
  }

}
