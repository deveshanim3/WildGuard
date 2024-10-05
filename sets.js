function createTwoSetsOfEqualSum(n) {
    // Divide the numbers 1,2,...,n into two sets/arrays of equal sum.
    // If it's not possible, return [].
    let sum=(n*(n+1))/2
    if (sum%2!==0) {
        return []
    }else if(sum%2==0){
        let divide=sum/2
        let set1=[]
        let set2=[]
        for (let i = n; i > 0; i--) {
            if (divide>=i) {  
                set1.push(i)
                divide-=i
            }else{
                set2.push(i)
            }
        }return [set1,set2]
    }    
}
console.log(createTwoSetsOfEqualSum(20))
