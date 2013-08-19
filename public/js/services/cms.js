window.app.factory("CMS", function(Global, $resource) {
    var _this = this;
    _this.content = {};

    _this.content["index"] = {
        en: {
            signupbutton: "sign up now",
            signuptext: "for more info",
            picsign: "Your free 10 days trip to Israel starts here",
            whatstitle: "What's it all about?",
            whatsp1: "If you're Jewish and between the ages of 18 and 26, Birthright Israel offers you the once in a lifetime opportunity to join on of their legandary free 10 days trip to Israel. Here's how it works...",
            whatsp2: "Taglit-Birthright Israel is funded by Jewish philanthropists whose goal is to give every young Jew the opportunity to see and  experience the Land of Israel."
        },
        he: {
            signupbutton: "sign up now",
            signuptext: "for more info",
            picsign: "Your free 10 days trip to Israel starts here",
            whatstitle: "What's it all about?",
            whatsp1: "If you're Jewish and between the ages of 18 and 26, Birthright Israel offers you the once in a lifetime opportunity to join on of their legandary free 10 days trip to Israel. Here's how it works...",
            whatsp2: "Taglit-Birthright Israel is funded by Jewish philanthropists whose goal is to give every young Jew the opportunity to see and  experience the Land of Israel."
        }
    };
    
    return {
        get: function(id, callback) {
        	if(!_this.content[id] || !_this.content[id][Global.lang]) throw "CMS Get | View Not Found";
        	else callback(_this.content[id][Global.lang]);
        },
        update: function(id, content, callback) {
        	if(!_this.content[id] || !_this.content[id][Global.lang]) throw "CMS Update | View Not Found";
        	else {
        		// execute a resource to a articles clone.
        		 console.log(_this.content[id]); 
        		var srv =  $resource('cms/update/:page',  
        			{ page: JSON.stringify(_this.content[id]) } , {  //basically I'm passing this object to the server
        			update: {
            			method: 'PUT'
        			}
    			});
    			srv.update();
    			console.log(srv);
        		_this.content[id][Global.lang] = content;
        		callback(_this.content[id][Global.lang]);
        	}
        }
    }
});
