

<template>

<div id="App">
    <nav>
        <div class="nav-wrapper">
            <a href="#" class="brand-logo center">CookBook</a>
            <ul id="nav-mobile" class="left hide-on-med-and-down">
                <li>
                    <router-link to="/home">Home</router-link>
                </li>
                <li>
                    <router-link to="/save">Salvar nova receita</router-link>
                </li>
                <li>
                    <router-link to="/about">Sobre</router-link>
                </li>
            </ul>
        </div>
    </nav>
    <router-view></router-view>
</div>

</template>
