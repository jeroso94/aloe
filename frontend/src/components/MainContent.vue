<template>
    <section>
        <jobView :job="job" v-for="job in jobList" :key="job.id"></jobView>
    </section>
</template>

<script>
    import Axios from 'axios';
    import JobView from '../components/JobView.vue';
    export default {
        name: 'MainContent',
        components: { 
            'jobView': JobView,
        },
        data() {
            return {
                jobList: []
            }
        },
        created() {
            Axios.get('api/job/load/')
            .then(res => {
                console.log(res.data);
                this.jobList = res.data;
            })
            .catch(err => { console.log(err) });            
        },
        beforeUpdate() {
            Axios.get('api/job/load/')
            .then(res => {
                console.log(res.data);
                this.jobList = res.data;
            })
            .catch(err => { console.log(err) });            
        }
    }
</script>

<style lang="scss" scoped>
    section{
        margin-left: 1rem;
        margin-right: 1.5rem;
        flex-direction: column-reverse;
        align-self: flex-start;
        width: 100%;
    }
</style>