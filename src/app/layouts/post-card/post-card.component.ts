import { Component, Input, OnInit } from '@angular/core';
import { __asyncValues } from 'tslib';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css'],
})
export class PostCardComponent {
  constructor() {}
  @Input() postData: any;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // console.log(this.postData?.data?.postImgPath);
    console.log(this.postData);
  }
}
