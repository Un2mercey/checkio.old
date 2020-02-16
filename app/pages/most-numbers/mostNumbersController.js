function MostNumbersController($scope, $routeParams) {
    /*
     *variables
     */
    $scope.answer;
    $scope.params = $routeParams;
    /*
     *methods
     */
    $scope.transformedInput = () => {
        if ($scope.numbers) {
            $scope.numbers = $scope.numbers.replace(/[^0-9,-]/g, '');
        }
    }
    $scope.mostNumbers = (...numbers) => {
        if (numbers[0] !== undefined && numbers[0].split(',').length > 1) {
            numbersArray = numbers[0].split(',');
            for (var i = 0; i < numbersArray.length; i++) {
                numbersArray[i] = +numbersArray[i];
            }
            $scope.answer = Math.max.apply(null, numbersArray) - Math.min.apply(null, numbersArray);
        } else {
            $scope.answer = 'Enter more numbers';
        }

    }
}

appControllers.controller('MostNumbersController', MostNumbersController);