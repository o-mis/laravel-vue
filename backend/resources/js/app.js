/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue').default;

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('test-component', require('./components/TestComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const vm = new Vue({
    el: '#app',
    data:{
        result:"ボタンを押すとここにおみくじの結果が出るよ",
        omikujiResult:["大吉","中吉","小吉","凶"]
    },
    methods:{
        omikuji:function(){
            const num = Math.floor(Math.random()*this.omikujiResult.length);
            this.result = this.omikujiResult[num];
        }
    }
})

