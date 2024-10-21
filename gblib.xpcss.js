/// <reference path="mainsimple.js" />
class XPCss {
    setXPStyle = function () {
        addStyle("https://unpkg.com/xp.css");
    }
    set98Style = function () {
        addStyle("https://unpkg.com/xp.css@0.2.3/dist/98.css");
    }
    getButton() {
        return new Button();
    }
    CheckBox = class {
        constructor(id) {
            this.container = new Div();
            this.input = new Input();
            this.input.setType("checkbox");
            this.input.setId(id);
            this.label = new Label();
            this.label.setFor(id);
            this.container.getAPI().append(this.input.getAPI());
            this.container.getAPI().append(this.label.getAPI());
        }
        setInactive = function () {
            this.input.setDisabled();
        }
        setChecked = function () {
            this.input.setChecked();
        }
        setText = function (text) {
            this.label.setText(text);
        }
        getInput = function () {
            return this.input;
        }
        getLabel = function () {
            return this.label;
        }
        getAPI = function () {
            return this.container.getAPI();
        }
        create = function (at) {
            if (at != null) {
                document.getElementById(at).append(this.container.getAPI());
            } else {
                document.body.append(this.container.getAPI());
            }
        }
    }
    OptionButton = class {
        constructor(id) {
            this.container = new Div();
            this.input = new Input();
            this.label = new Label();
            this.input.setId(id);
            this.label.setFor(id);
            this.input.setType("radio");
            this.container.getAPI().append(this.input.getAPI());
            this.container.getAPI().append(this.label.getAPI());
        }
        addOptionButton = function (object) {
            this.name = Math.random() + "optionbutton";
            this.input.setName(this.name);
            object.getInput().setName(this.name);
            this.container.getAPI().append(object.getAPI());
        }
        setInactive = function () {
            this.input.setDisabled();
        }
        setChecked = function () {
            this.input.setChecked();
        }
        setText = function (text) {
            this.label.setText(text);
        }
        getInput = function () {
            return this.input;
        }
        getLabel = function () {
            return this.label;
        }
        getAPI = function () {
            return this.container.getAPI();
        }
        create = function (at) {
            if (at != null) {
                document.getElementById(at).append(this.container.getAPI());
            } else {
                document.body.append(this.container.getAPI());
            }
        }
    }
    Tabs = class {
        constructor() {
            this.container = new Section();
            this.container.setClass("tabs");
            this.tabs = new ArrayList();
            this.menu = new Custom("menu");
            this.menu.setAttribute("role", "tablist");
            this.container.getAPI().append(this.menu.getAPI());
            var script = new Custom("script");
            script.getAPI().innerHTML = 'const tabs = document.querySelectorAll("menu[role=tablist]");for (let i = 0; i < tabs.length; i++) {const tab = tabs[i];const tabButtons = tab.querySelectorAll("menu[role=tablist] > button");tabButtons.forEach((btn) =>btn.addEventListener("click", (e) => {e.preventDefault();tabButtons.forEach((button) => {if (button.getAttribute("aria-controls") ===e.target.getAttribute("aria-controls")) {button.setAttribute("aria-selected", true);openTab(e, tab);} else {button.setAttribute("aria-selected", false);}});}));}function openTab(event, tab) {const articles = tab.parentNode.querySelectorAll(\'[role="tabpanel"]\');articles.forEach((p) => {p.setAttribute("hidden", true);});const article = tab.parentNode.querySelector(`[role="tabpanel"]#${event.target.getAttribute("aria-controls")}`);article.removeAttribute("hidden");}';
            this.container.getAPI().append(script.getAPI());
        }
        getContainer = function () {
            return this.container;
        }
        getMenu = function () {
            return this.menu;
        }
        Tab = class {
            constructor(id, name) {
                this.container = new Article();
                this.container.getAPI().setAttribute("role", "tabpanel");
                this.container.getAPI().setAttribute("hidden", "true");
                this.container.setId(id);
                this.id = id;
                this.button = new Button();
                this.button.getAPI().setAttribute("role", "tab");
                this.button.getAPI().setAttribute("aria-controls", id);
                this.button.getAPI().setAttribute("aria-selected", "false");
                this.button.setText(name);
            }
            setActive = function () {
                this.button.getAPI().setAttribute("aria-selected", "true");
                this.container.getAPI().removeAttribute("hidden");
            }
            getButton = function () {
                return this.button;
            }
            getAPI = function () {
                return this.container.getAPI();
            }
            getContainer = function () {
                return this.container;
            }
            addElement = function (element) {
                this.container.getAPI().append(element.getAPI());
            }
        }
        addTab = function (object) {
            this.tabs.add(object);
            this.container.getAPI().append(object.getAPI());
            this.menu.getAPI().append(object.getButton().getAPI());
        }
        getTab = function (number) {
            return this.tabs.get(number);
        }
        getAPI = function () {
            return this.container.getAPI();
        }
        create = function (at) {
            if (at != null) {
                document.getElementById(at).append(this.container.getAPI());
            } else {
                document.body.append(this.container.getAPI());
            }
        }
    }
    GroupBox = class {
        constructor(name, title, label) {
            this.container = new Fieldset();
            this.titlediv = new Div();
            this.titlediv.getAPI().innerHTML = title;
            this.titlediv.setClass("field-row");
            if (label == null) {
                this.container.getAPI().append(this.titlediv.getAPI());
            } else {
                this.legend = new Legend();
                this.legend.setText(label);
                this.container.getAPI().append(this.legend.getAPI());
            }
            this.name = name;
        }
        addGroupBoxButton = function (button) {
            button.input.setName(this.name);
            button.container.setClass("field-row");
            this.container.getAPI().append(button.container.getAPI());
        }
        getContainer = function () {
            return this.container;
        }
        getTitleDiv = function () {
            return this.titlediv;
        }
        GroupBoxButton = class {
            constructor(id) {
                this.container = new Div();
                this.input = new Input();
                this.label = new Label();
                this.input.setId(id);
                this.label.setFor(id);
                this.input.setType("radio");
                this.container.getAPI().append(this.input.getAPI());
                this.container.getAPI().append(this.label.getAPI());
            }
            setInactive = function () {
                this.input.setDisabled();
            }
            setChecked = function () {
                this.input.setChecked();
            }
            setText = function (text) {
                this.label.setText(text);
            }
            getInput = function () {
                return this.input;
            }
            getLabel = function () {
                return this.label;
            }
            getAPI = function () {
                return this.container.getAPI();
            }
        }
        getAPI = function () {
            return this.container.getAPI();
        }
        create = function (at) {
            if (at != null) {
                document.getElementById(at).append(this.container.getAPI());
            } else {
                document.body.append(this.container.getAPI());
            }
        }
    }
    TextBox = class {
        constructor(id, title) {
            this.container = new Div();
            this.container.setClass("field-row-stacked");
            this.label = new Label();
            this.label.setFor(id);
            this.label.setText(title);
            this.container.getAPI().append(this.label.getAPI());
            this.id = id;
        }
        setTextArea = function (textarea) {
            textarea.setId(this.id);
            this.container.getAPI().append(textarea.getAPI());
        }
        setTextInput = function () {
            this.textinput = new Input();
            this.textinput.setId(this.id);
            this.textinput.setType("text");
            this.container.getAPI().setAttribute("class", "field-row");
            this.container.getAPI().append(this.textinput.getAPI());
        }
        getLabel = function () {
            return this.label;
        }
        getAPI = function () {
            return this.container.getAPI();
        }
        create = function (at) {
            if (at != null) {
                document.getElementById(at).append(this.container.getAPI());
            } else {
                document.body.append(this.container.getAPI());
            }
        }
    }
    Slider = class {
        constructor(id) {
            this.container = new Div();
            this.container.setClass("field-row");
            this.id = id;
            this.vertical = false;
        }
        setVertical = function () {
            this.vertical = true;
        }
        setInput = function (input) {
            if (this.vertical) {
                input.setId(this.id);
                this.input = input;
                this.inputcontainer = new Div();
                this.inputcontainer.setClass("is-vertical");
                this.inputcontainer.getAPI().append(this.input.getAPI());
            } else {
                input.setId(this.id);
                this.input = input;
            }
        }
        setTitle = function (title) {
            this.titlelabel = new Label();
            this.titlelabel.setText(title);
            this.titlelabel.setFor(this.id);
        }
        setLowTitle = function (title) {
            if (!this.vertical) {
                this.lowtitlelabel = new Label();
                this.lowtitlelabel.setText(title);
                this.lowtitlelabel.setFor(this.id);
            }
        }
        setHighTitle = function (title) {
            if (!this.vertical) {
                this.hightitlelabel = new Label();
                this.hightitlelabel.setText(title);
                this.hightitlelabel.setFor(this.id);
            }
        }
        getAPI = function () {
            this.container.getAPI().append(this.titlelabel.getAPI());
            if (!this.vertical) {
                this.container.getAPI().append(this.lowtitlelabel.getAPI());
            }
            if (this.vertical) {
                this.container.getAPI().append(this.inputcontainer.getAPI());
            } else {
                this.container.getAPI().append(this.input.getAPI());
            }
            if (!this.vertical) {
                this.container.getAPI().append(this.hightitlelabel.getAPI());
            }
            return this.container.getAPI();
        }
        create = function (at) {
            this.container.getAPI().append(this.titlelabel.getAPI());
            if (!this.vertical) {
                this.container.getAPI().append(this.lowtitlelabel.getAPI());
            }
            if (this.vertical) {
                this.container.getAPI().append(this.inputcontainer.getAPI());
            } else {
                this.container.getAPI().append(this.input.getAPI());
            }
            if (!this.vertical) {
                this.container.getAPI().append(this.hightitlelabel.getAPI());
            }
            if (at != null) {
                document.getElementById(at).append(this.container.getAPI());
            } else {
                document.body.append(this.container.getAPI());
            }
        }
    }
    DropDown = class {
        constructor() {
            this.container = new Select();
        }
        addOption = function (option) {
            this.container.getAPI().append(option.getAPI());
        }
        Option = class {
            constructor() {
                this.container = new Custom("option");
            }
            setSelected = function () {
                this.container.getAPI().setAttribute("selected", "true");
            }
            setText = function (text) {
                this.container.getAPI().innerHTML = text;
            }
            getAPI = function () {
                return this.container.getAPI();
            }
        }
        getAPI = function () {
            return this.container.getAPI();
        }
        create = function (at) {
            if (at != null) {
                document.getElementById(at).append(this.container.getAPI());
            } else {
                document.body.append(this.container.getAPI());
            }
        }
    }
    Window = class {
        constructor() {
            this.container = new Div();
            this.container.setClass("window");
        }
        TitleBar = class {
            constructor(title) {
                this.container = new Div();
                this.container.setClass("title-bar");
                this.titlecontainer = new Div();
                this.titlecontainer.setClass("title-bar-text");
                this.titlecontainer.getAPI().innerHTML = title;
                this.controlscontainer = new Div();
                this.controlscontainer.setClass("title-bar-controls");
                this.container.getAPI().append(this.titlecontainer.getAPI());
                this.container.getAPI().append(this.controlscontainer.getAPI());
            }
            addMinimize = function () {
                this.minimizebutton = new Button();
                this.minimizebutton.getAPI().setAttribute("aria-label", "Minimize");
                this.controlscontainer.getAPI().append(this.minimizebutton.getAPI());
                return this.minimizebutton;
            }
            addHelp = function () {
                this.helpbutton = new Button();
                this.helpbutton.getAPI().setAttribute("aria-label", "Help");
                this.controlscontainer.getAPI().append(this.helpbutton.getAPI());
                return this.helpbutton;
            }
            addFullscreen = function () {
                this.fullscreenbutton = new Button();
                this.fullscreenbutton.getAPI().setAttribute("aria-label", "Restore");
                this.controlscontainer.getAPI().append(this.fullscreenbutton.getAPI());
                return this.fullscreenbutton;
            }
            addClose = function () {
                this.closebutton = new Button();
                this.closebutton.getAPI().setAttribute("aria-label", "Close");
                this.controlscontainer.getAPI().append(this.closebutton.getAPI());
                return this.closebutton;
            }
            getAPI = function () {
                return this.container.getAPI();
            }
        }
        setTitleBar = function (titlebar) {
            this.container.getAPI().append(titlebar.getAPI());
        }
        Body = class {
            constructor() {
                this.container = new Div();
                this.container.setClass("window-body");
            }
            addElement = function (element) {
                this.container.getAPI().append(element.getAPI());
            }
            getAPI = function () {
                return this.container.getAPI();
            }
        }
        setBody = function (body) {
            this.container.getAPI().append(body.getAPI());
        }
        StatusBar = class {
            constructor() {
                this.container = new Div();
                this.container.setClass("status-bar");
            }
            addStatusBarField = function (text) {
                var field = new P();
                field.setClass("status-bar-field");
                field.getAPI().innerHTML = text;
                this.container.getAPI().append(field.getAPI());
            }
            getAPI = function () {
                return this.container.getAPI();
            }
        }
        setStatusBar = function (statusbar) {
            this.container.getAPI().append(statusbar.getAPI());
        }
        getAPI = function () {
            return this.container.getAPI();
        }
        create = function (at) {
            if (at != null) {
                document.getElementById(at).append(this.container.getAPI());
            } else {
                document.body.append(this.container.getAPI());
            }
        }
    }
    TreeView = class {
        constructor() {
            this.container = new Ul();
            this.container.setClass("tree-view");
        }
        addEntry = function (element) {
            var e = new Li();
            e.addInner(element);
            this.container.getAPI().append(e.getAPI());
        }
        CollapseEntry = class {
            constructor(title) {
                this.container = new Details();
                this.elementcontainer = new Ul();
                this.summary = new Summary();
                this.summary.setText(title);
                this.container.getAPI().append(this.summary.getAPI());
                this.container.getAPI().append(this.elementcontainer.getAPI());
            }
            setOpen = function() {
                this.container.getAPI().setAttribute("open", "true");
            }
            addEntry = function (element) {
                var e = new Li();
                e.addInner(element);
                this.elementcontainer.getAPI().append(e.getAPI());
            }
            addCollapseEntry = function(entry) {
                var e = new Li();
                e.addInner(entry);
                this.elementcontainer.getAPI().append(e.getAPI());
            }
            getAPI = function() {
                return this.container.getAPI();
            }
        }
        addCollapseEntry = function (element) {
            this.container.getAPI().append(element.getAPI());
        }
        getAPI = function() {
            return this.container.getAPI();
        }
        create = function(at) {
            if (at != null) {
                document.getElementById(at).append(this.container.getAPI());
            } else {
                document.body.append(this.container.getAPI());
            }
        }
    }
    getProgress = function() {
        return new Progress();
    }
}