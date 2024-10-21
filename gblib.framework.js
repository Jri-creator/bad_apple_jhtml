class Framework {
	//Dont call anything with 'INTERNALFW' in their names
	static deb = function() {
		if (debug) {
			return true;
		}else{
			return false;
		}
	}
	static FWLogger = class {
		log = function (message) {
			console.log("[gblib.framework=>LOGGING] " + message);
		}
		error = function (message) {
			console.error("[gblib.framework=>ERROR] " + message);
		}
		debug = function (message) {
			console.log("[gblib.framework=>DEBUG] " + message);
		}
		warn = function (message) {
			console.warn("[gblib.framework=>WARNING] " + message);
		}
		info = function (message) {
			console.info("[gblib.framework=>INFO] " + message);
		}
	}
	constructor() {
		addStyle("http://werwolf2303.de/GBLib/gblib.framework.css");
	}
	FWButton = class {
		constructor(text) {
			this.logger = new Framework.FWLogger();
			this.button = new Button();
			this.button.setText(text);
			var button = this.button;
			this.button.getAPI().onmouseover = function(e) {
				button.getAPI().style.backgroundColor="white";
			}
			this.button.getAPI().onmouseout = function(e) {
				button.getAPI().style.backgroundColor=document.body.style.backgroundColor;
			}
			this.button.getAPI().onclick = function(e) {
				button.getAPI().style.backgroundColor="grey";
			}
			this.button.getAPI().setAttribute("class", "FWButton");
		}
		getAPI = function() {
			return this.button.getAPI(); //I'm to lazy to implement all functions from scratch ;)
		}
		create = function(id) {
			if(id!=null) {
				document.getElementById(id).append(this.button.getAPI());
			}else{
				document.body.append(this.button.getAPI());
			}
		}
	}
	FWTable = class {
		constructor(rows, ...name) {
			this.table = new Table();
			this.thead = new THead();
			this.theadtr = new Tr();
			if(name.length>rows) {
				Framework.FWLogger.info("More names then rows (Ignoring)");
			}
			if(rows>name.length) {
				Framework.FWLogger.info("Not enough names for the rows (Filling with blank)");
			}
			for (let val of name) {
				var td = new Td();
				td.setClass("FWTheadTd");
				td.setText(val);
				this.theadtr.addInner(td);
			}
			this.theadtr.setClass(".FWTHeadTr");
			this.thead.setClass(".FWTHead");
			this.thead.addInner(this.theadtr);
			this.table.getAPI().append(this.thead.getAPI());
			this.table.getAPI().setAttribute("class", "FWTable");
		}
		getAPI = function() {
			return this.table.getAPI();
		}
		create = function(id) {
			if(id!=null) {
				document.getElementById(id).append(this.table.getAPI());
			}else{
				document.body.append(this.table.getAPI());
			}
		}
	}
}