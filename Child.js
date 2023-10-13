
const child= {
    data() {
		return { 
			color:'none',
		};
	}, 
    props: ['fontSize','color'],
    methods: {
        colorchng(clr)
        {
          this.$emit('changeColor',clr)
        },
         
    }, 
	template: `<div style="border:2px solid black">
		<h1>hey   You are viewing the Child</h1>
        
		<h1  :style="{fontSize:fontSize +'px',color:color}  ">Hello  World fontSize is = {{fontSize}}px</h1>
        
        <button  @click="colorchng('blue')">Blue </button> 
        <button @click="colorchng('green')">Green</button> 
        <h1 :style="{color:color}">{{color}}</h1>
	</div>`,
 
};

//:style="{color:color}

 
