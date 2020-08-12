import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'TL',
})
export class CustomPipePipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return 'TL' + value + 'mevcut para';
  }
}
