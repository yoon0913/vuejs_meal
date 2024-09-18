<template>
    <div class="p-8">
        <input type="text"
        v-model="keyword"
        class="rounded border-2 border-gray-200 w-full" 
      placeholder="Search for Meals"
      @change="searchMeals"/>

    </div>
    <div>
        <pre>{{ meals }}</pre>
    </div>
</template>



<script setup>
import axios from 'axios';
import {ref} from 'vue';

import store from '../store';
import { computed } from '@vue/reactivity';

const keyword=ref('');
const meals=computed(()=>store.state.searchedMeals)

function searchMeals(){
    // axiosClient.get(`search.php?s=${keyword.value}`)
    store.dispatch('searchMeals', keyword.value)

}


</script>