<template>
   <!-- <pre>{{ meals }}</pre>> -->
   <div class="flex flex-col p-8  ">
      <div>
         <input type="text" class="rounded border-2 border-gray-200 w-full" 
      placeholder="Search for Meals"/>

      </div>
      

      <div class="flex justify-center  gap-2 mt-2">
         <!-- <pre>{{letters }}</pre>> -->
         <router-link :to="{name:'byLetter', params:{letter}}" 
         v-for="letter of letters" :key="letter" >
            {{ letter }}

         </router-link>

      </div>
      
      <!-- <pre>{{ ingredients }}</pre> -->
   </div>
  
</template>

<script setup>
import {computed, onMounted,ref} from 'vue'
import store from '../store';
import axiosClient from '../axiosClient';

// const meals=computed( ()=> store.state.meals )
const letters='ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("");
const ingredients=ref([])

onMounted(async ()=>{

   const response =await axiosClient.get('/list.php?i=list')
   console.log(response.data)
   ingredients.value=response.data
})

</script>
