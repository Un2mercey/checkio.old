function GroundForTheHouseDirective() {
    return {
        template: 
        '<div class="title-of-page">ground for the house</div>' +
        '<div class="img-of-page">' +
            '<img class="img-of-page" src="themes/img/taskPresentation/ground-for-the-house.png">' +
            '<img class="img-of-page margin" src="themes/img/taskPresentation/ground-for-the-house-purpose.jpg">' +
        '</div>' +
        '<div class="body-of-page">' +
            '<div class="middle-side">' +
                '<div class="side-double left">' +
                    '<span class="panel-span right">' +
                        '{{area.length ? "Enter new area width" : "Enter area width"}}' +
                        '<br>' +
                        '<input class="side-input" maxlength="2" ng-model="areaWidth"' +
                            'ng-change="transformData(&quot;width&quot;, false)">' +
                    '</span>' +
                '</div>' +
                '<div class="side-double right">' +
                    '<span class="panel-span left">' +
                        '{{area.length ? "Enter new area height" : "Enter area height"}}' +
                        '<br>' +
                        '<input class="side-input" maxlength="2" ng-model="areaHeight"' +
                            'ng-change="transformData(&quot;height&quot;, false)">' +
                    '</span>' +
                '</div>' +
                '<div class="button-area">' +
                    '<button type="button" class="btn btn-grad btn-create md" ng-disabled="!(+areaWidth) || !(+areaHeight)"' +
                        'ng-click="createArea(areaWidth, areaHeight)">' +
                        '<img class="icon icon-plus" src="themes/img/icons/icon-plus.png">' +    
                        'Create new area</button>' +
                '</div>' +
            '</dv>' +
            '<div class="middle-side visible">' +
                '<span class="answer-span" ng-if="anwer !== null">{{answer}}</span>' +
            '</div>' +
            '<div class="middle-side last">' +
                '<div class="middle-side description" ng-if="area.length">' +
                    '<div>' +
                        '{{description}}' +
                        '<button type="button" class="btn btn-grad btn-calc disp-unset"  ng-click="calculateArea(false)">calculate</button>' +
                    '</div>' +
                    '<div>' +
                        '<button type="button" class="btn btn-grad btn-clear disp-unset" ng-click="fullFillArea(0)">or clear</button>' +
                        '<button type="button" class="btn btn-grad btn-fill disp-unset"  ng-click="calculateArea(true)" ng-disabled="fillDisabled">or fill</button>' +
                        '<button type="button" class="btn btn-grad btn-full-fill disp-unset" ng-click="fullFillArea(1)">or full fill</button>' +
                        '<button type="button" class="btn btn-grad btn-random disp-unset" ng-click="fillRandom()">or fill random</button>' +
                    '</div>' +
                '</div>' +
                '<div class="grid">' +
                    '<div ng-repeat="row in area">' +
                        '<span ng-repeat="col in row track by $index">' +
                            '<input class="grid-input"  maxlength="1"' +
                                'ng-class="{&quot;number-sign&quot;: row[$index] == &quot;#&quot;}"' +
                                'id="{{&quot;input-&quot; + $index + &quot;-&quot; + area.indexOf(row)}}" type="text"' +
                                'ng-model="row[$index]" ng-change="transformData(&quot;area&quot;, false)">' +
                        '</span>' +
                    '</div>' +
                '</div>' +
            '</div>' +
        '</div>',
        controller: 'GroundForTheHouseController',
        scope: {},
    };
}

appDirectives.directive('groundForTheHouse', GroundForTheHouseDirective);