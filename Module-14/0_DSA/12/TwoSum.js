

//?Leetcode Question-1-Two Sum

// let target = 9;
// let nums = [2, 7, 11, 15]

// let target = 6;
// let nums = [3, 3]

// let target = 6;
// let nums = [3, 2, 4,]

let target = 6;
let nums = [5, 3, 2, 4, 4]


var TwoSum = function (nums, target) {

    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let targetDiff = target - nums[i]
        if (map.has(targetDiff)) {
            return [map.get(targetDiff), i]
        }
        map.set(nums[i], i)
    }
}

console.log(TwoSum(nums, target));

//Time Complex  => one loop  => O(n)
//Space Complex => map use   => O(n)