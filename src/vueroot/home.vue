<template>
	<div id="home">
			<nav>
				<div class='logo'>
					<h1><a href="index.html"><span>P</span>REFACE</a></h1>
				</div>
				<div class='navigation-right'>
					<navtool></navtool>
				</div>		
			</nav>
			<showMyMessageTable></showMyMessageTable>
	</div>
		
</template>
<script>
	import navtool from './navtool.vue';
	import showMyMessageTable from './showMyMessageArea.vue';

	export default{
		components:{
			navtool,
			showMyMessageTable,
		}
	}
</script>
<style scoped>

	.logo{
		float:left;
	}
	.logo h1 {
    margin: 0;
    font-size:2em;
    text-transform: uppercase;
    font-weight: bold;
    color: #fff;
	}
	.logo h1 a {
    text-decoration: none;
    color: #fff;
	}
	.logo span {
    border: 7px solid #00a78e;
    padding: 0px 14px;
    font-size: 1.2em;
    color: #fff;
	}
	.navigation-right {
    	float: right;
    	line-height: 50px;
	}
	#home{
		padding: 1em 0;
		min-height: 580px;
		background: rgb(36,37,39) url('../images/header-bg.jpg') center/cover;
	}
	nav{
		width: 100%;
		height: 50px;
		max-width: 1200px;
		margin: 1.5em auto 2.5em;
	}
</style>