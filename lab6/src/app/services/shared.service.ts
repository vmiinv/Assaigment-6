import { Injectable } from '@angular/core';
import {LoggingService} from './logging.service';
import {SharedValue} from '../sharedValue';

@Injectable()
export class SharedService {

  constructor(
    private loggingService: LoggingService) {
  }

  // tslint:disable-next-line:typedef
  getSharedValue() {
    let sharedValueList: SharedValue[];
    sharedValueList = [
      new SharedValue(1, 'Value1'),
      new SharedValue(2, 'Value2'),
      new SharedValue(3, 'Value3'),
    ];

    this.loggingService.log('List of shared values: ' + sharedValueList);

    return sharedValueList;
  }
}
