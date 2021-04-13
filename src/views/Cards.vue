<template lang="">
    <div>
        <ul>
            <Card 
                v-for="(card, index) in cards"
                :key="index"
                :img="card.img"
                :name="card.name"
                :url="card.url"
            />
        </ul>
    </div>
</template>

<script lang="">
    import Card from '../components/Card.vue';

    export default {
        name: 'Cards',
        components: {
            Card,
        },
        props: {
            cards: {
                type: Array,
            }
        }
    }
</script>

<style lang="scss" scoped>
    ul {
        display: flex;
        flex-wrap: wrap;
    }
</style>
