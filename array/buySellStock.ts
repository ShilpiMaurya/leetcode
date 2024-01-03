//https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

const maxProfit =(prices: number[]): number=>{
    if(!prices || prices.length===0) {
        return 0;
    }
let result:number = 0;
let minProfit = prices[0];
for (let i=1; i<prices.length; i++){
result = Math.max(result, prices[i]-minProfit) 
 minProfit = Math.min(minProfit, prices[i]) 
}
return result
}
console.log(maxProfit([7,1,5,3,6,4]))
console.log(maxProfit([7,6,4,3,1]))