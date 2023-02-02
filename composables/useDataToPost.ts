import { Post } from '~~/@types/Post'

export function useDataToPost(dataArray: any[]): Post[] {
  return dataArray.map((row) => {
    return {
      title: row.title ?? '',
      slug: row.slug ?? '',
      type: row.type ?? '',
      description: row.description ?? '',
      date: row.date ?? '',
      redirect_from: row.redirect_from ?? '',
      categories: row.categories ?? '',
      excerpt: row.excerpt ?? '',
      heroImage: row.heroImage ?? '',
      coverImage: row.coverImage ?? '',
    }
  })
}
