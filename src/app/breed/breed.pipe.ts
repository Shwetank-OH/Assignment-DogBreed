import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'findBreed'
})
export class BreedPipe implements PipeTransform {

  transform(url: string, arg: string) {
    let subString = url.split( '/' );
    if(arg=="breedName"){
      return subString[4];
    }
    else if(arg=="imageName")
    {
      return subString[5];
    }
    return null;
  }
}
