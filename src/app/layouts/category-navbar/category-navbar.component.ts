import { Component } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-category-navbar',
  templateUrl: './category-navbar.component.html',
  styleUrls: ['./category-navbar.component.css'],
})
export class CategoryNavbarComponent {
  categoryArray: any;

  constructor(private categoryService: CategoriesService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.categoryService.loadData().subscribe((val) => {
      this.categoryArray = val;
    });
  }
}
