<script setup>
import {ref, reactive, onBeforeMount} from "vue"
import {useRoute} from "vue-router"
const route = useRoute();
const products = ref({})

onBeforeMount(()=>{
  fetch('https://dummyjson.com/products?limits=20')
.then(res => res.json())
.then(data =>{products.value = data.products})

})

import Home from './Home.vue';
</script>
<template>
    <Home/>
    <div class="container">
        <h2>Our Latest Product</h2>
        <div class="row row-cols-1 row-cols-md-3 g-4">

  <div class="col" v-for="product in products" :key="product.id">
    <div class="card h-100">
      <img  :src="product.thumbnail" class="img-fluid" style="width:300px; height: 300px;" alt="...">
      <div class="card-body">
        <h4 class="card-title">Name:{{ product.title }}</h4>
        <h5>Price: {{ product.price }}$</h5>
        <h5>Brand: {{ product.brand }}</h5>
        <p class="card-text">Des: {{ product.description }}</p>
        <router-link :to="{name:'product', params:{id:product.id}}"><button class="btn btn-warning">Details</button></router-link>
        
      </div>
    </div>
  </div>
</div>
    </div>
</template>