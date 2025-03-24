import { Component, type OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
//import { HTTPClient } from "@angular/common/http";
import { BlogPostDataService } from '../services/blog/blog-post-data.service';
import { BlogPostData } from './blog-post-data';
import { BlogPostDataModel } from "./blog-post-data-model";
import { BlogListDataModel } from "../blog/blog-list-data-model";

@Component({
  selector: "app-blog-post",
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss'],
})

export class BlogPostComponent implements OnInit {
  blogId: string = "";
  blogPostData: any;
  constructor(private route: ActivatedRoute, private blogPostDataService: BlogPostDataService) {}

  ngOnInit() {
    this.blogId = this.route.snapshot.paramMap.get("id")??"1";
    const filePath = `assets/data/blog/blogs/blog-${this.blogId}.en.yaml`;
    this.blogPostDataService.loadData(filePath).then((data: BlogPostData) => {
      this.blogPostData = data.blogData;
    });

  }
}