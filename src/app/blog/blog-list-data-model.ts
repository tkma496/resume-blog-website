export interface BlogListDataModel {
    blog: {
      blog_list: {
          id: number;
          title?: string;
          date?: string;
          description?: string;
      }[];
    }
  }