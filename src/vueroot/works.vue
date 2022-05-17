<template>
	<div id="works">
		<Title v-bind:headerFour="'my works'" v-bind:headerThree="'works'" v-bind:color="'#000'"></Title>
		<div class="work-button">
			<ul>
				<li v-for="(state,index) in states" :key="state" :class="filter===state?'active':''" @click='toggleFilter(state)'>
					<a>{{state}}</a>
				</li>
			</ul>
		</div>
		<div class="work-content">
			<ul>
				<li v-for="item in filtered">
					<a :href="item.href" :key="item.url" :style="{backgroundImage:'url('+item.url+')'}" target="_blank">
					</a>
				</li>
				
			</ul>
		</div>
	</div>
</template>
<script>
	import Title from './title.vue';
	export default{
		components:{
			Title
		},
		data(){
			return{
				states:['all','web','plugin'],
				linkList:[
				{state:'plugin',url:'https://github.com/',href:"https://github.com/"},
					{state:'plugin',url:'https://github.com/',href:"https://github.com/"},
					{state:'web',url:'https://github.com/',href:"https://github.com/"},
					{state:'plugin',url:'https://github.com/',href:"https://github.com/"},
					{state:'web',url:'https://github.com/',href:"https://github.com/"},
					{state:'web',url:'https://github.com/',href:"https://github.com/"},
					{state:'web',url:'https://github.com/',href:"https://github.com/"},
					{state:'web',url:'https://github.com/',href:"https://github.com/"}
				],
				filter:'all'
			}
		},
		computed:{
				filtered(){
					if(this.filter==='all'){
						return this.linkList;
					}
					return this.linkList.filter(item=>item.state===this.filter);				
				}
			},
			methods:{
				toggleFilter(state){
					this.filter=state
				}
			}
	}
</script>
<style scoped>
		#works{
			background-color:rgb(244,244,244);
			min-height: 580px;
		}
		.work-button{
			max-width: 300px;
			width: 100%;
			margin:2rem auto;
		}
		.work-button ul{
			display: flex;
			justify-content: space-around;
		}
		.work-button li{
			text-transform: uppercase;
			font-weight: bold;
			text-align: center;
			line-height: 2.5rem;
			width: 5rem;
			height: 2.5rem;
			border:.2rem solid #00a78e;	
			cursor:pointer;
			transition: all 800ms ease;
		}
		
		.work-button li:hover,.work-button ul .active{
			background-color:#00a78e;
			color:#eee;
		}
		.work-content ul{
			font-size:0;
		}

		.work-content a{
			display: block;
			width: 100%;
			height: 100%;
			background: 0 0/cover;
		}
		@media screen and (min-width: 760px){
			.work-content li{
				box-sizing: border-box;
				display: inline-block;
				width: 25%;
				height: 220px;
				border-bottom: .5rem solid rgb(46,46,46);
			}
		}
		@media screen and (max-width: 759px){
			.work-content li{
				box-sizing: border-box;
				display: inline-block;
				width: 50%;
				height: 220px;
				border-bottom: .5rem solid rgb(46,46,46);
			}
		}
</style>