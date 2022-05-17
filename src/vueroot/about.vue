<template>
	<div id="about">
		<div class="about_right">
					<div id="messageContent" class="message-content">
						<ul>
						<li v-for='item in aboutMe' :style="{width:size+'px'}">
							<div class="container">
								<h1>{{item.title}}</h1>
								<div class='content'>{{item.content}}</div>
								<ul class="dosomething">
									<li v-for="doWhat in item.dosomething"  @click="getOffsetTop(doWhat)">
										<a >{{doWhat}}</a>
									</li>
								</ul>
							</div>
						</li>
						</ul>
					</div>
					<div class="message-button">
						<ul id="messageButton">
							<li v-for="(item,index) in aboutMe" :data-index='index' @click='turnIndex(index)' :class="index==0?'active':''">
								
							</li>
						</ul>
					</div>
		</div>
		<div class="about_left">
		</div>
	</div>
</template>
<script>
	export default {
		data(){
				return{
				size:760,
				nowIndex:0,
				timeOut:null,
				aboutMe:[
					{
						title:'我是王彬！',
						content:'来自山东的我，于2019年9月入读沈阳理工大学计算机科学与技术专业。2019年10月自学photoshop，同年11月，开始自学前端，2017年10月完成自己的首个项目--我的个人主页2017版本。自此方向确定为前端开发以及全栈开发。',
						dosomething:[
							'MyWork','Hire Me'
						]
					},
					{
						title:'为何选择前端？',
						content:'我总是喜欢思考问题，当意识到手机一些页面比app更流畅的时候就很想去了解原理。越深入，便觉得前端发展空间很大，不仅可以实现动态界面，而且还可以不依赖falsh实现游戏，甚至3D游戏。前端的魅力太多，以至于无法一一列举。',
						dosomething:[
							'MyWork','Hire Me'
						]
					},
					{
						title:'未来规划？',
						content:'尽可能快的学习已有技术，多写插件，等到技术成熟便开始制作框架。如果还有时间的话，会尝试学习后台技术，以及和认识的设计师多多交流，提升审美，成为一个全栈工程师。最后，通过学习的技术，自制一个游戏。不过这是比较远的目标，当前的目标当然是好好工作，多认识一些大神，多探讨问题。',
						dosomething:[
							'MyWork','Hire Me'
						]
					},
				]
			}
		},
		methods:{
				turnIndex(index){
					index=index<this.aboutMe.length?index:0;
					this.nowIndex=index;
					var changeSize=window.innerWidth>760?window.innerWidth/2:window.innerWidth;
					Array.prototype.forEach.call(document.getElementById('messageButton').getElementsByTagName('li'),function(item,nindex){
						nindex!=index?item.classList.remove('active'):item.classList.add('active');			
					});
					if(window.innerWidth>760)
					document.getElementById('messageContent').style='transform: translate3d('+(-(index-1))*(changeSize)+'px, 0px, 0px);';
					else{
						document.getElementById('messageContent').style='transform: translate3d('+(-(index))*(changeSize)+'px, 0px, 0px);';
					}
					clearTimeout(this.timeOut);
					this.timeOut=setTimeout(this.nowIndexAdd,7000);
				},
				nowIndexAdd(){
					if(this.nowIndex<this.aboutMe.length){
						this.turnIndex(this.nowIndex+1);
					}
					else{
						this.turnIndex(0);
					}
				
				},
				init(){
					this.size=window.innerWidth>760?window.innerWidth/2:window.innerWidth;
					var changeSize=window.innerWidth>760?window.innerWidth/2:window.innerWidth;
					if(window.innerWidth>760)
					document.getElementById('messageContent').style='transform: translate3d('+(-(this.nowIndex-1))*(changeSize)+'px, 0px, 0px);';
					else{
						document.getElementById('messageContent').style='transform: translate3d('+(-(this.nowIndex))*(changeSize)+'px, 0px, 0px);';
					}
				},
				getOffsetTop(text){
					if(text=='MyWork')
						text='works';
					else
						text='contact';
					text=text.toLowerCase();
					var dom=document.getElementById(text);				
					animateScroll(dom,100)
				}
		},
		mounted:function(){
			window.onresize=this.init;
			this.init();
			this.timeOut=setTimeout(this.nowIndexAdd,7000);
		}

	}
</script>
<style scoped>
	#about{
			width: 100%;
			position: relative;
			font-size:0;
			overflow:hidden;
			min-height: 580px;
		}
	
		.message-content{
			position: absolute;
			top:0;
			bottom: 0;
			width: 4650px;
			transition: all 800ms ease 0s; 
			
		}
		.message-content>h1{
			color: #191919;
    		font-size: 2em;
		}
		.message-content .content{
			color: #666666;
		    font-size: 1em;
		    line-height: 2em;
		    margin-top: 1.5em;
		}
		.message-content>ul{
			height: 100%;
		}
		.message-content>ul>li{
			box-sizing: border-box;
			position: relative;
			font-size:16px;
			display: inline-block;
			height: 100%;
		}
		.container{
			position: absolute;
			top:50%;
			left: 100px;
			padding-right: 2em;
			transform: translateY(-50%);
			max-width: 560px;
		}
		.dosomething{
		    margin: 3em 0 0 0;
    		padding: 0;
		}
		.dosomething>li{
			display: inline-block;
			margin:1em;
			padding: 0.6em 2em;
		    font-size: 1.2em;
		    color: #00a78e;
		    border: 2px solid #00a78e;
		    text-decoration: none;
		    border-radius: 1.5em;
		    cursor:pointer;
		}
		.dosomething>li:hover{
			background: #00a78e;
		    border-radius: 1.5em;
		}
		.dosomething a{
			color: #00a78e;
		}
		.dosomething>li:hover a,.dosomething a:hover{
			 color: #FFF;
		}
		
		
		.message-button>ul>li{
			background-color:#000;
			width: 12px;
			height: 12px;
			margin: 4px;
			border-radius: 50%;
		}
		#messageButton .active{
			background-color:rgb(0,167,142);
		}
	@media screen and (min-width: 760px){
		.about_left{
			position: absolute;
			display: inline-block;
			width: 50%;
			background: rgb(244,244,244) url('../images/about-pic.jpg') 0 0/cover;
			min-height: 580px;
		}
		.about_right{
			position: absolute;
			left: 0;
			right: 0;
			top:0;
			bottom: 0;
			vertical-align: top;
			display: inline-block;
			background-color:rgb(244,244,244);
			
		}
		.message-button>ul{
			position: absolute;
			cursor: pointer;
			width: 12px;
			left:53%;
			top:50%;
			transform: translateY(-50%);
		}
	}
	@media screen and (max-width: 759px){
			.about_left{
			display: none;
		}
		.about_right{
			position: absolute;
			left: 0;
			right: 0;
			top:0;
			bottom: 0;
			vertical-align: top;
			display: inline-block;
			background-color:rgb(244,244,244);
			
		}
		.message-button>ul{
			position: absolute;
			cursor: pointer;
			width: 12px;
			left:3%;
			top:50%;
			transform: translateY(-50%);
		}
		.dosomething{
			margin:0;
		}
		.dosomething>li{
			padding: .5rem .5rem;
		    font-size:.8rem;
		}
	}
</style>