var waypoint = new Waypoint({
	element: document.getElementById("about"),
	handler: function(direction){
		if(direction === 'down'){
			document.getElementById('testing').innerHTML = 'testing';
			console.log(this.triggerPoint);
			console.log(this)
		}else {
			document.getElementById('testing').innerHTML = 'text';
		}
	}
})
