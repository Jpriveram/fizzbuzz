function generarfizzbuzz(n){
    let FIZZ = 3;
    if (n % FIZZ === 0) {
        return "FIZZ"
    }

    return n + "";
}
export default generarfizzbuzz;