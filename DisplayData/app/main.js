(function(app){
    document.addEventListener('DOMContentLoaded',function(){
        ng.platform.browser.bootstrap(app.DisplayComponent);
    });
})(window.app || (window.app = {}));