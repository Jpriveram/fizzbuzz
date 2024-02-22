function generarfizzbuzz(n){
    let FIZZ = 3;
    let BUZZ = 5;

    if (n % FIZZ === 0) {
        return "FIZZ"
    }
    if (n === BUZZ) {
        return "BUZZ"
    }

    return n + "";
}
export default generarfizzbuzz;