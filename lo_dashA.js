// Creates an array of elements split into groups the length of size. If array can't be splite evenly, the final chunk will be the remaining elements.
// Example:
// _.chunk(['a', 'b', 'c', 'd'], 2);
// => [['a', 'b'], ['c', 'd']]

// _.chunk(['a', 'b', 'c', 'd'], 3);
// => [['a', 'b', 'c'], ['d']]
// _.chunk(array, [size=1])

const myArray = ['a','b','c','d','e','f'];

const chunk = function(item, index){
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

console.log(chunk(myArray,5))