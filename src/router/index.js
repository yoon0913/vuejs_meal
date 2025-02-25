import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '../components/DefaultLayout.vue'
import GuestLayout from '../components/GuestLayout.vue'

import Home from '../views/Home.vue'
import MealsByIngredient from '../views/MealsByIngredient.vue'
import MealsByName from '../views/MealsByName.vue'
import MealsByLetter from '../views/MealsByLetter.vue'

const routes=[
    {
        path:'/',
        component:DefaultLayout,
        children:[
            {
                path:'/',
                name:'home',
                component: Home
            },
            // {
            //     path:'/letter/:letter',
            //     name:'byLetter',
            //     component: MealList,
            // },
            {
                path:'/by-name/:name?',
                name:'byName',
                component: MealsByName
            },
            {
                path:'/by-letter/:letter?',
                name:'byLetter',
                component: MealsByLetter
            },
            {
                path:'/by-ingredient/:ingredient?',
                name:'byIngredient',
                component: MealsByIngredient
            },


        ]
    },
    {
        path:'/guest',
        component:GuestLayout
    }
    
]

const router=createRouter({
    history:createWebHistory(),
    routes

})

export default router;