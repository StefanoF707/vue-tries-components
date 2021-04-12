<template>
  <div>
     <li>
        <a :href="url" target="_blank">{{ name }}</a>
     </li>
  </div>
</template>

<script>
export default {
   name: 'Card',
   props: {
      name: {
         type: String,
         required: true,
      },
      url: {
         type: String,
         required: true,
      }
   }
}
</script>

<style>
</style>