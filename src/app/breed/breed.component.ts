import { Component } from '@angular/core';
import { ApiService } from '../app.service';


@Component({
  selector: 'app-breed',
  templateUrl: './breed.component.html',
  styleUrls: ['./breed.component.css']
})
export class BreedComponent {
count:number;
breedData:any;
img:[];
showImg:string;

constructor(private apiService:ApiService){
  this.img=[];
  this.showImg='';
  this.count=0;
}

ngOnInit(){
  this.apiService.getdata().subscribe((res:any)=>{
    this.breedData=res;
    this.count=this.breedData.message.length;
    this.img=this.breedData.message;
  })
}

viewImg(img:string){
this.showImg=img;
}


}
