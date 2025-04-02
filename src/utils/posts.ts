import { type Post } from "@/types";
import { sampleUsers } from "@/utils/users";

const generateSamplePosts = () => {
  const posts2 : Post[] = []
  for (const key in sampleUsers) {
    posts2.push({user : sampleUsers[key], message: "Bonjour"})
  }
  return posts2
}

export const samplePosts = generateSamplePosts()

export const getPosts = () => {
  return samplePosts
}
