    //https://leetcode.com/problems/majority-element/description/
    
    const majorityElement =(nums:number[]):any=>{
        let count:any ={};
        for (let i=0;i<nums.length;i++){
            if(count[nums[i]]){
                count[nums[i]]= count[nums[i]] +1
            }else{
                count[nums[i]] =1
            }
        }
        for (let key in count){
            if(count[key]>nums.length/2){
                return parseInt(key);
            }
        }

    }

    console.log(majorityElement([3,2,3]))
    console.log(majorityElement([2,2,1,1,1,2,2]))

    