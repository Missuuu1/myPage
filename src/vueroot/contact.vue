<template>
	<div id="contact">
		<Title v-bind:headerFour="'contact me'" v-bind:headerThree="'contact way'" v-bind:color="'#fff'"></Title>
		<div class="contact-content">
			<div class="contact-left">
				<ul>
					<li v-for="item in contactLeft">
						<i class="fa" :class="item.faClass"></i>
						<h4>{{item.title}}</h4>
						<p v-html="item.pContent">	
						</p>
					</li>
					
				</ul>
			</div>
			<div class="contact-right">
				<form id="form">
					<input type="text" v-model="userName" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Name';}" >
					<input type="text" v-model="userEmail" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Email';}" >					
					<input type="text" v-model="userMobile" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Mobile number';}" >
					<textarea v-model="userMessage" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Message';}" >
					</textarea>
					<input style="cursor:pointer;" id="send" type='button' value="Send" @click="sendEmail()">
				</form>
			</div>
		</div>
		<div class="aboutThis">
			<ul>
				<li v-for='item in aboutThis'>
					<a class="fa" :class="item.faClass" :href="item.href" style="color:#fff"></a>
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
				userName:'Name',
				userEmail:'Email',
				userMobile:'Mobile number',
				userMessage:'Message',
				messageBox:'发送成功,近期会给你回复!',
				time:60,
				contactLeft:[
					{
						faClass:'fa-envelope',
						title:'Contact By Email',
						pContent:'Mail:<a style="color:#00a78e" href="mailto:wb05352022@163.com">wb05352022@163.com</a>'
					},
					{
							faClass:'fa-phone',
						title:'Contact By Phone',
						pContent:'Phone:<span style="cursor:pointer;color:#00a78e">13905455676</span>'
					},
					{
						faClass:'fa-home',
						title:'Contact By Home',
						pContent:'Address:<span style="cursor:pointer;color:#00a78e">沈阳理工大学</span>'
					}
				],
				aboutThis:[
					{
						faClass:'fa-github',
						href:'https://github.com/'
					},
					{
						faClass:'fa-book',
						href:'https://www.jianshu.com/'
					},
					{
						faClass:'fa-codepen',
						href:'https://juejin.im/'
					}
				]
			}
		},
		computed:{
			getData(){
				var data='name='+this.userName+"&email="+this.userEmail+"&mobile="+this.userMobile+"&message="+this.userMessage;
				return data;
			}
		},
		methods:{
			sendEmail(){
				document.getElementById('send').disabled=true;
				this.resetButton();
				var formdata=new FormData();
				formdata.append('name',this.userName);
				formdata.append('email',this.userEmail);
				formdata.append('mobile',this.userMobile);
				formdata.append('message',this.userMessage);
				var xhr=new XMLHttpRequest();
				xhr.open('post','',true);
				xhr.send(formdata);
				xhr.onreadystatechange=function(){
					if(xhr.readyState==4){
						if(xhr.status==200){
							if(xhr.responseText=='ok'){
								document.getElementById('messageBox').style="top:10px";
								setTimeout(function(){
									document.getElementById('messageBox').style="";
								},5000);
								this.userName='Name';
								this.userEmail='Email';
								this.userMobile='Mobile number';
								this.Message='Message';
							}
						}
					}
				}
			},
			resetButton(){
				var _this=this;
				var time=setInterval(function(){
					if(_this.time>0){
						_this.time--;
						document.getElementById('send').value=_this.time+'s';
					}
					else{
						document.getElementById('send').disabled=false;
						document.getElementById('send').value="Send";
						_this.time=60;
						clearInterval(time);
					}
				},1000)
			}
		}
	}
</script>
<style scoped>

	#contact{
			width: 100%;
			min-height: 580px;
			background:rgb(4,4,4) url('') 0 0/cover;
			padding: 2rem;
			box-sizing: border-box;
			font-size: 1rem;
		}
		.contact-content{
			font-size:0;
			max-width: 1000px;
			width:100%;
			margin:1rem auto;
		}

		
		.contact-left li{
			font-size: 1rem;
			display: block;
			width: 100%;
			height: 190px;
			box-sizing: border-box;
			padding: 3rem 2rem 2rem;
			background-color:rgb(255,255,255);
			border-bottom: 1px solid #ddd;
			text-align: center;
		}
		.contact-left li:hover{
			background-color:rgb(244,244,244);
		}
		.contact-left h4{
			font-weight: normal;
			margin:.5rem 0;
		}
		.contact-left i{
			font-size:2rem;
			color:#00a78e;
		}
		.contact-left a{
			color:#00a78e;
			cursor: pointer;
		}
		.contact-left p{
			color:#777;
		}

		input[type='text']{
			display: block;
			box-sizing: border-box;
			margin:1rem 0;
			width: 100%;
			outline: none;
			height:63px;
			padding: 1rem;
			 font-family: 'Open Sans', sans-serif;
			border:.1rem solid #00a78e;
			color:#777;
		}
		textarea{
			 font-family: 'Open Sans', sans-serif;
			box-sizing: border-box;
			width: 100%;
			outline: none;
			height:230px;
			padding: 1rem;
			border:.1rem solid #00a78e;
			resize: none;
			color:#777;
		}
		input[type='button']{
			margin-top:10px;
			border: none;
		    outline: none;
		    color: #fff;
		    background: #212322;
		    font-size: 16px;
		    padding: 13px 40px;
		    transition: all 800ms ease;
		}
		input[type='button']:hover{
			background-color: #00a78e;
		}
		.aboutThis>ul{
			width: 100%;
			max-width: 1000px;
			text-align: center;
			height: 50px;
			margin:3rem auto;
		}
		.aboutThis li{
			display: inline-block;
			width: 30px;
			height: 30px;
			color:#fff;
			line-height:30px;
			font-size: 1.5rem;
			text-align: center;
			border:.2rem solid #fff;
			transform: rotate(45deg);
			margin:0 1rem;
			transition:all 800ms ease;
		}
		.aboutThis li:hover{
			border-color: #00a78e;
		}
		.aboutThis li a{
			transform: rotate(-45deg);
		}
		@media screen and (min-width: 760px){
			.contact-left,.contact-right{
				vertical-align: top;
				display: inline-block;
				width: 50%;
				height: 570px;
				box-sizing: border-box;
			}
			.contact-left>ul{
			padding: 0 .5rem;
			}
			.contact-right form{
				background-color:rgb(255,255,255);
				padding: 1rem;
				margin-left: .5rem;
				box-sizing: border-box;
			}
		}
		@media screen and (max-width: 759px){
			.contact-left,.contact-right{
				vertical-align: top;
				display: inline-block;
				width: 100%;
				height: 570px;
				box-sizing: border-box;
			}
			.contact-right form{
				margin-top:1rem;
				background-color:rgb(255,255,255);
				padding: 1rem;
				box-sizing: border-box;
			}
		}
</style>