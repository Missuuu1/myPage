<template>
	<div id="title">
		<div class="this-header">
			<h4>{{headerFour}}</h4>
			<h3 :style="{color:color}">My <b>{{headerThree}}</b></h3>
			<span class="this-hr" :style="{backgroundColor:color}"></span>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{}
		},
		props:[
				"headerFour",
				"headerThree",
				"color"
				]
	}
</script>
<style>
	
		.this-header h4{
			display: inline-block;
			font-size: 1.2rem;
		    color: #FFF;
		    background: #00a78e;
		    margin-top:2rem;
			margin-left: 50%;
			transform: translateX(-50%);
		    padding: .5rem 1.5rem;
		    position: relative;
		    box-shadow: 0 8px 17px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0);
		    text-transform: uppercase;
		}
		.this-header h4::before {
		    width: 0;
		    height: 0;
		    position: absolute;
		    content: '';
		    bottom: -9px;
		    left: 12px;
		    border-style: solid;
		    border-width: 14px 11px 0 12px;
		    border-color: #00a78e transparent transparent transparent;
		}
		.this-header h3{
			color:#fff;
			font-size: 2rem;
			margin-top:.1rem;
			text-align: center;
			width: 100%;
		    font-weight: 300;
		    font-family: 'Open Sans', sans-serif;
		    padding: 0 0 .2rem 0;
		    text-transform: uppercase;
		}
		.this-hr{
			position: relative;
			display: inline-block;
			height:1px;
			width: 10%;
			background-color:#fff;
			margin-left:50%;
			transform: translateX(-50%);
		}
		.this-hr:after{
			content:'';
			position: absolute;
			bottom: -.2rem;
			display: block;
			width: 50%;
			height: .4rem;
			left: 50%;
			transform: translateX(-50%);
			background-color:#00a78e;
		}
</style>