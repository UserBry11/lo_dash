// Creates an array of elements split into groups the length of size. If array can't be splite evenly, the final chunk will be the remaining elements.
// Example:
// _.chunk(['a', 'b', 'c', 'd'], 2);
// => [['a', 'b'], ['c', 'd']]

// _.chunk(['a', 'b', 'c', 'd'], 3);
// => [['a', 'b', 'c'], ['d']]
// _.chunk(array, [size=1])

const myArray = ['a','b','c','d','e','f'];

const chunk = function(item, index){
    console.log("chunk function")
    let elementsArray = [];
    let numberOfIterations = 0;
    const finalArray = [];

    if(item.length % index == 0){

        for(let eachItem of item){
            numberOfIterations += 1;
            elementsArray.push(eachItem);
            
            if(numberOfIterations === index){
                finalArray.push(elementsArray)
                elementsArray = [];
                numberOfIterations = 0;
            }
        }
    }
    else if(item.length < index){
        finalArray.push(item);
    }
    else {

        for(let arrayIndex = 0; arrayIndex < item.length; arrayIndex++){
            numberOfIterations += 1;
            elementsArray.push(item[arrayIndex]);

            if(numberOfIterations === index){
                finalArray.push(elementsArray);
                elementsArray = [];
                numberOfIterations = 0;
            }
            if( (item.length - arrayIndex) == 1){
                finalArray.push(elementsArray);
            }
        }
    }

    return finalArray;
}

// console.log(chunk(myArray,5))



// Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.

// _.compact([0, 1, false, 2 , '', 3]);
// => [1, 2, 3]

const compactArray = [0, 1, false, 2, '', 3]

const compact = function(inputArray){
    const falseyValues = [false, null, 0, "", undefined, NaN]

    return inputArray.filter( eachElement => {
        return !falseyValues.includes(eachElement)
    })
}

// console.log(compactArray == compact(compactArray));
// console.log("compact function")
// console.log(compact(compactArray))



// Creates a new array concatenating array with any additional arrays and/or values.

// _.concat(array, [values])
// returns a new concatenated array

// const concatArray = ['a', 'b', 'c'];
const concatArray = [1];

const concat = function(inputArray, ...args){
    return inputArray.concat(...args)
}

// console.log(concat(concatArray, 2, [3, 5, 6], [[4]]))



// Creates an array of array values not included in the other given arrays using SameValueZero for equality comparisons. The order and references of result values are determined by the first array.

// _.difference(array, [values]);

const differenceArray = [2, 1, 7];

const difference = function(inputArray, args){

    return inputArray.filter( eachElement => {
        return !args.includes(eachElement)
    })
}

// console.log(difference(differenceArray, [2, 3]))

// Creates a slice of array with n elements dropped from the beginning

//  _.drop(array, [n=1])

const dropArray = [1, 2, 3];

const drop = function(inputArray, n){
    inputArray.splice(0, n);
    return inputArray;
}

// console.log(drop(dropArray));

// Creates a slice of array with n elements dropped from the end.

// _.dropRight(array, [n=1]);
const dropRightArray = [1, 2, 3];

const dropRight = (inputArray, n) => {
    if(n === undefined) { n = 1}
    
    for(let counter = 0; counter < n; counter++){
        inputArray.pop()
    }
    return inputArray
}
// console.log(dropRight(dropRightArray));

// Creates a slice of array excluding elements dropped from the end. Elements are dropped until predicate returns falsey. The predicate is invoked with 3 arguments: (value, index, array)

// _.dropRightWhile(array, [predicate=_.identity])

const users = [
    {'user': 'barney', 'active': true},
    {'user': 'fred', 'active': false},
    {'user': 'pebbles', 'active': false}
]

const dropRightWhile = (inputArray, iteratee) => {
    
    return true;
}

usersArray = [
    {'user': 'pebbles', 'active': false },
    ['active', false],
    'active'
]

const oFunction = (o) => {!o.active;}

console.log(dropRightWhile(users, oFunction));