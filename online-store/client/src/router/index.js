/* eslint-disable */

import Vue from "vue";
import Router from "vue-router";
import Landing from "@/components/Landing";
import Register from "@/components/Register";
import Login from "@/components/Login";
import Cart from "@/components/Carrinho";
import Products from "@/components/Products";
import CreateProduct from "@/components/CreateProduct";
import ProductPage from "@/components/ProductPage";
import ProductsCat from "@/components/ProductsCat";
import Vuex from "vuex";

Vue.use(Vuex);

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: "/",
			name: "landing",
			component: Landing
		},
		{
			path: "/register",
			name: "register",
			component: Register
		},
		{
			path: "/login",
			name: "login",
			component: Login
		},
		{
			path: "/cart",
			name: "cart",
			component: Cart
		},
		{
			path: "/products/category/:productCategory",
			name: "products-cat",
			component: ProductsCat
		},
		{
			path: "/products",
			name: "products",
			component: Products
		},
		{
			path: "/products/search/:queryString",
			name: "search",
			component: Products
		},
		{
			path: "/products/create",
			name: "create-product",
			component: CreateProduct
		},
		{
			path: "/products/:productId",
			name: "product-page",
			component: ProductPage
		}
	]
});
