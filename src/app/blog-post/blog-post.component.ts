import { Component, type OnInit } from "@angular/core"
import { ActivatedRoute } from "@angular/router"
import { BlogDataService } from '../services/blog/blog-list-data.service';
import { BlogData } from './blog-data';
import { BlogDataModel } from "./blog-data-model";

@Component({
  selector: "app-blog-post",
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss'],
})

export class BlogPostComponent implements OnInit {
  post: any
  blogPostData: BlogPostDataModel= { blog: { blog_post: [] } };

  constructor(private route: ActivatedRoute, private blogPostDataService: BlogPostDataService) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id")
    
    this.blogPostDataService.loadData().then((data: BlogPostData) => {
      this.blogPostData = data;
    });
    // TODO: Fetch the blog post data based on the ID
    this.post = {
      id: 1,
      title: "My First Blog Post",
      date: new Date("2023-01-01"),
      content: "This is the content of my first blog post. Replace this with your actual blog post content.",
    }
  }
}