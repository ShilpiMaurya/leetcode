//https://leetcode.com/problems/move-zeroes/description/

const moveZeroes = (nums: number[]) => {
  let nonZeroPointer = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[i], nums[nonZeroPointer]] = [nums[nonZeroPointer], nums[i]];
      nonZeroPointer++;
    }
  }
  return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12]));
