<template>
	<div id="services">
		<Title v-bind:headerFour="'What I do'" v-bind:headerThree="'service'" v-bind:color="'#fff'"></Title>
		<div class="services-content">
			<ul>
				<li v-for='item of serviceContent'>
					<div class="service-icon" @click="getOffsetTop()">
						<i class='fa' :class="item.serviceIcon"></i>
					</div>
					<div class="service-content">
						<h6>{{item.serviceTitle}}</h6>
						<span>{{item.serviceContent}}</span>
					</div>
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
				serviceContent:[
					{
						serviceIcon:'fa-reddit-alien',
						serviceTitle:'网站制作',
						serviceContent:'根据用户的需求制作符合用户心意的网站,类型包括个人网站，企业网站。用户提供网站设计稿的情况更便宜。',
					},
					{
						serviceIcon:'fa-bed',
						serviceTitle:'网站托管',
						serviceContent:'支持托管个人网站,包括域名的注册、空间的租用、服务器系统的管理、信息的上传、主页的创意、网页的制作更新、Email系统的。',
					},
					{
						serviceIcon:'fa-bug',
						serviceTitle:'软件开发',
						serviceContent:'格局用户的需求制作APP、小程序等，为个人或企业提供便利。',
					},
					{
						serviceIcon:'fa-handshake-o',
						serviceTitle:'商业合作',
						serviceContent:'你提idea,我来实现',
					},
					
				]
			}
		},
		methods:{
			getOffsetTop(){
				var dom=document.getElementById('contact');
				// window.scrollTo({top:dom.offsetTop, behavior: "smooth"});
				animateScroll(dom,100)
			}
		}
	}
</script>
<style scoped>
	#services{
			background-color:rgb(27,36,47);
			min-height: 580px;
			width: 100%;
			position: relative;
		}
		.services-content{
			margin-top:3rem;
		}
		.services-content ul{
			margin:2rem auto;
			max-width: 1200px;
			font-size: 0;
		}
		
		.service-icon{
			vertical-align: middle;
			display: inline-block;
			width: 30%;
		}
		.service-icon>i{
			display: block;
			width: 80px;
			height: 80px;
			font-size:1.5rem;
			color:#00a78e;
			line-height: 80px;
			text-align: center;
			background: #fff;
			border-radius: 50%;
			transition: all 800ms ease-out;
		}
		.service-icon:hover i{
			background-color:#00a78e;
			color:#fff;
		}
		.service-content{
			vertical-align: middle;
			width: 70%;
			display: inline-block;
		}
		.service-content>h6{
			font-size:1.5rem;
			color:#00a78e;
		}
		.service-content>span{
			font-size:1rem;
			color:rgb(74,84,98);
		}
		@media screen and (min-width: 760px){
		.services-content li{
					display: inline-block;
					width: 50%;
					color:#fff;
					font-size:0;
					box-sizing: border-box;
					padding: 2rem;
				}
		}
		@media screen and (max-width: 759px){
			.services-content li{
			display: inline-block;
			width:100%;
			color:#fff;
			font-size:0;
			box-sizing: border-box;
			padding: 2rem;
		}
		}
</style>