function FriendsService() {
    this.names = ["Aarav", "Martín", "Shannon", "Ariana", "Kai"];
}
(function(app){

    app.DisplayComponent =
        ng.core.Component({
            selector:'display',
            providers: [FriendsService],
            templateUrl:'/DisplayData/app/template/DisplayData.template'
        })
            .Class({
                constructor:function(friends){
                    this.myName="Alice";
                    this.names = friends.names;
                }
            });
    app.DisplayComponent.parameters = [[FriendsService]];
})(window.app || (window.app = {}));