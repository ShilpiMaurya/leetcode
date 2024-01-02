//https://leetcode.com/problems/maximum-subarray/description/

const maxSubArr = (nums:number[]):number=>{
    if(!nums || nums.length === 0){
        return 0
    }
    let maxSumSoFar = nums[0]
    let currSum = nums[0]

    for (let i=1;i<nums.length; i++){
        currSum = Math.max(nums[i], currSum+nums[i])
        maxSumSoFar = Math.max(maxSumSoFar, currSum)
    }
return maxSumSoFar;
}

console.log(maxSubArr([-2,1,-3,4,-1,2,1,-5,4]))
console.log(maxSubArr([1]))
console.log(maxSubArr([5,4,-1,7,8]))