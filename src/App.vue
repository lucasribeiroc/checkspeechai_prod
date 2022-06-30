<template>
  <div id="app">
    <CookiesPage />
    <NavBar msg="Bem vindo a CheckSpeech AI" />
    <HomePage />
    <SolucoesPage />
    <ClientesPage />
    <PrecosPage />
    <ContatoPage />
    <FooterPage />
  </div>
</template>

<script>
import NavBar from "./components/Navbar.vue";
import CookiesPage from "./components/Cookies.vue";
import HomePage from "./components/Home.vue";
import SolucoesPage from "./components/Solucoes.vue";
import ClientesPage from "./components/Clientes.vue";
import PrecosPage from "./components/Precos.vue";
import ContatoPage from "./components/Contato.vue";
import FooterPage from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    NavBar,
    CookiesPage,
    HomePage,
    SolucoesPage,
    ClientesPage,
    PrecosPage,
    ContatoPage,
    FooterPage,
  },
};
</script>

<style>
body {
  background-color: hsl(0, 0%, 90%);
}
</style>
