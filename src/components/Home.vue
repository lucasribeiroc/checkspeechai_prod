<template>
  <div class="container-fluid" id="home">
    <div
      id="carouselExampleControls"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="../assets/img-top.jpg" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="../assets/img-top2.jpg" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="../assets/img-top3.jpg" class="d-block w-100" alt="..." />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <h1 class="text-white text-center">Conheça mais sobre o CheckSpeech AI</h1>
    <p class="text-white fs-5">
      O CheckSpeech AI é um conjunto de APIs de conversão de fala em textos, bem
      como a interpretação do sentimento dominante nos dizeres. Nossa solução é
      treinada em mais de 500.000 horas de áudios, transcritos por humanos de
      uma ampla variedade de idades, nacionalidades, sotaques e níveis de
      instruções A API é comercializada no modelo SAAS (software as a service).
    </p>
    <div class="btn-cta">
      <button class="btn">
        <a href="#contato">Entre em contato conosco!</a>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.carousel-item {
  max-width: 100%;
  max-height: 100%;
}
.container-fluid {
  padding: 0px;
  background-image: url("../assets/bg.png");
  background-size: cover;
}

.row,
.col {
  margin-left: 0;
  margin-right: 0;
  padding: 0;
}

p,
h1 {
  padding: 20px 40px 40px 40px;
}

.btn-cta {
  display: flex;
  width: 300px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: auto;
  padding: 0px 0px 30px 0px;
}

.btn {
  background-color: #faf0e6;
}

a {
  text-decoration: none;
  color: darkblue;
}
</style>
