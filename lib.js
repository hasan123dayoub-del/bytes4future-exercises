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

//Count the number of people eligible to vote 

//First way

export const peopleVote1 = (arr = []) => {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 18)
            count++;
    }
    console.log("The number of people can eligible is : " + count);
}

//Second way

export const peopleVote2 = (arr = []) => {
    let count = 0;
    arr.forEach((age) => {
        if (age >= 18) { count++; }
    });
    console.log("The number of people can eligible is : " + count);
}

//Third way

export const peopleVote3 = (arr = []) => {
    const count = arr.reduce((total, age) => {
        if (age >= 18) {
            total++;
        }
        return total;
    }, 0);
    console.log("The number of people can eligible is : " + count);
}


//Check if a specific number exists in the array 

//First way

export const specificNumber1 = (arr = [], number) => {
    let exist = false;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == number) {
            exist = true;
        }
    }
    return exist;
}

//Second way

export const specificNumber2 = (arr = [], number) => {
    return arr.includes(number);
}
//Third way

export const specificNumber3 = (arr = [], number) => {
    return arr.reduce((found, items) => {
        return found || items == number;
    }, false);
}

//Calculate the average of numbers 

//First way

export const averageOfNumbers1 = (arr = []) => {
    let sum = 0, avg = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    avg = sum / arr.length;
    return avg.toFixed(2);
}

//Second way

export const averageOfNumbers2 = (arr = []) => {
    let sum = 0, avg = 0;
    arr.forEach((number) => {
        sum += number;
    });
    avg = sum / arr.length;
    return avg.toFixed(2);
}

//Third way

export const averageOfNumbers3 = (arr = []) => {
    const sum = arr.reduce((total, number) => {
        return total + number;
    }, 0);
    const avg = sum / arr.length;
    return avg.toFixed(2);
}

//Find common elements between two arrays 

//First way

export const commonElements1 = (arr1 = [], arr2 = []) => {
    const arr3 = [];
    arr1.forEach((item) => {
        if (arr2.includes(item)) {
            arr3.push(item);
        }
    });
    return arr3;
}

//Second way

export const commonElements2 = (arr1 = [], arr2 = []) => {
    return arr1.filter((item) =>
        arr2.includes(item));
}

//Third way

export const commonElements3 = (arr1 = [], arr2 = []) => {
    return arr1.reduce((common, item) => {
        if (arr2.includes(item)) {
            common.push(item);
        }
        return common;
    }, []);
}

//Sort cities alphabetically 

//First way

export const sortCities1 = (arr = []) => {
    return arr.sort();
}

//Second way

export const sortCities2 = (arr = []) => {
    let city = "";
    const str = [];
    for (let i = 0; i < arr.length; i++) {
        if (city < arr[i]) {
            str.push(arr[i]);
        }
    }
    return str;
}

//Third way

export const sortCities3 = (arr = []) => {
    let city = "";
    const str = [];
    return arr.filter((item) => {
        if (city < item) {
            str.push(item);
        }
        return str;
    });
}

//Find duplicated items in an array 

//First way

export const duplicatedItems1 = (arr = []) => {
    const arr3 = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            if (i != j && arr[i] === arr[j]) {
                arr3.push(arr[i]);
            }
        }
    }
    return arr3;
}

//Second way

export const duplicatedItems2 = (arr = []) => {
    const arr2 = [];
    arr.forEach((item, index) => {
        if (arr.indexOf(item) !== index && !arr2.includes(item)) {
            arr2.push(item);
        }
    });
    return arr2;
}

//Third way

export const duplicatedItems3 = (arr = []) => {
    return arr.reduce((result, item) => {
        if (arr.indexOf(item) !== arr.lastIndexOf(item)) {
            if (!result.includes(item)) {
                result.push(item);
            }
        }
        return result;
    }, []);
}

//Split an array into chunks of size 3 

//First way

export const splitArray1 = (arr = []) => {
    const result = [];
    for (let i = 0; i < arr.length; i += 3) {
        result.push(arr.slice(i, i + 3));
    }
    return result;
}

//Second way

export const splitArray2 = (arr = []) => {
    return arr.reduce((result, item, index) => {
        if (index % 3 === 0) {
            result.push([]);
        }
        result[result.length - 1].push(item);
        return result;
    }, []);
}

//Third way 

export const splitArray3 = (arr = []) => {
    const arr2 = [];
    arr.forEach((item, index) => {
        if (index % 3 === 0) {
            arr2.push([]);
        }
        arr2[arr2.length - 1].push(item);
    });
    return arr2;
}

//Reverse each word in the array 

//First way

export const reverseWords1 = (arr = []) => {
    const arr2 = [];
    for (let i = 0; i < arr.length; i++) {
        arr2.push(arr[i].split("").reverse().join(""));
    }
    return arr2;
}

//Second way

export const reverseWords2 = (arr = []) => {
    return arr.reduce((result, item, index) => {
        result.push(arr[index].split("").reverse().join(""));
        return result;
    }, []);
}

//Third way

export const reverseWords3 = (arr = []) => {
    const result = [];
    arr.filter((item, index) => {
        result.push(arr[index].split("").reverse().join(""));
    });
    return result;
}

//Convert full names into initials 

//First way

export const initialsName1 = (arr = []) => {
    return arr.map(item => {
        const words = item.split(" ");
        return words[0][0].toUpperCase() + "." +
            words[1][0].toUpperCase() + ".";
    });
};

//Second way

export const initialsName2 = (arr = []) => {
    return arr.reduce((result, item) => {
        const words = item.split(" ");

        const initials = words.reduce((str, word) => {
            return str + word[0].toUpperCase() + ".";
        }, "");

        result.push(initials);
        return result;
    }, []);
};

//Third way

export const initialsName3 = (arr = []) => {
    return arr.reduce((result, item) => {
        const words = item.split(" ");

        result.push(
            words[0][0].toUpperCase() + "." +
            words[1][0].toUpperCase() + "."
        );

        return result;
    }, []);
};

//Find the first product with a total price over 1000 

//First way

export const productOver1 = (arr = []) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].price > 1000) {
            return arr[i];
        }
    }
}

//Second way

export const productOver2 = (arr = []) => {
    return arr.reduce((result, item) => {
        if (item.price > 1000) {
            return item;
        }
        return result;
    }, {});
}

//Third way

export const productOver3 = (arr = []) => {
    let result = {};
    result = arr.filter(item => item.price > 1000)[0];
    return result;
}

//Find words with 5 letters or more and sort them 

//First way

export const wordsWith5Letters1 = (arr = []) => {
    const arr2 = [];
    arr.forEach(word => {
        if (word.length >= 5) {
            arr2.push(word);
        }
    });
    return arr2;
}

//Second way

export const wordsWith5Letters2 = (arr = []) => {
    return arr.filter(item => item.length >= 5);
};

//Third way

export const wordsWith5Letters3 = (arr = []) => {
    return arr.reduce((result, item) => {
        if (item.length >= 5) {
            result.push(item);
        }
        return result;
    },);
};