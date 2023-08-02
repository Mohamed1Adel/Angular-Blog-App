import { Component } from '@angular/core';
import { async, asyncScheduler } from 'rxjs';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  featuredPosts: any;
  latestPosts:any;

  constructor(private postServices:PostsService){

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
         this.postServices.loadFeatured().subscribe((val) => {
          this.featuredPosts = val;

          // console.log(val);
          console.log(this.featuredPosts);
          this.getPost();
        });

        this.postServices.loadLatest().subscribe(val=>{
          this.latestPosts = val
        })
  }

  getPost(){
  // console.log(typeof this.featuredPosts);

  }

}
