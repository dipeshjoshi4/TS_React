//? Valid Anagram Problem (LeetCode 242): Checking String Checking String

//-Given two strings s and t, return true if t is an anagram of s, and false otherwise.

//?Example 1:
//Input: s = "anagram", t = "nagaram"
//Output: true

//?Example 2:
//Input: s = "rat", t = "car"
//Output: false


//?What is Anagram ?
// means same  no of charcters.
// means same charcters
// no new charcters
// charcters series will be

//if anagram -> ture otherwise is false

let s = "anagram";
let t = "nagaram";

var isAnagram = function (s, t) {

    if (s.length !== t.length) return false; //Length matching

    let freqMap = new Map() //Make one D.s.

    for (ch of s) {
        freqMap.set(ch, (freqMap.get(ch) || 0) + 1);
    }
    //check every string each charcter no of count if a = 3 n = 1 g = 1
    //ch in if its new then 0+1 and if its old then 1+1=2 again come same charcter then 2+1}   

    for (ch of t) {
        if (!freqMap.has(ch)) return false;  //- if t dotn have string means basically ch not have or null or undefiend have then false
        const left = freqMap.get(ch) - 1     //- check the charcter string  if that chartcer come
        if (left === 0) freqMap.delete(ch)  //-  it will at the end became 0 means Anagram then delete ch
        else (freqMap.set(ch, left))       //-   if a 2 time then 
    }
    return freqMap.size === 0;
}

const res = isAnagram(s, t)
console.log(res);

// loop is not nested so  = O(n) time complexity
// only one ds use so  = O(n) space complexity