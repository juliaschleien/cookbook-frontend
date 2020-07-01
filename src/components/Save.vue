<style scoped>

.align-center {
    margin: auto;
    width: 50%;
    border: 3px solid #EE6E73;
    padding: 10px;
}

.align-button {
    margin: auto;
    width: 75%;
    padding: 10px;
}

.padding-bottom {
    padding-bottom: 20px;
}

</style>

<template>

<div class="save padding-bottom">
    <div class="center">
        <h1> Gostaria de deixar sua receita? </h1>
    </div>


    <form @submit.prevent="saveAndUpdateInformation" class="align-center">
        <div>
            <input type="text" v-model="informations.name" placeholder="nome">
        </div>
        <div>
            <input type="text" v-model="informations.phone" placeholder="telefone">
        </div>
        <div>
            <input type="text" v-model="informations.email" placeholder="email">
        </div>
        <div>
            <input type="text" v-model="informations.nameRecipe" placeholder="nome receita">
        </div>
        <div>
            <input type="text" v-model="informations.ingredients" placeholder="ingredientes">
        </div>
        <div>
            <input type="text" v-model="informations.recipe" placeholder="receita">
        </div>
        <div>
            <input type="text" v-model="informations.time" placeholder="tempo de preparo">
        </div>
        <div>
            <input type="text" v-model="informations.quantity" placeholder="rendimento">
        </div>
        <div class="center-align">
            <button class="waves-effect waves-light btn-small">Salvar</button>
        </div>
    </form>
</div>

</template>

<script>

import InformationsServices from '../services/informationsservices'

export default {
    data() {
            return {
                informations: {
                    id: '',
                    name: '',
                    phone: '',
                    email: '',
                    nameRecipe: '',
                    ingredients: '',
                    recipe: '',
                    time: '',
                    quantity: ''
                },
                information: []
            }
        },
        name: 'App',
        components: {},
        methods: {
            saveAndUpdateInformation() {
                    InformationsServices.save(this.informations).then(response => {

                        this.informations = {};
                        alert("Receita adicionada com sucesso!");
                        return response

                    });
            }
        }
}

</script>
