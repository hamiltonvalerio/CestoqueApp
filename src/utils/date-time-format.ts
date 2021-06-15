import { Constants } from './contants';
import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateTimeFormat'
})
export class DateTimeFormatPipe extends DatePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return super.transform(value, Constants.DATE_TIME_FMT);
  }

  transformhifem(value: any, args?: any): any {
    return super.transform(value, Constants.DATE_TIME_FMT_HIFEN_SEM_HORA);
  }
}