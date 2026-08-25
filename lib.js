// Find the largest number and the number before it

//First way
export const largestNumber1 = (arr = []) => {
    let max = 0, beforemax;
    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
            beforemax = max - 1;
        }
    }
    console.log("The max number is : " + max);
    console.log("Before the max number is : " + beforemax);
}

//Second way
export const largestNumber2 = (arr = []) => {
    let max = Math.max.apply(null, arr);
    console.log("The max number is : " + max);
    console.log("Before the max number is : " + (max - 1));
}

//Third way
export const largestNumber3 = (arr = []) => {
    let max = arr.sort((a, b) => b - a)[0];
    console.log("The max number is : " + max);
    console.log("Before the max number is : " + (max - 1));
}

//Find the longest name in the array 

//First way

export const longestName = (arr = []) => {
    let long = "";
    for (let i = 0; i < arr.length; i++) {
        if (long.length < arr[i].length) {
            long = arr[i];
        }
    }
    console.log("The longest name is : " + long);
}

//Second way 

export const longestName2 = (arr = []) => {
    let long = arr.reduce((longest, current) => {
        return current.length > longest.length ? current : longest;
    }, "");
    console.log("The longest name is : " + long);
}

//Third way

export const longestName3 = (arr = []) => {
    let long = arr.sort((a, b) => b.length - a.length)[0];
    console.log("The longest name is : " + long);

}

//Extract numbers bigger than their adjacent neighbors 

//First way

export const biggerNumber1 = (arr = []) => {
    const arr2 = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i + 1] > arr[i] && arr[i + 1] > arr[i + 2]) {
            arr2.push(arr[i + 1]);
        }
    }
    console.log("Bigger number between it's neighbors : " + arr2)
}

//Second way

export const biggerNumber2 = (arr = []) => {
    let res = arr.filter((nuumber, index) => {
        return nuumber > arr[index - 1] && nuumber > arr[index + 1]
    });
    console.log("Bigger number between it's neighbors : " + res)

}
//Third way

export const biggerNumber3 = (arr = []) => {
    let res = arr.reduce((arr2, bigger, current) => {
        if (bigger > arr[current - 1] && bigger > arr[current + 1]) {
            arr2.push(bigger);
        }
        return arr2;
    }, []);
    console.log("Bigger number between it's neighbors : " + res)

}