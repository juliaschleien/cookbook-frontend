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

<div class="Home">
    <div class="center">
        <h1> Seja bem vindo</h1>

        <form v-if="this.showAlter" @submit.prevent="updateInformation" class="align-center">
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
                <button v-show="informations.id" @click="cancelUpdate" class="waves-effect waves-light btn-small">Cancelar</button>
            </div>
        </form>

        <form @submit.prevent="findById" class="align-center">
            <div>
                <input type="text" v-model="information.id" placeholder="Digite o código que deseja buscar">
            </div>
            <div class="center-align">
                <button class="waves-effect waves-light btn-small">Pesquisar</button>
            </div>
        </form>

        <div v-show="findInformations.id">
            <h3>Receita encontrada</h3>
            <p>
                Código: {{findInformations.id}}
                <br> Nome: {{findInformations.name}}
                <br> Telefone: {{findInformations.phone}}
                <br> Email: {{findInformations.email}}
                <br> Nome da receita: {{findInformations.nameRecipe}}
                <br> Ingredientes necessários: {{findInformations.ingredients}}
                <br> Receita: {{findInformations.recipe}}
                <br> Tempo de preparo: {{findInformations.time}}
                <br> Rendimento da Receita: {{findInformations.quantity}}
                <br>
            </p>
        </div>

        <p>Quantidade de Receitas: {{information.length}}</p>
        <table v-show="information.length > 0">
            <thead>
                <tr>
                    <th>Código</th>
                    <th>Nome</th>
                    <th>Telefone</th>
                    <th>Email</th>
                    <th>Nome da Receita</th>
                    <th>Ingredientes Necessários</th>
                    <th>Receita</th>
                    <th>Tempo de preparo</th>
                    <th>Rendimento da Receita</th>
                    <th>Excluir receita</th>
                    <th>Alterar</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="informations in information" :key="informations.id">
                    <td>{{informations.id}}</td>
                    <td>{{informations.name}}</td>
                    <td>{{informations.phone}}</td>
                    <td>{{informations.email}}</td>
                    <td>{{informations.nameRecipe}}</td>
                    <td>{{informations.ingredients}}</td>
                    <td>{{informations.recipe}}</td>
                    <td>{{informations.time}}</td>
                    <td>{{informations.quantity}}</td>
                    <td>
                        <button type="button" @click="deleteInformation(informations)" class="waves-effect waves-light btn-small">Excluir</button>
                    </td>
                    <td>
                        <button type="button" @click="updateInformation(informations)" class="waves-effect waves-light btn-small">Alterar</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
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
                findInformations: {
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
                information: [],
                showAlter: false
            }
        },
        name: 'App',
        components: {},
        mounted() {
            this.listInformation();
        },
        methods: {
            listInformation() {
                    InformationsServices.findAll().then(response => {
                        this.information = response.data;
                    });
                },
                deleteInformation(information) {
                    if (confirm("Deseja excluir a receita realmente?")) {
                        InformationsServices.delete(information).then(response => {
                            this.listInformation();
                            alert("Receita excluida com sucesso");
                            return response
                        });
                    }
                },
                findById() {
                    InformationsServices.findById(this.information).then(response => {
                        this.findInformations = response.data;
                    });
                },
                updateInformation(information) {
                    if (this.showAlter) {
                        InformationsServices.save(this.informations).then(response => {
                            this.listInformation();
                            this.informations = {};
                            alert("Receita alterada com sucesso!");
                            this.showAlter = false;
                            return response;
                        });
                    } else {
                        this.showAlter = true;
                        this.informations = information;
                    }
                },
                cancelUpdate() {
                    this.showAlter = false;
                    this.informations = {};
                }
        }
}

</script>
