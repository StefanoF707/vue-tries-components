<template>
  <div id="app">
    <h1>Pokecomponents</h1>

    <SearchForm formTitle="Cerca per nome" placeholder="Inserisci il nome di un pokemon" @sendSearch="getPokemonByName" />

    <SearchForm formTitle="Cerca per tipo" placeholder="Inserisci il tipo" @sendSearch="getPokemonByType" />

    <Cards
         :cards="pokemon" 
         class="cardsPokemon"
      />

    <BaseInput  
        class="backBtn"
        v-if="customSearch"
        type="submit"
        value="Indietro"
        @click="getAllPokemon"
    />
  </div>
</template>

<script>
import Cards from './views/Cards.vue';
import SearchForm from './components/SearchForm.vue';
import BaseInput from './components/BaseInput.vue';

export default {
  name: "App",
  components: {
    Cards,
    SearchForm,
    BaseInput
  },
  data() {
      return {
          pokemon: [],
          customSearch: false,
      }
  },
  methods: {
    getAllPokemon() {

      this.pokemon = [];
      this.axios
          .get(`${this.base_url}/pokemon`)
          .then( (response) => {

            response.data.results.forEach( (element) => {
              const pokeUrl = element.url.split('/');
              const pokeId = pokeUrl[pokeUrl.length - 2];

              this.pokemon.push({
                ...element,
                img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokeId}.svg`,
              });

            } );
            // this.pokemon = response.data.results;
            console.log(this.pokemon);
        });

        this.customSearch = false;
    },

    getPokemonByName(text) {
      const pokeName = text;

      this.axios
        .get(`${this.base_url}/pokemon/${pokeName}`)
        .then( (response) => {

          const poke = response.data;
          this.pokemon = [
            {
              name: poke.name,
              url: poke.species.url,
              img: poke.sprites.other.dream_world.front_default,
            }
          ];

        } );

      this.customSearch = true;

    },

    getPokemonByType(text) {
      const pokeType = text;

      this.axios
        .get(`${this.base_url}/type/${pokeType}`)
        .then( (response) => {
          
          const poke = response.data.pokemon.map( (element) => {
            const pokeUrl = element.pokemon.url.split('/');
            const pokeId = pokeUrl[pokeUrl.length - 2];

            return {
              name: element.pokemon.name,
              url: element.pokemon.url,
              img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokeId}.svg`,
            }
          } );
          this.pokemon = poke;
        } );

      this.customSearch = true;

    },
    
  },
  mounted() {
    this.getAllPokemon();
  },
};
</script>

<style lang="scss">
@import './scss/_variables.scss';
@import './scss/_common.scss';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  .backBtn {
    padding: 20px;
    border: 0;
    background: #f71616;
    color: #fff;
    border-radius: 50px;
    cursor: pointer;
  }


}

</style>
