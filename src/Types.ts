
export interface Book { title: number, author: string, cover: string, id: string , isbn: string }

export type listOfBook = Book[]

export type ListBooksProps = {
  list: listOfBook
}