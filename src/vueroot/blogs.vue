<template>
	
		<div id="blogs" :style="{height:(blogList.length+1)*300+'px'}">
			<Title v-bind:headerFour="'blogs'" v-bind:headerThree="'blogs'" v-bind:color="'#000'"></Title>
			<ul>
				<li v-for="(item,index) in blogList">
					<div class="imgArea" :style="{backgroundColor:item.color,float:index%2==0?'left':'right'}">
						<i class="fa" :class="item.faClass"></i>
					</div>
					<div class="textArea" :style="{float:index%2==0?'right':'left'}">
						<h2>{{item.title}}</h2>
						<p>{{item.content}}</p>
						<a class="goto" :href="item.href" target="_blank">Go To >></a>
					</div>
				</li>
			</ul>
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
				blogList:[
					{
						faClass:'fa-github',
						title:'github',
						color:'#000',
						content:'2019年开始接触github，每次做项目都会同步到github上。最近开启了插件制作项目，都是在项目完成过程中，可以复用的功能模块，然后封装成插件。',
						href:'https://github.com/'
					},
					{
						faClass:'fa-book',
						color:'rgb(234,111,90)',
						title:'简书',
						content:'2019年开始接触简书，使用简书阅读文章，努力地牢固自己的知识。',
						href:'https://www.jianshu.com/'

					},
					{
						faClass:'fa-codepen',
						color:'rgb(0,127,255)',
						title:'掘金',
						content:'2019年开始接触掘金，丰富和充实自己。',
						href:'https://juejin.im/'
					},
				]
			}
		}
	}
</script>
<style scoped>
		#blogs{
			background-color:#fff;
			min-height: 580px;
			margin:1rem 0;
		}
		#blogs>ul{
			font-size:0;
			max-width: 1000px;
			width: 100%;
			margin:0 auto;
		}
		#blogs li{
			position: relative;
		}
		#blogs li::after{
			content: '';
			clear: both;
		}
		.imgArea,.textArea{
			vertical-align: top;
			display:inline-block;
			width: 50%;
			height:300px;
			margin-top:2rem;
			background-color:rgb(244,244,244);
		}
		.imgArea{
			font-size:10rem;
			box-sizing: border-box;
			text-align: center;
			line-height: 300px;
			color:#fff;
			background-color:#000;
			border:1px solid #fff;
		}
		.textArea{
			box-sizing: border-box;
			position: relative;
			padding: 2rem 1rem;
			color:#777;
			font-size:1rem;
		}
		.textArea h2{
			color:#00a78e;
			margin-bottom: 1rem;
			text-transform: uppercase;
		}
		.textArea p{
			font-size:.8rem;
		}
		.textArea .goto{
			position: absolute;
			bottom: 3rem;
		 	padding: 0.5rem 1.5rem;
		    font-size: 1rem;
		    color: #00a78e;
		    border: 2px solid #00a78e;
		    text-decoration: none;
		    border-radius: 1.5rem;
		    transition: all 600ms ease;
		}
		.textArea .goto:hover{
			background-color:#00a78e;
			color:#fff;
		}
		@media screen and (max-width: 760px){
			.textArea .goto{
				bottom: 1rem;
			}
		}
</style>