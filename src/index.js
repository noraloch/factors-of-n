/**
 * 
 * @param {*} n A long integer
 * @returns An array of factors for given input n
 */
function factors(n) {
    
    // can't handle n <= 0, function to throw

    if (n <= 0) throw 'Input n must be greater than 0';
    // 1 and the number itself
    let factors = [1, n]
    
    // square root is the biggest factor, when we consider inverse factors
    const squareRoot = Math.sqrt(n);

    const isEven = n % 2 === 0;
    
    // odd numbers cannot have an even factor
    const increment = isEven ? 1 : 2; 
    
    for (let f = isEven ? 2 : 3; f <= squareRoot; f += increment) {
        if (n % f === 0) {
            factors.push(f);
            let inverseF = n / f;
            if (inverseF !== f) {
                factors.push(inverseF);
            }
        }    
    }
    factors.sort((a, b) => a - b)
    
    return factors;
}


module.exports.factors = factors;