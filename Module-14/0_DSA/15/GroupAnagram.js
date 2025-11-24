
/*
Input: strs = ["eat","tea","tan","ate","nat","bat"]

Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

*/

let strs = ["eat", "tea", "tan", "ate", "nat", "bat"]


var groupAnagrams = function (strs) {

    let myMap = new Map();

    for (let i = 0; i < strs.length; i++) {

        let sortedElement = strs[i].split("").sort().join("");

        if (!myMap.has(sortedElement)) {
            myMap.set(sortedElement, [])
        }
        myMap.get(sortedElement).push(strs[i])
    }

    console.log(myMap.values());

    return Array.from(myMap.values())
}

console.log(groupAnagrams(strs));