import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css'],
})
export class SinglePostComponent {
  postData: any;
  similarPostArray: any;
  constructor(
    private route: ActivatedRoute,
    private postService: PostsService
  ) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.route.params.subscribe((val) => {
      this.postService.countViews(val['id']);
      this.postService.loadOnePost(val['id']).subscribe((post) => {
        this.postData = post;
        this.loadSimilarPost(this.postData.category.categoryId);
      });
    });
  }
  loadSimilarPost(CatId: any) {
    this.postService.loadSimilar(CatId).subscribe((val) => {
      this.similarPostArray = val;
    });
  }
}
