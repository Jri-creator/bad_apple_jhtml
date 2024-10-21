//Dont call anything with 'INTERNALPL' in their names
var deb = false;
if(debug) {
	deb = debug;
}
class LPLogger {
    log = function(message) {
		console.log("[gblib.player=>LOGGING] " + message);
	}
	error = function(message) {
		console.error("[gblib.player=>ERROR] " + message);
	}
	debug = function(message) {
		console.log("[gblib.player=>DEBUG] " + message);
	}
	warn = function(message) {
		console.warn("[gblib.player=>WARNING] " + message);
	}
	info = function(message) {
		console.info("[gblib.player=>INFO] " + message);
	}
}
class LibPlayer {
    constructor(at, id, url, width, height) {
        if(deb) {
            new LPLogger().debug("Try to create media player at: '" + at + "'");
        }
		this.width = width;
		this.height = height;
		this.url = url;
		this.at = at;
		this.id = id;
		if(navigator.userAgent.toString().toLowerCase().includes("firefox")) {
			this.INTERNALcreate();
		}else{
			this.id = this.id + Math.random();
			this.container = new Div();
			this.container.setId(this.id);
			this.info = new H("2");
			this.info.setText("Chrome not supported");
			this.container.getAPI().append(this.info.getAPI());
			this.container.create(this.at);
			new LPLogger().error("Chrome not supported");
		}
    }
	INTERNALpopulate = function() {
		var media = new Multimedia();
		var legacy = new media.Legacy();
		this.id = this.at + Math.random();
		this.container = new Div();
		this.container.setId(this.id);
		this.playercontainer = new Div();
		this.playercontainer.setId(this.id + "player");
		this.player = new legacy.Video(this.url);
		this.player.setWidth(this.width);
		this.player.setHeight(this.height);
		this.playercontainer.getAPI().append(this.player.getAPI());
		this.playercontrolscontainer = new Div();
		this.playercontrolscontainer.setId(this.id + "controls");
		this.playercontrolscontainer.setStyle("background-color:grey;margin-top:-78px;width:" + this.width + "px");
		this.container.getAPI().append(this.playercontainer.getAPI());
		this.container.getAPI().append(this.playercontrolscontainer.getAPI());
		this.container.create(this.at);
		this.playing = false;
		var h = this.height;
		var w = this.width;
		var player = this.player;
		var playercontrolscontainer = this.playercontrolscontainer;
		var populatecontrols = setInterval(function () {
			if(player.getAPI().duration!="NaN") {
				this.playpause = new Image("http://werwolf2303.de/GBLib/moduleassets/play.png");
				this.playpause.setHeight("38px");
				var playpause = this.playpause;
				this.playpause.getAPI().addEventListener("click", function() {
					if(this.playing) {
						this.playing = false;
						playpause.setSrc("http://werwolf2303.de/GBLib/moduleassets/pause.png");
						player.getAPI().play();
					}else{
						this.playing = true;
						playpause.setSrc("http://werwolf2303.de/GBLib/moduleassets/play.png");
						player.getAPI().pause();
					}
				});
				this.seek = new Input();
				this.seek.setType("range");
				this.seek.setMax(player.getAPI().duration);
				this.seek.setMin("0");
				this.volumeimage = new Image("http://werwolf2303.de/GBLib/moduleassets/volume.png");
				this.volumeimage.setHeight("38px");
				this.volume = new Input();
				this.volume.setType("range");
				this.volume.setMax("10");
				this.volume.setMin("0");
				this.volume.setStyle("width:80px");
				this.fullscreen = new Image("http://werwolf2303.de/GBLib/moduleassets/fullscreen.png");
				this.fullscreen.getAPI().addEventListener("click", function() {
					player.getAPI().requestFullscreen();
				});
				this.fullscreen.setHeight("38");
				var volume = this.volume;
				playercontrolscontainer.getAPI().append(this.playpause.getAPI());
				playercontrolscontainer.getAPI().append(this.seek.getAPI());
				playercontrolscontainer.getAPI().append(this.volumeimage.getAPI());
				playercontrolscontainer.getAPI().append(this.volume.getAPI());
				playercontrolscontainer.getAPI().append(this.fullscreen.getAPI());
				var seeking = false;
				var seek = this.seek;
				this.volume.getAPI().addEventListener("change", function() {
					player.getAPI().volume = volume.getAPI().value/10;
				});
				this.seek.getAPI().addEventListener("change", function() {
					seeking = true;
					player.getAPI().currentTime = seek.getAPI().value;
					seeking = false;
				});
				setInterval(function() {
					if(!seeking) {
						this.seek.getAPI().value=player.getAPI().currentTime;
					}
				}, 1000);
				clearInterval(populatecontrols);
			}
		}, 1000);
	}
	INTERNALonFullscreen = function() {

	}
	INTERNALcreate = function() {
		this.INTERNALpopulate();

	}
	getPlayer = function() {
		return this.playercontainer;
	}
	getContainer = function() {
		return this.container;
	}
}