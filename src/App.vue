<template>
  <div id="app">
    <h1>Pokecomponents</h1>

    <SearchForm formTitle="Cerca per nome" placeholder="Inserisci il nome di un pokemon" @sendSearch="getPokemonByName" />

    <SearchForm formTitle="Cerca per tipo" placeholder="Inserisci il tipo" @sendSearch="getPokemonByType" />

    <Cards :cards="pokemon" />
  </div>
</template>

<script>
import Cards from './views/Cards.vue';
import SearchForm from './components/SearchForm.vue';

export default {
  name: "App",
  components: {
    Cards,
    SearchForm
  },
  data() {
      return {
          pokemon: [],
      }
  },
  methods: {
    getAllPokemon() {
     this.axios
        .get(`${this.base_url}/pokemon`)
        .then( (response) => {
          this.pokemon = response.data.results;
        });
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
              url: poke.species.url
            }
          ];

        } )
    },

    getPokemonByType(text) {
      const pokeType = text;

      this.axios
        .get(`${this.base_url}/type/${pokeType}`)
        .then( (response) => {

          const poke = response.data.pokemon.map( (element) => {
            return {
              name: element.pokemon.name,
              url: element.pokemon.url
            }
          } );

          this.pokemon = poke;
        } );
    },
    
  },
  mounted() {
    this.getAllPokemon();
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

ul {
  padding: 0;
  list-style: none;
}
</style>
