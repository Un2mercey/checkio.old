function NavigationDirective() {
    return {
        template: 
            '<div class="title-of-page">navigation</div>' +
            '<div class="img-of-page">' +
                '<img class="img-of-page" src="themes/img/taskPresentation/navigation.jpg">' +
                '<img class="img-of-page" src="themes/img/taskPresentation/navigation-purpose.jpg">' +
            '</div>' +
            '<div class="body-of-page">' +
                '<div class="middle-side">' +
                    '<div class="side-double left">' +
                        '<span class="panel-span right">' +
                            '{{seaMap.length ? "Enter new sea map width" : "Enter sea map width"}}' +
                        '<br>' +
                        '<input class="side-input" maxlength="2" ng-model="seaMapWidth" ng-change="transformData(&quot;width&quot;, false)">' +
                        '</span>' +
                    '</div>' +
                    '<div class="side-double right">' +
                        '<span class="panel-span left">' +
                            '{{seaMap.length ? "Enter new sea map height" : "Enter sea map height"}}' +
                            '<br>' +
                            '<input class="side-input" maxlength="2" ng-model="seaMapHeight" ng-change="transformData(&quot;height&quot;, false)">' +
                        '</span>' +
                    '</div>' +
                    '<div class="button-area">' +
                        '<button type="button" class="btn btn-grad btn-create lg" ng-disabled="!(+seaMapWidth) || !(+seaMapHeight)" ng-click="createSeaMap(seaMapWidth, seaMapHeight)">' +
                        '<img class="icon icon-plus" src="themes/img/icons/icon-plus.png">' +    
                        'Create new map of the sea</button>' +
                    '</div>' +
                '</div>' +
                '<div class="middle-side" ng-if="anwer !== null">' +
                    '<span class="answer-span">{{answer}}</span>' +
                '</div>' +
                '<div class="middle-side" ng-if="finalAnswer !== null">' +
                    '<span class="answer-span">SUMM = {{finalAnswer}}</span>' +
                '</div>' +
                '<div class="middle-side last" ng-if="seaMap.length">' +
                    '<div class="middle-side description">' +
                        '{{description}}' +
                        '<button type="button" class="btn btn-grad btn-calc xs disp-unset" ng-click="navigation(false)">GO!</button>' +
                        '<button type="button" class="btn btn-grad btn-random disp-unset" ng-click="fillRandom()">or set random</button>' +
                    '</div>' +
                    '<div class="grid">' +
                        '<div ng-repeat="row in seaMap">' +
                            '<span ng-repeat="col in row track by $index">' +
                                '<input class="grid-input" ' +
                                        'ng-class="{&quot;s&quot; : row[$index] == &quot;S&quot;,'+
                                                    '&quot;m&quot; : row[$index] == &quot;M&quot;,'+
                                                    '&quot;c&quot; : row[$index] == &quot;C&quot;,'+
                                                    '&quot;y&quot; : row[$index] == &quot;Y&quot;}"' +
                                        'id="{{&quot;input-sea-map-&quot; + $index + &quot;-&quot; + seaMap.indexOf(row)}}" ' +
                                        'type="text" ' +
                                        'maxlength="1" ' +
                                        'ng-model="row[$index]" ' +
                                        'ng-change="transformData(&quot;seaMap&quot;, false)">' +
                            '</span>' +
                        '</div>' +
                    '</div>' +
                '</div>' +
            '</div>',
        controller: 'NavigationController',
        scope: {},
    };
}

appDirectives.directive('navigation', NavigationDirective);