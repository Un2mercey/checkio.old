function WildDogsDirective() {
    return {
        template: 
        '<div class="title-of-page">wild dogs</div>' +
        '<div class="img-of-page-large">' +
            '<img class="img-of-page-large" src="themes/img/taskPresentation/wild-dogs.jpg">' +
            '<img class="img-of-page" src="themes/img/taskPresentation/wild-dogs-purpose.jpg">' +
        '</div>' +
        '<div class="body-of-page">' +
            '<div class="middle-side last">' +
                '<div class="side-12 left absolute-left-17">' +
                    '<div>' +
                        '<button type="button" class="btn btn-grad btn-clear block" ng-disabled="!dogs.length" ng-click="clearDogsArray()">' +
                            '<span class="button-description">Clear</span>' +
                            '<img class="icon icon-clear" src="themes/img/icons/icon-clear.png">' +
                        '</button>' +
                    '</div>' +
                    '<ul>' +
                        '<li class="dog" ng-repeat="dog in dogs track by $index">' +
                            '<span ng-bind="&quot;(&quot; + dog + &quot;)&quot;"></span>' +
                            '<img class="icon-delete" src="themes/img/icons/icon-delete.png" ng-click="clearDog($index)">' +
                        '</li>' +
                    '</ul>' +
                '</div>' +
                '<div class="side-88 right margin-right-70">' +
                    '<div class="side-double left">' +
                        '<span class="panel-span right">' +
                            'Enter dog X coordinate' +
                            '<br>' +
                            '<input class="side-input" maxlength="2" ng-model="xDogCoord" ng-change="transformData(&quot;xDogCoord&quot;)">' +
                        '</span>' +
                    '</div>' +
                    '<div class="side-double right">' +
                        '<span class="panel-span left">' +
                            'Enter dog Y coordinate' +
                            '<br>' +
                            '<input class="side-input" maxlength="2" ng-model="yDogCoord" ng-change="transformData(&quot;yDogCoord&quot;)">' +
                        '</span>' +
                    '</div>' +
                    '<div class="button-area">' +
                        '<button type="button" class="btn btn-grad btn-create md" ng-disabled="!xDogCoord || !yDogCoord" ng-click="addCoordinates(xDogCoord, yDogCoord)">' +
                            '<span class="button-description">Add coordinates</span>' +
                            '<img class="icon icon-plus" src="themes/img/icons/icon-plus.png">' +
                        '</button>' +
                    '</div>' +
                    '<div>' +
                        '<canvas id="wild-dogs-canvas" width="400" height="200"></canvas>' +
                    '</div>' +
                '</div>' +
                '<div>' +
                    '<span>{{testResult}}</span>' +
                    '<input class="side-input xlg" ng-model="test" ng-disabled="false">' +
                    '<button ng-click="summ()"></button>' +
                '</div>' +
            '</div>' +
        '</div>',
        controller: 'WildDogsController',
        scope: {},
    };
}

appDirectives.directive('wildDogs', WildDogsDirective);