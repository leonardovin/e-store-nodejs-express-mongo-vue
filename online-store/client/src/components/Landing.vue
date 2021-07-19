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
        <div class="container product-area">
          <div class="row justify-content-around">
              <div class="col-6 col-md-4 product-frame">
                <div class="imgbox">
                  <img width="200"  src="../assets/images/oculosnobg.png" alt="productimg">
                </div>
                <div class="contentbox">
                  <h3>Product Name</h3>
                  <h2 class="price">$69.99</h2>
                  <a href="product-checkpage.html" class="buybtn">Comprar</a>
                </div>
              </div>

            <div class="col-6 col-md-4 product-frame">
              <div class="imgbox">
                <img width="200"  src="../assets/images/oculosnobg.png" alt="productimg">
              </div>
              <div class="contentbox">
                <h3>Product Name</h3>
                <h2 class="price">$69.99</h2>
                <a href="product-checkpage.html" class="buybtn">Comprar</a>
              </div>
            </div>
            <div class="col-6 col-md-4 product-frame">
              <div class="imgbox">
                <img width="200"  src="../assets/images/oculosnobg.png" alt="productimg">
              </div>
              <div class="contentbox">
                <h3>Product Name</h3>
                <h2 class="price">$69.99</h2>
                <a href="product-checkpage.html" class="buybtn">Comprar</a>
              </div>
            </div>
          </div>
          <div class="row justify-content-around">
            <div class="col-6 col-md-4 product-frame">
              <div class="imgbox">
                <img width="200"  src="../assets/images/oculosnobg.png" alt="productimg">
              </div>
              <div class="contentbox">
                <h3>Product Name</h3>
                <h2 class="price">$69.99</h2>
                <a href="product-checkpage.html" class="buybtn">Comprar</a>
              </div>
            </div>
            <div class="col-6 col-md-4 product-frame">
              <div class="imgbox">
                <img width="200"  src="../assets/images/oculosnobg.png" alt="productimg">
              </div>
              <div class="contentbox">
                <h3>Product Name</h3>
                <h2 class="price">$69.99</h2>
                <a href="product-checkpage.html" class="buybtn">Comprar</a>
              </div>
            </div>
            <div class="col-6 col-md-4 product-frame">
              <div class="imgbox">
                <img width="200"  src="../assets/images/oculosnobg.png" alt="productimg">
              </div>
              <div class="contentbox">
                <h3>Product Name</h3>
                <h2 class="price">$69.99</h2>
                <a href="product-checkpage.html" class="buybtn">Comprar</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--PRODUCT SHOWCASE END-->
    </div>
</template>
<script>
export default {

}
</script>
<style lang="">

</style>
