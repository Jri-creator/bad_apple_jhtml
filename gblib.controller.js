var deb = false;
if(debug) {
    deb = debug;
}

class LCLogger {
    log = function(message) {
		console.log("[gblib.controller=>LOGGING] " + message);
	}
	error = function(message) {
		console.error("[gblib.controller=>ERROR] " + message);
	}
	debug = function(message) {
		console.log("[gblib.controller=>DEBUG] " + message);
	}
	warn = function(message) {
		console.warn("[gblib.controller=>WARNING] " + message);
	}
	info = function(message) {
		console.info("[gblib.controller=>INFO] " + message);
	}
}

class Controller {
    constructor() {
        new LCLogger().info("libController under heavy development");
        if(deb) {
            new LCLogger().debug("Registering event handlers for controller");
        }
        window.addEventListener("gamepadconnected", (e) => {
            console.log(e);
            this.INTERNALconnect();
        });
        window.addEventListener("gamepaddisconnected", (e) => {
            this.INTERNALdisconnect();
        });
    }
    getControllers = function() {

    }
    addPressKeyOnControllerMessage = function(to, styling) {
        var container = new Div();
        container
    }
    INTERNALconnect = function() {
        if(deb) {
            new LCLogger().debug("Controller connected");
        }

    }
    INTERNALdisconnect = function() {
        if(deb) {
            new LCLogger().debug("Controller disconnected");
        }
    }
}