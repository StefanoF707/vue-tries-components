<template>
     <li>
        <a :href="url" target="_blank">
            <img :src="img" :alt="'Sprite ' + name">
            <h4>{{ name }}</h4>
         </a>
     </li>
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
      },
      img: {
         type: String,
      }
   }
}
</script>

<style lang="scss" scoped>
@import '../scss/_variables.scss';

   .cardsPokemon {
      li {
         width: calc(100% / 5 - 40px);
         margin: 10px 20px;
         border: 4px solid $pokeBlue;
         border-radius: 5px;
         background: $pokeYellow;
         text-align: center;

         a {
            display: inline-block;
            width: 100%;
            height: 100%;
            padding: 10px;

            img {
               margin: 15px 0;
               max-height: 80px;
            }

            h4 {
               text-transform: capitalize;
            }
         }
      }
  }
</style>