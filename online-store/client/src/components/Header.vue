<template>
    <!--HEADER START-->
    <div class="header">
      <div class="container-fluid">
        <nav class="navbar sticky-top bg-warning navbar-expand-lg navbar-light">
          <div class="logo-clickable nv-bar">
            <router-link to="landing.html"><img src="../assets/images/logo.png" alt="logo" /></router-link>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
          </div>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Categorias
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="product-page.html">Oculos de Sol</a>
                  <a class="dropdown-item" href="product-page.html">Oculos de Gral</a>
                  <div class="dropdown-divider"></div>
                </div>
              </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
              <input
                class="form-control mr-sm-2"
                type="search"
                placeholder="Buscar"
                aria-label="Search"
              />
            </form>
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
              Buscar
            </button>
            <ul class="navbar-nav mr-auto" id="navbar-items-end">
              <li class="nav-item">
                <a class="nav-link" href="carrinho.html">Carrinho</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="login.html">Entrar</a>
              </li>
              <li class="nav-item">
                <router-link to='register' class="nav-link" >Cadastro</router-link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
    <!--HEADER END-->
</template>
<script>
export default {

}
</script>
<style lang="">

</style>
