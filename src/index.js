import Vue from 'vue';
import homepage from './homepage.vue'

const root=document.createElement('div');
document.body.appendChild(root);
new Vue({
	render:(h)=>h(homepage)
}).$mount(root)