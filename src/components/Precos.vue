<template>
  <h1 class="text-center" id="precos">Planos e Preços</h1>
  <div class="d-flex container">
    <div class="card" style="width: 100%">
      <div class="card-body">
        <h5 class="card-title text-center">Beginner: R$29 por mês</h5>
        <h6 class="card-subtitle mb-2 text-muted text-center">
          R$328 para uma compra anual
        </h6>
        <p class="card-text">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Transcrição de Áudio Assíncrono - 120 minutos (R$0,20 / minuto excedente)</li>
            <li class="list-group-item">Transcrição de Áudio em tempo real - 90 minutos (R$0,40 / minuto excedente)</li>
            <li class="list-group-item">Identificação de Idiomas em áudios - 200 minutos (R$0,05 / minuto excedente)</li>
            <li class="list-group-item">Análise de sentimento a partir do áudio (áudio pré-gravado) - 120 minutos (R$0,40 / minuto excedente)</li>
          </ul>
        </p>
      </div>
    </div>
    <div class="card" style="width: 100%">
      <div class="card-body">
        <h5 class="card-title text-center">Business: R$44 por mês</h5>
        <h6 class="card-subtitle mb-2 text-muted text-center">R$499 para uma compra anual</h6>
        <p class="card-text">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Transcrição de Áudio Assíncrono - 120 minutos (R$0,20 / minuto excedente)</li>
            <li class="list-group-item">Transcrição de Áudio em tempo real - 90 minutos (R$0,40 / minuto excedente)</li>
            <li class="list-group-item">Identificação de Idiomas em áudios - 200 minutos (R$0,05 / minuto excedente)</li>
            <li class="list-group-item">Análise de sentimento a partir do áudio (áudio pré-gravado) - 120 minutos (R$0,40 / minuto excedente)</li>
          </ul>
        </p>
      </div>
    </div>
    <div class="card" style="width: 100%">
      <div class="card-body">
        <h5 class="card-title text-center">Enterprise</h5>
        <h6 class="card-subtitle mb-2 text-muted text-center">preço sob consulta</h6>
        <p class="card-text">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Preços especiais para grandes volumes.</li>
            <li class="list-group-item">Prioridade no suporte técnico.</li>
            <li class="list-group-item">Gestor de conta dedicado.</li>
          </ul>
        </p>
        <br><br><br><br><br><br><br>
        <div class="d-flex">
          <button class="btn align-center">
            <a href="#contato">Entre em contato!</a>
            </button>
            </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PrecosPage",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  padding-bottom: 20px;
}

#precos {
  color: #00008B;
}

.card {
  margin: 20px;
  border-radius: 20px;
  -webkit-box-shadow: 0px 0px 16px -6px #000000; 
  box-shadow: 0px 0px 16px -6px #000000;
}

.d-flex {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.btn {
  background-color: #00008B;
}

a {
  text-decoration: none;
  color: #fff;
}

@media (max-width: 1000px) {
  .d-flex {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
}
</style>
