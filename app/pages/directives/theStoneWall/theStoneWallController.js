function TheStoneWallController($scope) {
    /*
    *variables
    */
    $scope.answer = null;
    $scope.wallWidth = null;
    $scope.wallHeight = null;
    $scope.wall = [];
    $scope.description = "Set 0 and # then ";

    /*
    *methods
    */
    var getRandomIntInclusive = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    var getRandomI = () => {
        return getRandomIntInclusive(0, $scope.wall.length - 1);
    }

    var getRandomJ = () => {
        return getRandomIntInclusive(0, $scope.wall[0].length - 1);
    }

    var fillMap = (map) => {
        for (let i = 0; i < map.length; i++) {
            for (let j = 0; j < map[i].length; j++) {
                map[i][j] = '#';
            };
        };
    };

    var countCrack = () => {
        let count = 0;
        for (let i = 0; i < $scope.wall.length; i++) {
            for (let j = 0; j < $scope.wall[i].length; j++) {
                if ($scope.wall[i][j] == '0') count++;
            };
        };
        return count;
    };

    $scope.fillRandom = () => {
        fillMap($scope.wall);
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
            randCoords.map(elem => { $scope.wall[elem[0]][elem[1]] = '0' });
        } else $scope.fillRandom();
    };

    $scope.transformData = (thing, checkNull) => {
        switch (thing) {
            case 'width':
                $scope.wallWidth = $scope.wallWidth.toString().replace(/[^0-9]/g, '');
                break;

            case 'height':
                $scope.wallHeight = $scope.wallHeight.toString().replace(/[^0-9]/g, '');
                break;

            case 'wall':
                for (let i = 0; i < $scope.wall.length; i++) {
                    for (let j = 0; j < $scope.wall[i].length; j++) {
                        if ($scope.wall[i][j] !== undefined && $scope.wall[i][j] !== '') {
                            $scope.wall[i][j] = $scope.wall[i][j].toString().replace(/[^0]/g, '#');
                        };

                        if (checkNull && ($scope.wall[i][j] == undefined || $scope.wall[i][j] == '')) {
                            $scope.wall[i][j] = '#';
                        };
                    };
                };
                break;
        };
    };

    $scope.clearWall = () => {
        for (let i = 0; i < $scope.wall.length; i++) {
            for (let j = 0; j < $scope.wall[i].length; j++){
                if ($scope.wall[i][j] = '0') $scope.wall[i][j] = '#';
            };
        };
    };

    $scope.createWall = (width, height) => {
        $scope.wall = [];
        $scope.answer = null;
        $scope.wall.length = +height;

        for (let i = 0; i < height; i++) {
            $scope.wall[i] = [];
            $scope.wall[i].length = +width;
        };

        $scope.wallHeight = null;
        $scope.wallWidth = null;
        fillMap($scope.wall);
    };

    $scope.findFragile = () => {
        $scope.transformData('wall', true);
        if (countCrack()) {
            let max = {
                length: null,
                index: null
            };
            for (let j = 0; j < $scope.wall[0].length; j++) {
                let savedCoords = [];
                for (let i = $scope.wall.length - 1; i > - 1; i--) {
                    if ($scope.wall[i][j] == '0') savedCoords.push([i, j]); 
                };
                if (savedCoords.length > max.length && savedCoords[0][1] !== max.index) {
                    max.length = savedCoords.length; 
                    max.index = savedCoords[0][1];
                };
            };
            $scope.answer = max.index !== null ? max.index : 'Can\'t see a first crack...'
        } else {
            $scope.answer = 'In this wall need more crack\'s';
        };
    };
    /* if you see wall
        {
            if (i == $scope.wall.length - 1) savedCoords.push([i, j]);
            else {
                if (savedCoords[savedCoords.length - 1] !== undefined && 
                    savedCoords[savedCoords.length - 1][0] - i == 1) savedCoords.push([i, j]);
            };
        };
    */ 
};

appControllers.controller('TheStoneWallController', TheStoneWallController);