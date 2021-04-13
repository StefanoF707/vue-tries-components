<template>
  <form @submit.prevent class="form">
     <h3>{{ formTitle }}</h3>
     <!-- <input type="text" v-model="searchText" :placeholder="placeholder"> -->
     <BaseInput 
         type="text"
         :placeholder="placeholder"
         :value="searchText"
         @input="searchText = $event"
      />

      <BaseInput 
         type="submit"
         value="Send"
         @click="sendForm"
      />

  </form>
</template>

<script>
   import BaseInput from './BaseInput.vue';

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
      components: {
         BaseInput
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

<style lang="scss">
   .form {
      background: lightblue;
      padding: 10px 0;
      margin: 10px 0;
      
      h3 {
         margin-bottom: 10px;
      }
   }
</style>