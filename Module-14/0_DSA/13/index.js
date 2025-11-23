

//?217- Contain Duplicates in Array

//- in an array if any value comes 2 times => return true otherwise false

// let nums = [1, 2, 3, 1] //?Output -> true

// let nums2 = [1, 2, 3, 4] //?Output -> false

// let nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2] //?Output -> true


var containDuplicates = function () {

    let seen = new Set();

    for (let num of nums) {
        if (seen.has(num)) {
            return true
        }
        seen.add(num)
    }
    return false

}
console.log(containDuplicates(nums))
