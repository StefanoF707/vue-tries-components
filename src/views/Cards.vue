<template lang="">
    <div>
        <ul>
            <!-- <li v-for="(card, index) in cards" :key="index">
                <a :href="card.url" target="_blank">{{ card.name }}</a>
            </li> -->
            <Card 
                v-for="(card, index) in cards"
                :key="index"
                :name="card.name"
                :url="card.url"
            />
        </ul>
    </div>
</template>

<script lang="">
    import Card from './Card.vue';

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

<style lang="scss">
</style>
