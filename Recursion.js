/* 
resolve Fibonacci using recursion
*/
function resFibonacci(n) {
    var fibArr;
    function fiboHelper(i) {
        if (i < 2) {
            //i = 0
            //i = 1
            return i;
        } else {
            return fiboHelper(i - 2) + fiboHelper(i - 1);
        }
    }
    fibArr = fiboHelper(n)
    return fibArr;
}
console.log(resFibonacci(7))

/*
find the Factorial

4! = 1*2*3*4 = 24
5! = 1*2*3*4*5 = 120
*/
function factorialFind(n){
    var result= 1
    function getFactorial(limit){
      if(limit > n){
        return;
      }
        result *= limit
        console.log(limit)
      getFactorial(limit+1)
        // console.log(limit)
    }
    getFactorial(1)
    return result;
  }
  console.log(factorialFind(3));
  console.log(factorialFind(5));