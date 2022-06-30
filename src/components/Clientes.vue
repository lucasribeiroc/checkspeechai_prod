<template>
  <h1 class="text-center" id="clientes">Clientes</h1>
  <div class="container-fluid">
    <div class="center">
      <div
        id="carouselExampleInterval"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="10000">
            <div class="row">
              <div class="col-lg-4">
                <img
                  src="../assets/logo1.svg"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="col-lg-4">
                <img
                  src="../assets/logo2.svg"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="col-lg-4">
                <img
                  src="../assets/logo3.svg"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <div class="row">
              <div class="col-lg-4">
                <img
                  src="../assets/logo4.svg"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="col-lg-4">
                <img
                  src="../assets/logo5.svg"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="col-lg-4">
                <img
                  src="../assets/logo6.svg"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="row">
              <div class="col-lg-4">
                <img
                  src="../assets/logo7.svg"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="col-lg-4">
                <img
                  src="../assets/logo8.svg"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="col-lg-4">
                <img
                  src="../assets/logo9.svg"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import "bootstrap/dist/js/bootstrap.js";
export default {
  name: "ClientesPage",
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.text-center {
  padding: 25px 0px 15px 0px;
  color: #00008b;
}

.col-lg-4 {
  height: 100%;
}
</style>
