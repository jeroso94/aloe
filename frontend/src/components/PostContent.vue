<template>
    <section>
        <article>
            <h2>Nouvelle annonce</h2>
            <form @submit.prevent="save">
                <p>Intitulé:</p>
                <div>
                    <label for="jobTitle">
                        <input type="text" id="jobTitle" name="jobTitle" placeholder="Titre de la mission" title="jobTitle" v-model="jobTitle"/>
                    </label>
                </div>
                <p>Organisation:</p>
                <div>
                    <label for="companyName">
                        <input type="text" id="companyName" name="compagnyName" placeholder="Nom de l'entreprise" title="companyName" v-model="companyName"/>
                    </label>
                </div>
                <p>Salaire:</p>
                <div>
                    <label for="salary">
                        <input type="number" id="salary" name="salary" placeholder="10000" title="salary" v-model="salary">
                    </label>
                </div>
                <p>Détail:</p>
                <div>
                    <label for="description">
                        <textarea id="description" name="description" placeholder="Description de la mission" title="description" v-model="description"></textarea>
                    </label>
                </div>
                <div class="saveButton">
                    <label for="save"><input type="submit" name="save" value="Enregistrer"/></label>
                </div>
            </form>
        </article>
    </section>
</template>

<script>
    import Axios from 'axios';
    export default {
        name: 'PostContent',
        data(){
            return{
                jobTitle: '',
                companyName:'',
                salary:'',
                description:''
            }
        },
        methods:{
            save(){
                const data = {
                        job_title: this.jobTitle,
                        company_name: this.companyName,
                        salary: this.salary,
                        description: this.description
                };
                console.log(data);
                Axios.post('api/job/publish', data)
                .then(res => {
                    console.log(res);
                })
                .catch(err => { console.log(err) });

                this.$router.push('/');
            }
        }
    }
</script>

<style lang="scss" scoped>
    section{
        margin-left: 1rem;
        width: 100%;
    }

    article{
        text-align: start;
        width: 100%;
    }

    h2{
        margin-top: 0.5rem;
    }

    input[type="text"], input[type="number"]{
        width: 500px;
        height: 25px;
        margin-left: 5rem;
        padding: 10px;
    }

    textarea{
        width: 500px;
        height: 100px;
        margin-left: 5rem;
        padding: 10px;
    }

    .saveButton{
        padding: 30px;
        text-align: end;
    }
</style>