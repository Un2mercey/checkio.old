function GroundForTheHouseController($scope, $routeParams) {
    /*
     *letiables
     */
    $scope.answer = null;
    $scope.areaWidth = null;
    $scope.areaHeight = null;
    $scope.area = [];
    $scope.description = "Set '0' and '#' => then";
    $scope.fillDisabled = true;
    $scope.params = $routeParams;
    /*
     *methods
     */
    let getRandomIntInclusive = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    let getRandomI = () => {
        return getRandomIntInclusive(0, $scope.area.length - 1);
    }

    let getRandomJ = () => {
        return getRandomIntInclusive(0, $scope.area[0].length - 1);
    }

    $scope.createArea = (width, height) => {
        $scope.countInputs = +width * +height;
        $scope.area.length = +height;
        try {
            for (let i = 0; i < height; i++) {
                $scope.area[i] = [];
                $scope.area[i].length = +width;
            }
        } catch (error) {}
        $scope.areaHeight = null;
        $scope.areaWidth = null;
        $scope.answer = null;
        $scope.fillDisabled = true;
        $scope.fullFillArea(0);
    }

    $scope.fullFillArea = (thing) => {
        $scope.fillDisabled = true;
        angular.element(document.querySelectorAll('input')).removeClass('border-top border-bottom border-left border-right inner');
        $scope.answer = null;
        for (let i = 0; i < $scope.area.length; i++) {
            for (let j = 0; j < $scope.area[i].length; j++) {
                $scope.area[i][j] = thing ? '#' : '0';
            };
        };
    }

    $scope.transformData = (thing, checkNull) => {
        switch (thing) {
            case 'width': 
                $scope.areaWidth = $scope.areaWidth.toString().replace(/[^0-9]/g, '');
                break;

            case 'height':
                $scope.areaHeight = $scope.areaHeight.toString().replace(/[^0-9]/g, '');
                break;

            case 'area': 
                for (let i = 0; i < $scope.area.length; i++) {
                    for (let j = 0; j < $scope.area[i].length; j++) {
                        if ($scope.area[i][j] !== undefined && $scope.area[i][j] !== '') {
                            $scope.area[i][j] = $scope.area[i][j].toString().replace(/[^#]/g, '0');
                        };
                        if (checkNull && ($scope.area[i][j] == undefined || $scope.area[i][j] == '')) {
                            $scope.area[i][j] = '0';
                        };
                    };
                };
                break;
        };
    };

    $scope.fillRandom = () => {
        $scope.fullFillArea(0);
        let randCoords = [], 
            repeat = true, 
            count = Math.abs(getRandomIntInclusive(getRandomI() * getRandomJ(), getRandomI() * getRandomJ()));
        if (count) {
            for (let c = 0; c < count; c++) {
                repeat = true;
                while (repeat) {
                    let i = getRandomI(), j = getRandomJ();
                    if (randCoords.length) {
                        repeat = false;
                        randCoords.map(el => {
                            if (el[0] == i && el[1] == j) repeat = true;
                        });
                        if (!repeat) randCoords.push([i, j]);
                    } else {
                        randCoords.push([i, j]);
                        repeat = false;
                    };
                };
            };
            randCoords.map(elem => { $scope.area[elem[0]][elem[1]] = '#' });
        } else $scope.fillRandom();
    };

    $scope.calculateArea = (fill) => {
        $scope.fillDisabled = false;
        $scope.answer = null;
        let house = [],
            xTopLeft = null,
            yTopLeft = null,
            xBottomRight = null,
            yBottomRight = null;

        $scope.transformData('area', true);
        angular.element(document.querySelectorAll('input')).removeClass('border-top border-bottom border-left border-right inner');
        $scope.area.map((elem, pos) => {
            if (elem.indexOf('#') !== -1) {
                house.push([elem.indexOf('#'), pos])
            }
            if (elem.lastIndexOf('#') !== -1 && elem.lastIndexOf('#') !== elem.indexOf('#')) {
                house.push([elem.lastIndexOf('#'), pos])
            }
        });

        if (house.length) {
            xTopLeft = house[0][0];
            yTopLeft = house[0][1];
            xBottomRight = house[house.length - 1][0];
            yBottomRight = house[house.length - 1][1];

            house.map((coord) => {
                if (coord[0] <= xTopLeft) xTopLeft = coord[0];
                if (coord[1] <= yTopLeft) yTopLeft = coord[1];
                if (coord[0] >= xBottomRight) xBottomRight = coord[0];
                if (coord[1] >= yBottomRight) yBottomRight = coord[1];
            })
            $scope.answer = (Math.abs(xBottomRight - xTopLeft) + 1) * (Math.abs(yBottomRight - yTopLeft) + 1);
            paintGround(xTopLeft, yTopLeft, xBottomRight, yBottomRight, fill);
        } else {
            $scope.answer = fill ? null : 0;
            $scope.fillDisabled = true;
        }
    };

    let paintGround = (xTopLeft, yTopLeft, xBottomRight, yBottomRight, fill) => {
        let xTopRight = xBottomRight,
            yTopRight = yTopLeft,
            xBottomLeft = xTopLeft,
            yBottomLeft = yBottomRight;

        angular.element(document.querySelectorAll('#input-')).removeClass('border-top border-bottom border-left border-right');
        for (let top = xTopLeft; top <= xTopRight; top++) {
            angular.element(document.querySelector('#input-' + top + '-' + yTopLeft)).addClass('border-top');
        };
        for (let bottom = xBottomLeft; bottom <= xBottomRight; bottom++) {
            angular.element(document.querySelector('#input-' + bottom + '-' + yBottomRight)).addClass('border-bottom');
        };
        for (let left = yTopLeft; left <= yBottomLeft; left++) {
            angular.element(document.querySelector('#input-' + xTopLeft + '-' + left)).addClass('border-left');
        };
        for (let right = yTopRight; right <= yBottomRight; right++) {
            angular.element(document.querySelector('#input-' + xTopRight + '-' + right)).addClass('border-right');
        };

        for (let y = yTopLeft; y <= yBottomRight; y++) {
            for (let x = xTopLeft; x <= xTopRight; x++) {
                if ($scope.area[y][x] == '0') {
                    fill ? $scope.area[y][x] = '#' : angular.element(document.querySelector('#input-' + x + '-' + y)).addClass('inner');
                }
            }
        }
    };

}

appControllers.controller('GroundForTheHouseController', GroundForTheHouseController);