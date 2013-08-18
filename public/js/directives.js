window.app.directive('ngBlur', function($parse) {
    return function(scope, element, attrs) {
        element.bind('blur', function(){
            scope.$eval(attrs.ngBlur);
        });
    };
});

window.app.directive('ngFocus', function($parse) {
    return function(scope, element, attrs) {
        element.bind('focus', function(){
            scope.$eval(attrs.ngFocus);
        });
    };
});

window.app.directive('ngEnter', function() {
	return function(scope, elm, attrs) {
		elm.bind('keypress', function(e) {
			if(e.charCode === 13) scope.$apply(attrs.ngEnter);
		});
	};
});

window.app.directive('ngEditable', function() {
  return {
		// can be in-lined or async loaded by xhr
		// or inlined as JS string (using template property)
		template: '<span class="editable-wrapper">' +
					'<span data-ng-hide="edit" data-ng-dblclick="edit=true;value=model;">{{model}}</span>' +
					'<input type="text" data-ng-model="value" data-ng-blur="blurred();" data-ng-show="edit" data-ng-enter="model=value;edit=false;"/>' +
				'</span>',
		scope: {
			model: '=ngEditableModel',
			update: '&ngEditable'
		},
		replace: true,
		link: function(scope, element, attrs) {
			scope.focus = function() { element.find("input").focus(); };
			scope.blurred = function() { scope.$apply(function() { scope.edit = false; }); };
			
			scope.$watch('edit', function(isEditable) {
				if(isEditable === false){
					scope.update();
				}
				else {
					scope.focus();
				}
			});
		}
	};
});