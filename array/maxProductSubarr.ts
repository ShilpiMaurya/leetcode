//https://leetcode.com/problems/maximum-product-subarray/description/

const maxProduct=(nums: number[]):number=>{
    if(!nums || nums.length===0){
       return 0
    }
    let ans = 0;
    if(nums.length===1){
        return nums[0]
    }
    let currentProduct =1
    for (let i=0;i<nums.length;i++){
        if(nums[i]!==0){
            currentProduct= currentProduct*nums[i]
            ans = Math.max(ans, currentProduct)
        }else{
            currentProduct=1
        }
    }
    currentProduct =1
    for (let i=nums.length-1;i>=0;i--){
        if(nums[i]!==0){
            currentProduct= currentProduct*nums[i]
            ans = Math.max(ans, currentProduct)
        }else{
            currentProduct=1
        }
    }
    return ans;
}

console.log(maxProduct([2,3,-2,4]))
console.log(maxProduct([-2,0,-1]))
console.log(maxProduct([0,2]))