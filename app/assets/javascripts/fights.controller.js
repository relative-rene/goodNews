angular.module('goodNews').controller('FightsController', FightsController);

FightsController.$inject = ['$location'];
function FightsController($location) {
    var vm = this;
    console.log('FightsController is live');
    vm.fights = [
        {
            id: 1,
            event: 'UFC 205',
            division: 'LightWeight',
            favorite: [
                'Eddie Alvarez', -110
            ],
            underdog: [
                'Conor Mcgregor', + 120
            ]
        }, {
            id: 1,
            event: 'homework fight',
            division: 'WelterWeight',
            favorite: [
                'Wonder Boy', -150
            ],
            underdog: [
                'Tyron Woodley', + 200
            ]
        }
    ];
    vm.sampleData = 'hello world';
}
