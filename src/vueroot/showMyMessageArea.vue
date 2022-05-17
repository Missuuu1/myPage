<template>
	<div id="showMessageTable">
		<div id="textArea">
			<h1>Hi!</h1>
			<h6>Front-end development engineer</h6>
			<ul>
			<li v-for="(item,index) in messageTable">
				<b class="key">{{item.key}}</b>
				<span class="value">{{item.value}}</span>
			</li>
			</ul>
		</div>
		<div id="imgArea">
			<img id="myphoto" src="../images/OIP-C.jpg" width="300px" />
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				messageTable:[
					{
						key:'name',
						value:'王彬'
					},
					{
						key:'D.O.B',
						value:'2000-09-08'
					},
					{
						key:'phone',
						value:'139-0545-5676'
					},
					{
						key:'school',
						value:'沈阳理工大学'
					},
					{
						key:'e-mail',
						value:'wb05352022@163.com'
					},
					{
						key:'website',
						value:'www.meiyougushi.xyz'
					}
				]	
			}
		}
	}
</script>
<style scoped> 
		
		#showMessageTable::after{
			content:'';
			clear:both;
		}
		#showMessageTable{
			font-size:0;
			background:rgba(0,0,0,.5);
			width: 100%;
			max-width: 1200px;
			margin:4rem auto 1rem;
		}

		#textArea h1{
			margin: 0.5em 0 0;
    		font-weight: bold;
			font-size: 1.2em;
		    color: #FFF;
		    background: #00a78e;
		    display: inline-block;
		    padding: .5em 1.7em;
		    position: relative;
		    box-shadow: 0 8px 17px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
		}
		#textArea h1:before {
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
		#textArea h6 {
		    font-size: 1em;
		    color: #C7C7C7;
		    margin-top: 0.8em;
		    letter-spacing: 3px;
		    /* text-transform: uppercase; */
		}
		#textArea b{
			display: inline-block;
			width: 100px;
		}
		#textArea ul{
			margin-top: 2em;
		    border-top: 1px solid #AFAFAF;
		    padding-top: 0.5em;
		}
		#textArea li{
			padding: .5em 0;
		}

		#imgArea>img{
			position: absolute;
			top:50%;
			left:50%;
			transform:translateY(-50%) translateX(-50%);
		}
		@media screen and (min-width: 760px){
			#textArea{
				box-sizing:border-box;
				padding: 3em;
				font-size:16px;
				color:#fff;
				display: inline-block;
				width: 50%;
				text-transform: uppercase;
			}
			#imgArea{
				box-sizing: border-box;
				position: relative;
				padding: 20%;
				display: inline-block;
				width: 50%;
				vertical-align: top;
				min-height: 400px;
			}
		}
		@media screen and (max-width: 759px){
			#textArea{
				box-sizing:border-box;
				padding: 3em;
				font-size:16px;
				color:#fff;
				display: inline-block;
				width: 100%;
				text-transform: uppercase;
			}
			#imgArea{
				box-sizing: border-box;
				position: relative;
				padding: 20%;
				display: inline-block;
				width: 100%;
				vertical-align: top;
				min-height: 400px;
			}
		}
</style>