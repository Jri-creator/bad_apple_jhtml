var deb = false;
if(debug) {
    deb = debug;
}
class LWLogger {
    log = function(message) {
		console.log("[gblib.widgets=>LOGGING] " + message);
	}
	error = function(message) {
		console.error("[gblib.widgets=>ERROR] " + message);
	}
	debug = function(message) {
		console.log("[gblib.widgets=>DEBUG] " + message);
	}
	warn = function(message) {
		console.warn("[gblib.widgets=>WARNING] " + message);
	}
	info = function(message) {
		console.info("[gblib.widgets=>INFO] " + message);
	}
}
Window = class {
    constructor(width, height) {
        this.windowcontainer = new Div();
        this.id = "Window" + Math.random();
        this.windowcontainer.setId(this.id);
        this.windowcontainer.setClass("window");
        this.title = new A();
        this.title.setText("Window");
        this.title.setStyle("margin-left:" + (width/3) + "px")
        this.space = new Hr();
        this.space.setStyle("width:" + width + "px");
        this.windowcontainer.getAPI().append(this.title.getAPI());
        this.windowcontainer.getAPI().append(this.space.getAPI());
        this.height = height;
        this.width = width;
        document.head.innerHTML+="<style>.window {border:1px solid black;background-color:grey;color:white;width:" + width + "px;height:" + height + "px}</style>";
    }
    addWidget = function(widgetclass) {
        if(widgetclass.type=="Widget") {
            this.windowcontainer.getAPI().append(widgetclass.getAPI());
        }else{
            new LWLogger().error("'" + widgetclass.constructor.name + "' is not a widget")
        }
    }
    create = function() {
        this.windowcontainer.create();
    }
}
class Widget {
    constructor() {
        new LWLogger().warn("LibWidget is under heavy construction");
    }
    Kachel = class {
        constructor() {
            this.kachel = new Div();
            document.head.innerHTML+=".kachelcontainer {}"
        }
    }
    Button = class {
        constructor() {
            this.type = "Widget";
            this.widgetelement = new Button();
            this.widgetelement.setClass("button");
            document.head.innerHTML+="<style>.button {border-radius:0px;margin-left:+2px} .button:hover {background-color:black;color:white}</style>";
        }
        getComponent = function() {
            return this.widgetelement;
        }
        getAPI = function() {
            return this.widgetelement.getAPI();
        }
    }
}
