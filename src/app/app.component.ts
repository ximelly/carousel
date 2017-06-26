import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  imgbegin='assets/images/banner';
  imgend='.jpg';
  slides:any[]=[];
  myInterval:number=1500;
  slideNum:number=0;
  leftLenth="0";
  constructor(){
      for(let i=1;i<4;i++){
        this.slides.push(this.imgbegin+i+this.imgend);
      }
      setInterval(() => {
            this.leftLenth=(-this.slideNum*100).toString()+"%";
            if(this.slideNum>=2){
              this.slideNum=0;
            }else{
              this.slideNum++;
            }
        },this.myInterval);
  }
}
