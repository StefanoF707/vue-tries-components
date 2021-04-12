<template>
  <div class="form">
     <h3>{{ formTitle }}</h3>
     <input type="text" v-model="searchText" :placeholder="placeholder">
     <button @click="sendForm">Send</button>
  </div>
</template>

<script>
   export default {
      name: 'SearchForm',
      props: {
         formTitle: {
            type: String,
            required: true,
         },
         placeholder: {
            type: String,
            required: true,
         }
      },
      data() {
         return {
            searchText: '',
         }
      },
      methods: {
         sendForm() {
            if (this.searchText != '') {
               this.$emit('sendSearch', this.searchText);
               this.searchText = '';
            }
         }
      }
   }
</script>

<style>
   .form {
      background: lightblue;
      padding: 10px 0;
      margin: 10px 0;
   }
</style>