
/*

You are given an array of strings called *products*, where each string represents a product purchased on a given day by customers of an e-commerce platform.
The company needs to determine the **featured product for the next day** based on the purchase count.
Your task is to return the **featured product**.

* “greenPants” and “orangeShoes” were purchased **once**.
* “redShirt” and “blackPants” were each purchased **2 times**.
* After ordering the tied products alphabetically ascending:
  “blackPants”, “redShirt” → **“redShirt”** is the last product listed.
* “redShirt” is the featured product for the following day.

`products = ["redShirt", "greenPants", "redShirt", "orangeShoes", "blackPants", "blackPants"]`
`products = ["yellowShirt", "redHat", "blackShirt", "bluePants", "redHat", "pinkHat", "blackShirt", "yellowShirt", "greenPants","greenPants"]`

---

If you want, I can also write the solution code for this problem.


*/

function feturedProducts(products) {

    const freq = new Map();

    for (let p of products) {
        freq.set(p, (freq.get(p) || 0) + 1)
    }
    console.log(freq); // redshirt =>2 || greenpant => 1 || ornageshoes => 1 || blackpants =>2

    const maxfreq = Math.max(...freq.values()); //geeting maximum number of sell. based on this frequency we put conditions


    const MaxFreqProducts = [];
    for ([products, values] of freq.entries()) {
        if (values === maxfreq) {
            MaxFreqProducts.push(products)
        }
    }
    console.log(MaxFreqProducts); //["redshirt","blackpant"]

    MaxFreqProducts.sort()

    return MaxFreqProducts[MaxFreqProducts.length - 1]
}


const result1 = feturedProducts(["redShirt", "greenPants", "redShirt", "orangeShoes", "blackPants", "blackPants"])
const result2 = feturedProducts(["yellowShirt", "redHat", "blackShirt", "bluePants", "redHat", "pinkHat", "blackShirt", "yellowShirt", "greenPants", "greenPants"]);
console.log("fetured Products is", result1);
console.log("fetured Products is", result2);

//one loop one ds => O(n) => t.C. => 2 time same loop O(n) => if i use for into for then it will became O(n)
//one loop one ds => O(n) => s.C.
