<template>
	<!--HEADER START-->
	<div class="header">
		<div class="container-fluid">
			<nav class="navbar sticky-top bg-warning navbar-expand-lg navbar-light">
				<div class="logo-clickable nv-bar">
					<router-link to="/"
						><img src="../assets/images/logo.png" alt="logo"
					/></router-link>
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
								<router-link
									class="dropdown-item"
									:to="{
										name: 'products-cat',
										params: { productCategory: 'Sol' }
									}"
									>Oculos de Sol</router-link
								>
								<router-link
									class="dropdown-item"
									:to="{
										name: 'products-cat',
										params: { productCategory: 'Gral' }
									}"
									>Oculos de Gral</router-link
								>
								<div class="dropdown-divider"></div>
								<a
									class="dropdown-item"
									@click="
										navigateTo({
											name: 'products'
										})
									"
									style="cursor: pointer"
									>Todos</a
								>
							</div>
						</li>
					</ul>
					<form class="form-inline my-2 my-lg-0">
						<input
							class="form-control mr-sm-2"
							type="search"
							v-model="queryString"
							placeholder="Buscar"
							aria-label="Search"
						/>
					</form>
					<button
						class="btn btn-outline-success my-2 my-sm-0"
						type="submit"
						@click="search()"
					>
						Buscar
					</button>
					<ul class="navbar-nav mr-auto" id="navbar-items-end">
						<li
							class="nav-item"
							style="cursor: pointer"
							v-if="!$store.state.isUserAdmin"
							@click="cartRoute"
						>
							<div class="nav-link">Carrinho</div>
						</li>

						<li
							class="nav-item"
							v-if="!$store.state.isUserLoggedIn"
							style="cursor: pointer"
							@click="navigateTo({ name: 'login' })"
						>
							<div class="nav-link">Entrar</div>
						</li>
						<li
							class="nav-item"
							v-if="!$store.state.isUserLoggedIn"
							style="cursor: pointer"
							@click="navigateTo({ name: 'register' })"
						>
							<div class="nav-link">Cadastro</div>
						</li>
						<v-btn
							v-if="$store.state.isUserLoggedIn"
							@click="logout"
							class="nav-link"
						>
							Sair
						</v-btn>
					</ul>
				</div>
			</nav>
		</div>
	</div>
	<!--HEADER END-->
</template>
<script>
export default {
	data() {
		queryString: null;
	},
	name: "CategoryPage",
	beforeRouteUpdate(to, from, next) {
		this.adminCheck();
		next();
	},
	methods: {
		logout() {
			this.$store.dispatch("setToken", null);
			this.$store.dispatch("setUser", null);
			this.$router.push("/");
		},
		cartRoute() {
			if (!this.$store.state.isUserLoggedIn) {
				this.$router.push("/login");
			} else {
				this.$router.push("/cart");
			}
		},
		navigateTo(route) {
			this.$router.push(route);
		}
	},
	created() {},

	search() {
		if (!queryString) {
			this.$router.push({ name: "products" });
		} else {
			this.$router.push({ name: "search" });
		}
	}
};
</script>
<style lang=""></style>
