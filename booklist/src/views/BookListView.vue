<script setup>

import { useBookStore } from '../stores/book'
import { RouterLink } from 'vue-router'
const bookStore = useBookStore()


</script>

<template>
  Book List View
  <div>
    <RouterLink :to="{ name: 'book-create' }" class="btn btn-primary">Create Book</RouterLink>
    <ul>
      <li v-for="book, index in bookStore.books" :key="index">
        {{ index }} {{  book.name }} {{ book.author }}
        <RouterLink :to="{ 
          name: 'book-edit', 
          params: { id: index } 
          }" class="btn btn-primary">
          <button> Edit </button>
        </RouterLink>

        <button @click="bookStore.removeBook(index)"> Delete </button> 
       
      </li>
    </ul>
  </div>
</template>