<template>
    <section v-show="showModal">
        <div class="overlay" v-on:click="toggleModal"></div>
        <div class="modal">
            <h2>{{ job.job_title }}</h2>
            <p>
                <strong>{{job.company_name}}</strong>
            </p>
            <p>
                <i>{{job.salary}}</i>
            </p>
            <p>
                {{job.description}}
            </p>
        </div>
    </section>
</template>

<script>
export default {
    name:'Modal',
    props: ['showModal','toggleModal','job']
}
</script>

<style lang="scss" scoped>
    section{
        position: fixed;
        top:0;
        bottom: 0;
        right: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .overlay{
        background: rgba(0, 0, 0, 0.5);
        position: fixed;
        top:0;
        bottom: 0;
        right: 0;
        left: 0;
    }

    .modal{
        background: #f1f1f1;
        padding: 50px;
        position: fixed;
        width: 30%;
        text-align: start;
    }
</style>