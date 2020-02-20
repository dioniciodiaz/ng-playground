import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textEmpty'
})
export class TextEmptyPipe implements PipeTransform {

  transform(str: string): string {
    return str.length === 0 ? 'N/A' : str;
  }

}
