//https://leetcode.com/problems/sort-colors/description/
// 0 - red
// 1 - blue
// 2 - yellow
// l    r
// [0,1,2]
const sortColors = (nums: number[]): number[] => {
  let left: number = 0;
  let right: number = nums.length - 1;
  let i = 0;
  while (i <= right) {
    if (nums[i] === 0) {
      let temp = nums[left];
      nums[left] = nums[i];
      nums[i] = temp;
      left++;
      i++;
    } else if (nums[i] === 2) {
      let temp = nums[right];
      nums[right] = nums[i];
      nums[i] = temp;
      right--;
    } else {
      i++;
    }
  }
  return nums;
};

console.log(sortColors([2, 0, 2, 1, 1, 0]));
console.log(sortColors([2, 0, 1]));
