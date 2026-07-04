// TODO: Is array copied ?

let fruits = ["Apples", "Pear", "Orange"];

// Push a new value in to the "copy"
let shoppingCart = fruits;
shoppingCart.push("Banana");

console.log(fruits.length); // Should be 4

// TODO: Array operations

const styles = ["Jazz", "Blues"];

styles.push("Rock-n-Roll"); // Append to the end
styles[Math.floor(styles.length/2)] = "Classics";
console.log(styles.shift());
styles.unshift(...["Rap", "Reggae"]);

// TODO: A maximal subarray
/**
 *  Find the contiguous subarray of arr with the maximal sum of items
 *  and return that sum
 * @param {number[]} arr
 * @return {number}
 */
function getMaxSubSum(arr) {
	let partialSum = 0;
	let maxSum = 0;

	for(const item of arr) {
		partialSum += item;
		maxSum = Math.max(partialSum, maxSum);

		if (partialSum < 0) {
			partialSum = 0;
		}
	}

	return maxSum;
}

console.log("Sub sum:",getMaxSubSum([-1, 2, 3, -9]));
console.log("Sub sum:",getMaxSubSum([2, -1, 2, 3, -9]));
console.log("Sub sum:",getMaxSubSum([-1, 2, 3, -9, 11]));
console.log("Sub sum:",getMaxSubSum([-2, -1, 1, 2]));
console.log("Sub sum:",getMaxSubSum([100, -9, 2, -3, 5]));
console.log("Sub sum:",getMaxSubSum([1, 2, 3]));