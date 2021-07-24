<template lang="">
    <div class="mid-section-wrapper">
      <!--STORE SLIDESHOW -START-->
      <div id="mainPageCarousel" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li
            data-target="#mainPageCarousel"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#mainPageCarousel" data-slide-to="1"></li>
          <li data-target="#mainPageCarousel" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              class="d-block w-100"
              src="../assets/images/slide1.jpg"
              alt="Pic1"
            />
          </div>
          <div class="carousel-item ">
            <img
              class="d-block w-100"
              src="../assets/images/slide2.jpg"
              alt="Pic2"
            />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="../assets/images/slide3.jpg" alt="Pic3" />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#mainPageCarousel"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Anterior</span>
        </a>
        <a
          class="carousel-control-next"
          href="#mainPageCarousel"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Proximo</span>
        </a>
      </div>
      <!--STORE SLIDESHOW END-->
      <!--PRODUCT SHOWCASE START-->
      <div class="container product-block">
          <prod-panel></prod-panel>
        </div>
        <div>
      </div>
      <!--PRODUCT SHOWCASE END-->
    </div>
</template>
<script>
import ProdPanel from '@/components/ProductPanelMP'

export default {
    components: {
        ProdPanel
    }
}
</script>
<style scoped lang="">
.container .product-block{
    display: inline-flex;
}
</style>
