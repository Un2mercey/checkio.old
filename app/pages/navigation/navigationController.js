function NavigationController($scope, $routeParams) {
    /**
     *variables
     */
    $scope.params = $routeParams;
    $scope.answer = null;
    $scope.seaMapWidth = null;
    $scope.seaMapHeight = null;
    $scope.finalAnswer = null;
    $scope.seaMap = [];
    var pointArray = ['Y', 'C', 'M', 'S'];
    $scope.description = "Set " + pointArray.toString() + " and ";
    var savedCoords = {
        y: [],
        c: [],
        m: [],
        s: []
    };

    /**
     *methods
     */
    var getRandomIntInclusive = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    var getRandomI = () => {
        return getRandomIntInclusive(0, $scope.seaMap.length - 1);
    }

    var getRandomJ = () => {
        return getRandomIntInclusive(0, $scope.seaMap[0].length-1);
    }

    var fillMap = (map) => {
        for (let i = 0; i < map.length; i++) {
            for (let j = 0; j < map[i].length; j++) {
                map[i][j] = '0';
            };
        };

        toDefaultCoords();
    };

    var transformString = (str) => {
        if (str !== '0' && /^[a-z]*$/.test(str)) return str.toUpperCase();
        else return str;
    };

    var toDefaultCoords = () => {
        savedCoords.y = [];
        savedCoords.c = [];
        savedCoords.m = [];
        savedCoords.s = [];
    };

    var difference = (newMap, oldMap) => {
        if (newMap.length && oldMap.length) {
            toDefaultCoords();
            for (let i = 0; i < oldMap.length; i++) {
                for (let j = 0; j < oldMap[i].length; j++) {
                    switch (oldMap[i][j]) {
                        case 'Y':
                            savedCoords.y = [i, j];
                            break;
                        case 'C':
                            savedCoords.c = [i, j];
                            break;
                        case 'M':
                            savedCoords.m = [i, j];
                            break;
                        case 'S':
                            savedCoords.s = [i, j];
                            break;
                    };
                };
            };
            for (let i = 0; i < newMap.length; i++) {
                for (let j = 0; j < newMap[i].length; j++) {
                    if (newMap[i][j] !== oldMap[i][j]) {
                        switch (newMap[i][j]) {
                            case 'Y':
                                if (savedCoords.y.length) newMap[savedCoords.y[0]][savedCoords.y[1]] = '0';
                                savedCoords.y = [i, j];
                                break;
                            case 'C':
                                if (savedCoords.c.length) newMap[savedCoords.c[0]][savedCoords.c[1]] = '0';
                                savedCoords.c = [i, j];
                                break;
                            case 'M':
                                if (savedCoords.m.length) newMap[savedCoords.m[0]][savedCoords.m[1]] = '0';
                                savedCoords.m = [i, j];
                                break;
                            case 'S':
                                if (savedCoords.s.length) newMap[savedCoords.s[0]][savedCoords.s[1]] = '0';
                                savedCoords.s = [i, j];
                                break;
                        };
                    };
                };
            };
            $scope.seaMap = newMap;
        };
    };

    var isDifferentCoords = () => {
        let result = true;
        for (let p = 0; p < pointArray.length; p++) {
            let point = pointArray[p].toLowerCase();
            for (let np = p + 1; np < pointArray.length; np++){
                let newPoint = pointArray[np].toLowerCase();
                if (savedCoords[point] !== undefined &&
                    savedCoords[newPoint] !== undefined &&
                    savedCoords[point][0] == savedCoords[newPoint][0] && 
                    savedCoords[point][1] == savedCoords[newPoint][1]) result = false;
                if (savedCoords[point] === undefined || savedCoords[newPoint] === undefined) result = false;
            };
        };
        return result;
    };

    var checkSumm = () => {
        let yCount = 0, cCount = 0, mCount = 0, sCount = 0;
        for (let i = 0; i < $scope.seaMap.length; i++) {
            for (let j = 0; j < $scope.seaMap[i].length; j++) {
                switch ($scope.seaMap[i][j]) {
                    case 'Y':
                        yCount++;
                        if (savedCoords.y[0] !== i && savedCoords.y[1] !== j) {
                            savedCoords.y = [i, j];
                        };
                        break;
                    case 'C':
                        cCount++;
                        if (savedCoords.c[0] !== i && savedCoords.c[1] !== j) {
                            savedCoords.c = [i, j];
                        };
                        break;
                    case 'M':
                        mCount++;
                        if (savedCoords.m[0] !== i && savedCoords.m[1] !== j) {
                            savedCoords.m = [i, j];
                        };
                        break;
                    case 'S':
                        sCount++;
                        if (savedCoords.s[0] !== i && savedCoords.s[1] !== j) {
                            savedCoords.s = [i, j];
                        };
                        break;
                };
            };
        };
        return yCount == 1 && cCount == 1 && mCount == 1 && sCount == 1 && isDifferentCoords();
    };

    $scope.$watch('seaMap', (newValue, oldValue) => {
        difference(newValue, oldValue);
    }, true);

    $scope.fillRandom = () => {
        fillMap($scope.seaMap);
        setTimeout(() => {
            let randCoords = [], repeat = true;
            for (let p = 0; p < pointArray.length; p++) {
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

            for (let p = 0; p < pointArray.length; p++) {
                $scope.seaMap[randCoords[p][0]][randCoords[p][1]] = pointArray[p];
            };

            $scope.$apply();
        }, 5)
    };

    $scope.transformData = (thing, checkNull) => {
        switch (thing) {
            case 'width':
                $scope.seaMapWidth = $scope.seaMapWidth.toString().replace(/[^0-9]/g, '');
                break;

            case 'height':
                $scope.seaMapHeight = $scope.seaMapHeight.toString().replace(/[^0-9]/g, '');
                break;

            case 'seaMap':
                for (let i = 0; i < $scope.seaMap.length; i++) {
                    for (let j = 0; j < $scope.seaMap[i].length; j++) {
                        if ($scope.seaMap[i][j] !== undefined && $scope.seaMap[i][j] !== '') {
                            $scope.seaMap[i][j] = $scope.seaMap[i][j].toString().replace(/[^yYcCmMsS]/g, '0');
                            $scope.seaMap[i][j] = transformString($scope.seaMap[i][j]);
                        }
                        if (checkNull && ($scope.seaMap[i][j] == undefined || $scope.seaMap[i][j] == '')) {
                            $scope.seaMap[i][j] = '0';
                        };
                    };
                };
                break;
        };
    };

    $scope.createSeaMap = (width, height) => {
        $scope.seaMap = [];
        $scope.answer = null;
        $scope.finalAnswer = null;

        if (+width * +height >= 4) {
            $scope.seaMap.length = +height;

            for (let i = 0; i < height; i++) {
                $scope.seaMap[i] = [];
                $scope.seaMap[i].length = +width;
            };

            $scope.seaMapHeight = null;
            $scope.seaMapWidth = null;
            fillMap($scope.seaMap);
        } else {
            $scope.answer = 'Need min 4 squares'
        }
    }

    $scope.navigation = () => {
        $scope.transformData('seaMap', true);
        var YC, YM, YS;
        if (checkSumm()) {
            for (var p = 1; p < pointArray.length; p++) {
                var yCoord = Math.abs(savedCoords.y[0] - savedCoords[pointArray[p].toLowerCase()][0]),
                    xCoord = Math.abs(savedCoords.y[1] - savedCoords[pointArray[p].toLowerCase()][1]);
                switch (p) {
                    case 1:
                        YC = xCoord > yCoord ? xCoord : yCoord;
                        break;
                    case 2: 
                        YM = xCoord > yCoord ? xCoord : yCoord;
                        break;
                    case 3: 
                        YS = xCoord > yCoord ? xCoord : yCoord;
                        break;
                }
            };

            $scope.finalAnswer = YC + YM + YS;
            $scope.answer = 'YC = ' + YC + ' YM = ' + YM + ' YS = ' + YS;
        } else {
            $scope.answer = 'Entered not all points';
        }
    };
}

appControllers.controller('NavigationController', NavigationController);