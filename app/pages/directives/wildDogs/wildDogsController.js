function WildDogsController($scope) {
    /*
    * variables
    */
    $scope.xDogCoord = null;
    $scope.yDogCoord = null;
    $scope.dogs = [];
    $scope.addDescription = null;
    var canvas = angular.element(document.querySelector('#wild-dogs-canvas'));
    var ctx = canvas[0].getContext('2d');
    $scope.test = 0;
    $scope.testResult = 0;

    /*
    * methods
    */
    var createСoordinatePlane = () => {

    };

    $scope.summ = () => {
        if ($scope.test) {
            console.log($scope.test);
            console.log($scope.test.split(','));
            let a = $scope.test.split(',')[0];
            let b = $scope.test.split(',')[1];
            console.log(a, b);

            $scope.testResult = +a + +b;

            console.log($scope.testResult);
    }
}   

    $scope.addCoordinates = (x, y) => {
        console.log(x,y)
        $scope.addDescription = null;
        let alreadyAdded = false;
        x = +x;
        y = +y;
        
            $scope.dogs.map(dog => {
                if (dog[0] == x && dog[1] == y) {
                    alreadyAdded = true;
                    $scope.addDescription = 'This coordinates of the dog already exist';
                };
            });
            if (!alreadyAdded) {
                $scope.dogs.push([x, y]);
                $scope.addDescription = null;
            };
    };

    $scope.clearDogsArray = () => {
        $scope.dogs = [];
    };

    $scope.clearDog = (index) => {
        $scope.dogs.splice(index, 1);
    }

    $scope.transformData = (coord) => {
        switch (coord) {
            case 'xDogCoord':
                $scope.xDogCoord = $scope.xDogCoord.toString().replace(/[^0-9]/g, '');
                break;

            case 'yDogCoord':
                $scope.yDogCoord = $scope.yDogCoord.toString().replace(/[^0-9]/g, '');
                break;
        };
    };
    
    /* 
    * прямоугольники
        ctx.fillStyle = 'red';
        ctx.fillRect(100, 50, 150, 75);
        // ctx.fillRect(x, y, width, height);
        ctx.fillStyle = 'blue';
        ctx.fillRect(150, 100, 100, 50);
        ctx.clearRect(0, 0, 400, 200);

        ctx.strokeStyle = 'green';
        ctx.lineWidth = '10';
        ctx.rect(50, 10, 100, 100);
        ctx.stroke();
        ctx.fillStyle = 'orange';
        ctx.fill();
    */

    /* 
    * линии
        ctx.beginPath();
        ctx.strokeStyle = 'red';
        ctx.lineWidth = '5';
        ctx.moveTo(100, 50);
        ctx.lineTo(150, 150);
        ctx.stroke();

        ctx.beginPath();
        ctx.strokeStyle = 'blue';
        ctx.lineWidth = '20';
        ctx.moveTo(200, 50);
        ctx.lineTo(300, 50);
        ctx.lineTo(300, 100);
        ctx.lineCap = 'round';
        ctx.lineCap = 'square';
        ctx.lineCap = 'butt';
        ctx.stroke();

        ctx.clearRect(0, 0, 400, 200);

        ctx.beginPath();
        ctx.lineWidth = '7';
        ctx.lineCap = 'round';
        ctx.moveTo(50, 150);
        ctx.lineTo(150, 50);
        ctx.lineTo(200, 150);
        ctx.fillStyle = 'yellow';
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
    */

    /*
    * paint
        var drawing = false;
        canvas.bind('mousedown', (event) => {
            drawing = true;
        });
        canvas.bind('mousemove', (event) => {
            if (drawing) {
                let x = event.offsetX, y = event.offsetY;
                ctx.fillRect(x-5, y-5, 10, 10)
            };
        });
        canvas.bind('mouseup', (event) => {
            drawing = false;
        })
    */
};

appControllers.controller('WildDogsController', WildDogsController);