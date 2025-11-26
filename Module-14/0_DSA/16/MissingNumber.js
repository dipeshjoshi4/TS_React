// Understanding the LeetCode Missing Number Problem(LeetCode 268)

// nums = [3, 0, 1]  => 2

//nums = [0,1] => 2

var missingNumber = function (nums) {
    const n = nums.length;
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = nums.reduce((acc, num) => acc + num, 0)
    return expectedSum - actualSum;
}

console.log(missingNumber([3, 0, 1])); //2
console.log(missingNumber([0, 1])); //2
console.log(missingNumber([0, 1, 5, 3, 4])); //2
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])); //8

// t.s. => O(n)
//s.c. => O(1)