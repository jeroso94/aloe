<template>
    <article>
        <h3 v-on:click="toggleModal">{{ job.job_title }} chez {{ job.company_name }}</h3>
        <span>{{ job.updatedAt }}</span>
        <modal :showModal="showModal" :toggleModal="toggleModal" :job="job"></modal>
    </article>
</template>

<script>
    import Modal from '../components/Modal.vue'
    export default {
        name: 'JobView',
        components: {
            'modal': Modal
        },
        props: ['job'],
        methods:{
            toggleModal: function(){
                this.showModal = !this.showModal
            }
        },
        data(){
            return{
                showModal: false
            }
        }
    }
</script>

<style lang="scss" scoped>
    article{
        margin: 0.5rem;
        padding-bottom: 1rem;
        background: rgba($color: green, $alpha: 0.3);
    }
</style>