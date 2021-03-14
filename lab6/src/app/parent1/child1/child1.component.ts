import { Component, OnInit } from '@angular/core';
import {SharedValue} from '../../sharedValue';
import {Parent1Component} from '../parent1.component';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

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
