import { Component,OnDestroy,AfterViewInit} from '@angular/core';
import {trigger,state,style,animate,transition} from '@angular/animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  imgbegin='assets/images/banner';
  imgend='.jpg';
  public slides:any[]=[];//图片数组
  public changeBar=true;//是否显示左右切箭头
  public myInterval:number=2500;//轮播切换时间
  public slideNum:number=0;//初始化当前banenr
  private leftLenth;
  private timer;
  constructor(){
      for(let i=1;i<4;i++){
        this.slides.push(this.imgbegin+i+this.imgend);
      }
      this.startScroll();
  }
  startScroll(){
      this.timer=setInterval(() => {
          this.scrollRight();
      },this.myInterval);
  }
  circleClick(i){
    this.slideNum=i;
    this.leftLenth=(-this.slideNum*100).toString()+"%";
  }
  leftClick(){
    this.scrollLeftt();
  }
  rightClick(){
    this.scrollRight();
  }
  scrollRight(){
    if(this.slideNum>=2){
      this.slideNum=0;
    }else{
      this.slideNum++;
    }
    this.leftLenth=(-this.slideNum*100).toString()+"%";
  }

  scrollLeftt(){
    if(this.slideNum<=0){
      this.slideNum=2;
    }else{
      this.slideNum--;
    }
    this.leftLenth=(-this.slideNum*100).toString()+"%";
  }
  onmouseenter(){
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
  onmouseleave(){
    this.startScroll();
  }
}
