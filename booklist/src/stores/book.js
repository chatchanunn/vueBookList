import { defineStore } from 'pinia'

export const useBookStore = defineStore('book', {
  state: () => ({
    books: [{
      name : 'Harry Potter and the Sorcerer\'s Stone',
      author : 'J.K. Rowling'
    }]
  }),
  actions: {
    addBook(bookData) {
      console.log(bookData);
      this.books.push(bookData)
    },
    removeBook(bookIndex) {
      this.books.splice(bookIndex, 1)
    },
    // a = [1,2,3,4,5]
    // a.splice(1, 1, 6)
    // a = 6 2 3 4 5
    editBook(bookData, bookIndex) {
      this.books.splice(bookIndex, 1, bookData)
    },

  },

})
