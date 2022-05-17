<template>
	<div id="navtool">
		<div id="pcTool">
			<ul>
				<li v-for="(item,index) in navitems"><a :class="index==0?'active':''" :data-hover="item.text"  @click="getOffsetTop(item.text)">{{item.text}}</a></li>
			</ul>
		</div>
		<div id="mobileTool">
			<span class="fa fa-bars"  @click="toggleList()"></span>
			<ul id='mobileToolList' style="height:0px">
				<li v-for="(item,index) in navitems"><a :class="index==0?'active':''" :data-hover="item.text"  @click="getMobileOffsetTop(item.text)">{{item.text}}</a></li>
			</ul>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				height:0,
				navitems:[
					{href:"#home",text:"Home"},
					{href:"#about",text:"About"},
					{href:"#services",text:"Services"},
					{href:"#experience",text:"Experience"},
					{href:"#works",text:"Works"},
					{href:"#blogs",text:"Blogs"},
					{href:"#contact",text:"Contact"}
				]
			}
		},
		methods:{
			getOffsetTop(text){
				text=text.toLowerCase();
				var dom=document.getElementById(text);
				// window.scrollTo({top:dom.offsetTop, behavior: "smooth"});
				animateScroll(dom,100);
				dom.scrollIntoView(true);
				
			},
			getMobileOffsetTop(text){
				text=text.toLowerCase();
				var dom=document.getElementById(text);
				// window.scrollTo({top:dom.offsetTop, behavior: "smooth"});
				animateScroll(dom,100);
				document.getElementById('mobileToolList').style='';
			},
			toggleList(){
				this.height=this.height==0?350:0;
				document.getElementById('mobileToolList').style="height:"+this.height+'px';
			}
		}
	}
</script>
<style scoped>
			
		
		@media screen and (min-width: 760px){
			a{
				text-decoration: none;
			}
			a:link,a:visited,a:hover,a:active{
				color:#000;
			}	
			#mobileTool{
				display: none;

			}
			#pcTool ul{
			}
			#pcTool li{
				margin:0 1.5em;
				display: inline-block;
				list-style-type:none;
				cursor: pointer;
			}
			#pcTool li a{
				position: relative;
				display: block;
				width: 100%;
				text-align: center;
				color:rgb(255,255,255);
				text-transform: uppercase;
			}
			#pcTool li a::before {
			    position: absolute;
			    top: 0;
			    left: 0;
			    overflow: hidden;
			    max-width: 0;
			    border-bottom: 3px solid #00a78e;
			    color: #00a78e;
			    content: attr(data-hover);
			    -moz-transition: max-width 0.5s;
			    transition: max-width 0.5s;
			}
			#pcTool li a:hover::before{
				max-width: 100%;
			}
			.active{
				color:rgb(0,167,142) !important;
			};
		}
		@media screen and (max-width: 759px){
			a:link,a:visited,a:hover,a:active{
				color:#00a78e;
			}	
			#pcTool{
				display: none;
			}
			#mobileTool span{
				position: absolute;
				top:50px;
				right: 22px;
				font-size:2rem;
				color:#00a78e;
			}
			#mobileTool ul{
				position: absolute;
				width: 100%;
				box-sizing: border-box;
				padding: 0 .2rem;
				top:100px;
				left: 0;
				z-index: 1;
				background-color:rgb(27,26,26);
				height: 0;
				overflow: hidden;
				transition: all 800ms ease;
			}
			#mobileTool li{
				height: 50px;	
				line-height: 50px;
				font-size:1rem;
				color:#fff;
				text-align: center;
			}
			#mobileTool a{

			}
			.active{
				color:rgb(0,167,142) !important;
			};
		}
</style>
