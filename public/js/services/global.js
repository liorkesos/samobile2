window.app.factory("Global", function(){
	var _this = this;
    _this._data = { user: window.user, authenticated: !!window.user, menuState: false, lang: "en" };

	return _this._data;
});