const data: Post[] = [
  {
    text: "Batman vs Superman is 10/10 movie",
    likes: 2,
    hashtags: ["opinion", "movies"],
  },
  {
    text: "Tallinn is the Estonian New-York",
    likes: 23,
    hashtags: ["cities"],
  },
  {
    text: "Lenovo > Apple",
    likes: 210,
    hashtags: ["opinion", "tech"],
  },
];

export interface Post {
  text: string;
  likes: number;
  hashtags?: string[];
}

export async function createPost(post: {
  text: string;
  hashtags?: string[];
}): Promise<Post> {
  const postHashtags = post.hashtags ?? [];
  const newPost: Post = {
    text: post.text,
    likes: 0,
    hashtags: postHashtags,
  };
  data.push(newPost);
  return structuredClone(newPost);
}

export async function getPosts(): Promise<Post[]> {
  return structuredClone(data);
}

export async function getPost(id: number): Promise<Post> {
  return structuredClone(data[id]);
}

export async function deletePost(id: number): Promise<void> {
  data.splice(id, 1);
}
