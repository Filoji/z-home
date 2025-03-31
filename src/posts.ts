import { Signs, type User, type Post } from "@/types";

export const users: Record<string, User> = {
  'Virgo': {
    username : 'Virgo',
    sign: Signs.Virgo
  },
  'Libra': {
    username: 'Libra',
    sign: Signs.Libra
  },
  'Pisces': {
    username: 'Pisces',
    sign: Signs.Pisces
  },
  'Leo': {
    username: 'Leo',
    sign: Signs.Leo
  }
}

const posts: Post[] = [
  {
    user: users['Virgo'],
    message: "Apples…"
  },
  {
    user: users['Virgo'],
    message: "MORE APPLES!!!"
  },
  {
    user: users['Libra'],
    message: "I like trains"
  },
  {
    user: users['Pisces'],
    message: "Bloup bloup"
  },
  {
    user: users['Leo'],
    message: "Zzz… Zzz… Zzz… Zzz… Zzz… Zzz… Zzz… Zzz… Zzz… Zzz… Zzz… Zzz… Zzz… Zzz… Zzz… Zzz… Zzz… Zzz…"
  }
]

export const getPosts = () => {
  return posts
}
