
// 2 scenario example of optimization

// - many time in application your logic works which take time it make app slow

// - many time your logic works fine but it can slow the other app component to make it slow

// so solution

// usememo hook it self jo bhi app value compuct karleta hai in cache store kar leta hai uss time unwanted function call nahi hona tha wo ho raha toh usko bhi app sortout kar sakte ho

// Mmeozaition ek input basis pe apka code chkta hai result cache main save hota hai agar dubra same input ayye toh withour code run we check if the same input answer is stored in cache{} then we can give it 