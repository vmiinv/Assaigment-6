import { Component, OnInit } from '@angular/core';
import {SharedValue} from '../../sharedValue';
import {Parent1Component} from '../parent1.component';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  // @ts-ignore
  sharedValueList: SharedValue[] ;
  constructor(private parent1Component: Parent1Component) { }
  // tslint:disable-next-line:typedef
  getSharedValue() {
    this.sharedValueList = this.parent1Component.getSharedValue();
  }
  ngOnInit(): void {
  }
}
