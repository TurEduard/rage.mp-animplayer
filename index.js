mp.events.add({
	animationEvent:(player, toggle, dirt, name, flag)=>{
		if(!toggle) player.stopAnimation();
		else player.playAnimation(dirt.toString(), name.toString(), 2, flag);
	},
	playerCommand:(player, command)=>{
		const args = command.split(/[ ]+/);
		const commandName = args.splice(0, 1)[0];
		switch(commandName){
			case 'animplayer': 
				if(args[0] != undefined && args[0].length){
					if(args[0].match(/^[-\+]?\d+/) !== null){
						let name = (args[1] != undefined && args[1].match(/^[-\+]?\d+/) !== null) ? parseInt(args[1]) : false;
						player.call('findAnim', [parseInt(args[0]), name]); 
					} else player.call('createAnimList', [args[0]]); 
					
				} else player.outputChatBox("Current command: /animplayer [request/dist/dist&name]");
				break;
			case 'animflag':
				if(args[0].match(/^[-\+]?\d+/) !== null) player.call('animFlag', [parseInt(args[0])]);
				else if(args[0] == 'up' || args[0] == 'down') player.call('animFlag', [args[0]]);
				else player.outputChatBox("Current command: /animflag [up/down]");
			break;
		}
	}
});