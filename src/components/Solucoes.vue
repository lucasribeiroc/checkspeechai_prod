<template>
  <div>
    <h1 class="text-center" id="solucoes">Nossas Soluções</h1>
  </div>
  <div class="card-group rounded" id="solucoes">
    <div class="card rounded">
      <img src="../assets/card1.png" class="card-img-top rounded" alt="..." />
      <div class="card-body">
        <h5 class="card-title">
          Transcrição de Áudio Assíncrono (áudio pré-gravado)
        </h5>
        <p class="card-text">
          API de transcrição de voz assíncrona para áudio pré-gravado. Temos uma
          das melhores engines de reconhecimento de fala do mundo! O recurso
          speech-to-text assíncrono é um parceiro estratégico para o seu
          negócio. Esteja você extraindo insights de áudio ou transcrevendo
          conteúdo em escala.
        </p>
      </div>
    </div>
    <div class="card rounded">
      <img src="../assets/card2.png" class="card-img-top rounded" alt="..." />
      <div class="card-body">
        <h5 class="card-title">
          Transcrição de Áudio em tempo real (streaming)
        </h5>
        <p class="card-text">
          O recurso live-speech-to-text de transcrição ao vivo possibilita o uso
          de legendas em tempo real para o seu negócio. Nossas legendas garantem
          que as palestras e treinamentos ao vivo sejam acessíveis e possam ser
          arquivadas para uso futuro.
        </p>
      </div>
    </div>
    <div class="card rounded">
      <img src="../assets/card3.png" class="card-img-top rounded" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Identificação de Idiomas em áudios</h5>
        <p class="card-text">
          Obtendo fala e insights a nível global. Nossa solução tem suporte a 52
          idiomas.
        </p>
      </div>
    </div>
    <div class="card rounded">
      <img src="../assets/card4.png" class="card-img-top rounded" alt="..." />
      <div class="card-body">
        <h5 class="card-title">
          Análise de sentimento a partir do áudio (áudio pré-gravado)
        </h5>
        <p class="card-text">
          Encontre os momentos mais importantes em trechos de falas, diferencie
          falas positivas e negativas e tome decisões de negócios mais
          assertivas com uma compreensão mais profunda.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SolucoesPage",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card-group {
  padding: 15px 10px 20px 10px;
  gap: 10px;
}

h1 {
  padding: 30px 0px 20px 0px;
  color: #00008b;
}

img {
  max-width: 100%;
  max-height: 100%;
}
.card {
  background-color: #faf0e6;
  padding: 10px;
  border: none;
  -webkit-box-shadow: 0px 0px 16px -6px #000000;
  box-shadow: 0px 0px 16px -6px #000000;
}

@media (max-width: 1000px) {
  .card-group {
    display: grid;
    grid-template-columns: 2;
  }
}
</style>
