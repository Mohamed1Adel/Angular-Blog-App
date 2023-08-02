import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-single-category',
  templateUrl: './single-category.component.html',
  styleUrls: ['./single-category.component.css']
})
export class SingleCategoryComponent {

  postArray:any
  categoryObj:any

  constructor(private route:ActivatedRoute,private postService:PostsService){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.route.params.subscribe(val=>{
      this.categoryObj = val
      this.postService.loadCategoryPost(val['id']).subscribe(post=>{
        this.postArray = post
      })


    })
  }
}
