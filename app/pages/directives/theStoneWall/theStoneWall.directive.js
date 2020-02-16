function TheStoneWallDirective() {
    return {
        template: 
        '<div class="title-of-page">The stone wall</div>' +
        '<div class="img-of-page-large">' +
            '<img class="img-of-page-large" src="themes/img/taskPresentation/stone-wall.jpg">' +
            '<img class="img-of-page" src="themes/img/taskPresentation/stone-wall-purpose.jpg">' +
        '</div>' +
        '<div class="body-of-page">' +
            '<div class="middle-side">' +
                '<div class="side-double left">' +
                    '<span class="panel-span right">' +
                        '{{wall.length ? "Enter new wall width" : "Enter wall width"}}' +
                        '<br>' +
                        '<input class="side-input" maxlength="2" ng-model="wallWidth"' +
                            'ng-change="transformData(&quot;width&quot;, false)">' +
                    '</span>' +
                '</div>' +
                '<div class="side-double right">' +
                    '<span class="panel-span left">' +
                        '{{wall.length ? "Enter new wall height" : "Enter wall height"}}' +
                        '<br>' +
                        '<input class="side-input" maxlength="2" ng-model="wallHeight"' +
                            'ng-change="transformData(&quot;height&quot;, false)">' +
                    '</span>' +
                '</div>' +
                '<div class="button-area">' +
                    '<button type="button" class="btn btn-grad brn-create md" ng-disabled="!(+wallWidth) || !(+wallHeight)" ' +
                        'ng-click="createWall(wallWidth, wallHeight)">' +
                        '<img class="icon icon-plus" src="themes/img/icons/icon-plus.png">' +    
                        'Create new wall</button>' +
                '</div>' +
            '</div>' +
            '<div class="middle-side" ng-if="anwer !== null">' +
                '<span class="answer-span">{{answer}}</span>' +
            '</div>' +
            '<div class="middle-side last">' +
                '<div class="middle-side description" ng-if="wall.length">' +
                    '{{description}}' +
                    '<button type="button" class="btn btn-grad btn-calc md" ng-click="findFragile()">find fragile</button>' +
                    '<button type="button" class="btn btn-grad btn-clear" ng-click="clearWall()">or clear</button>' +
                    '<button type="button" class="btn btn-grad btn-random margin-left" ng-click="fillRandom()">or fill random</button>' +
                '</div>' +
                '<div class="grid">' +
                    '<div ng-repeat="row in wall">' +
                        '<span ng-repeat="col in row track by $index">' +
                            '<input class="grid-input"  maxlength="1" type="text"' +
                                'ng-class="{&quot;number-sign&quot;: row[$index] == &quot;0&quot;}"' +
                                'id="{{&quot;input-wall-&quot; + $index + &quot;-&quot; + wall.indexOf(row)}}"' +
                                'ng-model="row[$index]" ng-change="transformData(&quot;wall&quot;, false)">' +
                        '</span>' +
                    '</div>' +
                '</div>' +
            '</div>' +
        '</div>',
        controller: 'TheStoneWallController',
        scope: {},
    };
}

appDirectives.directive('theStoneWall', TheStoneWallDirective);