import {
  frontMatter as postFms,
  _importMeta as postMetadatas,
} from "../posts/*.mdx";
import { MDXItem } from "./types";

const MDX_POST_ROOT = "/posts/";

const sortDescPost = (a: MDXItem, b: MDXItem) => {
  const dateA = a.frontMatter.date;
  const dateB = b.frontMatter.date;
  if (dateA > dateB) {
    return -1;
  }
  if (dateA < dateB) {
    return 1;
  }
  return 0;
};
const getResourceId = (metaData: ImportMeta[], index: number) => {
  const absolutePath = metaData[index].absolutePath;
  const relativePath = absolutePath.split(MDX_POST_ROOT).slice(-1)[0];
  return `${relativePath.split(".").slice(0, -1).join(".")}`;
};

const getPosts = async () => {
  const posts: MDXItem[] = [];

  postFms.forEach((fm, index) => {
    posts.push({
      resourceId: getResourceId(postMetadatas, index),
      frontMatter: fm,
    });
  });
  return posts.sort(sortDescPost);
};

const getTags = async () => {
  var tags: string[] = [];
  postFms.forEach((fm) => {
    let temp = fm.categories?.filter((item) => tags.indexOf(item) < 0);
    if (temp) {
      tags = tags.concat(temp);
    }
  });
  return tags;
};

export type GroupedPosts = {
  [key: string]: MDXItem[];
};
const getPostsByCategories = async () => {
  const grouped: GroupedPosts = {};
  const isInGrouped = (resourceId: string, category: string) => {
    if (grouped[category].length == 0) {
      return false;
    }
    grouped[category].forEach((node: MDXItem) => {
      if (node.resourceId == resourceId) {
        return true;
      }
      return false;
    });
    return false;
  };

  postFms.forEach((fm, index) => {
    const absolutePath = postMetadatas[index].absolutePath;
    const relativePath = absolutePath.split(MDX_POST_ROOT).slice(-1)[0];
    const resourceId = relativePath.split(".").slice(0, -1).join(".");

    fm.categories?.forEach((category) => {
      let category_ = category.toLowerCase();
      if (typeof grouped[category_] == "undefined") {
        grouped[category_] = [];
      }
      if (!isInGrouped(resourceId, category_)) {
        grouped[category_].push({ resourceId, frontMatter: fm });
      }
    });
  });
  Object.keys(grouped).forEach((category) => {
    grouped[category].sort(sortDescPost);
  });

  return grouped;
};

const getPostByResourcePath = async (resourceId: string) => {
  const posts = await getPosts();
  const filtered = posts.filter((post) => {
    return post.resourceId === resourceId;
  });
  return filtered[0];
};

export default {
  getPosts,
  getPostByResourcePath,
  getTags,
  getPostsByCategories,
};
