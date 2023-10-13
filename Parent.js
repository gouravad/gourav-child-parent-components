

const parent=  {
	data() {
		return { 
			fontSize:20,
			color:'none',
		};
	}, 
	methods: {
		increaseFont(){
			this.fontSize+=1;
		},
		decreaseFont(){
			this.fontSize-=1;
		},

		changeColor(clr){
			this.color=clr;
		}
	},
	template: `<div style="border:2px solid black">
		<h1>Hey You are viewring the Parent components demo</h1>
		<button @click="decreaseFont">decrease Font Size</button>
		<span>{{fontSize}}px</h1>
		<button @click="increaseFont">Increase Font Size</button> 
		<h1>Present Color = <span> Color</span> is {{color}}</h1>  
		<child :fontSize="fontSize" @changeColor="changeColor($event)" :color="color" ></child>
	</div>
	
	
	`,
 
};
 
 