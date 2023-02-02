export interface Post {
  title: string
  slug: string
  type: 'work' | 'blog'
  description: string
  date: string
  redirect_from: string
  categories: string
  excerpt: string
  heroImage: string
  coverImage: string
}
