function MostNumbersDirective() {
    return {
        template: 
            '<div class="title-of-page">most numbers</div>' + 
            '<div class="img-of-page">' +
                '<img class="img-of-page" src="themes/img/taskPresentation/most-nubmers.png">' +
            '</div>' +
            '<div class="body-of-page">' + 
                '<div class="middle-side">' + 
                    '<div class="middle-side description">' + 
                        '<input class="side-input xlg" ng-model="numbers" ng-change="transformedInput()" ng-disabled="false">' + 
                    '</div>' + 
                    '<div class="middle-side description">' + 
                        '<span class="answer-div xlg">{{answer}}</span>' + 
                    '</div>' + 
                '</div>' + 
                '<div class="button-area last">' + 
                    '<button class="btn btn-grad btn-calc md" ng-click="mostNumbers(numbers)">MostNumbers</button>' + 
                '</div>' + 
            '</div>',
        controller: 'MostNumbersController',
        scope: {},
    };
}

appDirectives.directive('mostNumbers', MostNumbersDirective);