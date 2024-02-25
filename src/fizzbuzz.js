function generarfizzbuzz(n){
    let FIZZ = 3;
    let BUZZ = 5;
    let result = "";
    
for (let i = 1; i <= n; i++) 
{   
    if (i%FIZZ === 0 && i%BUZZ === 0) 
    {
        result += "FIZZBUZZ ";
    }
    else
    {
        if (i % FIZZ === 0) 
        {
         result += "FIZZ ";
        }
        else 
        {
            if (i % BUZZ === 0) 
            {
                result += "BUZZ ";
            }
            else
            {
                result += i + " ";
            }
        }
    }
     
}  
return result;
   
}
export default generarfizzbuzz;