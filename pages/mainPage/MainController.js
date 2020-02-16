function MainController($scope) {
    $scope.activeDirective = null;
    $scope.welcomeText = 'Welcome';

    $scope.clearActiveDirective = () => {
        $scope.activeDirective = null;
    }
    
    $scope.changeDirective = (index) => {
        var active = $scope.listOfDirectives[index].name;
        active = active.toLowerCase().replace(/[' ']/g, '-');
        $scope.activeDirective = active;
    }

    $scope.listOfDirectives = [
        {
            name: 'Ground for the house',
            page: 'https://js.checkio.org/ru/mission/ground-for-the-house/'
        },
        {
            name: 'Most numbers',
            page: 'https://js.checkio.org/ru/mission/most-numbers/'
        },
        {
            name: 'Navigation',
            page: 'https://js.checkio.org/ru/mission/compass-map-and-spyglass/'
        },
        {
            name: 'The stone wall',
            page: 'https://js.checkio.org/ru/mission/the-stone-wall/'
        },
        {
            name: 'Wild dogs',
            page: 'https://js.checkio.org/ru/mission/wild-dogs/'
        },
    ];
}

appControllers.controller('MainController', MainController);