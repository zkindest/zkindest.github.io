type Url = {
  link: string;
  name: string;
};
export interface FrontMatter {
  title: string;
  date: string;
  urls?: Url[];
  time_to_read?: string;
  image: string;
  categories?: string[];
  author?: string;
  description: string;
}
export type MDXItem = {
  frontMatter: FrontMatter;
  resourceId: string;
};

export type ProjectItem = {
  title: string;
  date: string;
  image: string;
  categories?: string[];
  description: string;
  urls: Url[];
};
