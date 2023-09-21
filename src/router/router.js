import {createRouter, createWebHistory} from "vue-router"

import ProductList from "../components/ProductList.vue"
import Product from "../components/Product.vue"
import Home from "../components/Home.vue"
import About from "../components/About.vue"
import Contact from "../components/Contact.vue"
import NavBar from "../components/NavBar.vue"


const routes = [
{path:"/home", components:{default:Home, navbar:NavBar}, name:"home"},
{path:"/about", components:{default:About, navbar:NavBar}, name:"about"},
{path:"/contact", components:{default:Contact, navbar:NavBar}, name:"contact"},
{path: "/", components:{ default:ProductList,navbar:NavBar},name:"productList"},
{path:"/product/:id", components:{default:Product, navbar:NavBar}, name:"product"},
];

const router = createRouter({
    history:createWebHistory(),
    routes,
});
export default router