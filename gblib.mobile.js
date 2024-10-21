/// <reference path="mainsimple.js" />

class MLogger {
    log = function (message) {
        console.log("[gblib.mobile=>LOGGING] " + message);
    }
    error = function (message) {
        console.error("[gblib.mobile=>ERROR] " + message);
    }
    debug = function (message) {
        console.log("[gblib.mobile=>DEBUG] " + message);
    }
    warn = function (message) {
        console.warn("[gblib.mobile=>WARNING] " + message);
    }
    info = function (message) {
        console.info("[gblib.mobile=>INFO] " + message);
    }
}

class Mobile {
    static deb = function() {
		if (debug) {
			return true;
		}else{
			return false;
		}
	}
    constructor() {
        this.l = new MLogger();
        if(new BrowserDetect().isMobile()) {
            this.l.info("isMobile: yes");
            this.container = document.body;
        }else{
            this.l.info("isMobile: no");
            this.container = new Div();
            this.container.setStyle("width: 428px;height:926px;background-color:black");
        }
        this.draw = new Div();

        if(this.container.getAPI() == null) {
            this.container.append(this.draw.getAPI());
        }else{
            this.info = new H("2");
            this.info.setText("Mobile View: iPhone 12 Pro Max");
            this.info.setStyle("margin-left: auto;margin-right: 0");
            this.info.create();
            this.container.getAPI().append(this.draw.getAPI());
            this.container.create();
        }
    }
}