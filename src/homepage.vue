<template>
	<div id="homepage">
		<Home></Home>
		<About></About>
		<Service></Service>
		<Experience></Experience>
		<Works></Works>
		<Blogs></Blogs>
		<Contact></Contact>
	
	</div>
</template>
<script>
	import fontAwesome from './style/font-awesome.min.css';
	import Home from './vueroot/home.vue';
	import About from './vueroot/about.vue';
	import Service from './vueroot/service.vue';
	import Experience from './vueroot/experience.vue';
	import Works from './vueroot/works.vue';
	import Blogs from './vueroot/blogs.vue';
	import Contact from './vueroot/contact.vue';
	export default{
		components:{
			Home,
			About,
			Service,
			Experience,
			Works,
			Blogs,
			Contact
		},
		methods:{
		
		}
	}
</script>
<style>
	*{
		margin:0;
		padding: 0;
	}
	li{
		list-style-type: none;
	}
	a{
			text-decoration: none;
		}
		a:link,a:visited,a:hover,a:active{
			color:#000;
		}	
		#homepage{
			transition: all 1s ease;
			transform: translate3d(0px, 0px, 0px);
		}
		body{
			 scroll-behavior: smooth;
		}
		body::-webkit-scrollbar {display:none}
</style>
