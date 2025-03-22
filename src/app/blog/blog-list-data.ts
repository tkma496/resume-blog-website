import { BlogListDataModel } from './blog-list-data-model';

export class BlogListData implements BlogListDataModel {

    blog = {
    blog_list: [],
    }
  
    constructor(data?: Partial<BlogListDataModel>) {
      if (data) {
        Object.assign(this, data);
      }
    }
  }