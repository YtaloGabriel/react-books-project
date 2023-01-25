export interface IBook {
  id?: number,
  isbn: string,
  title: string,
  description: string,
  image_url: string,
  pages: number,
  release_year: number,
  author: string
}