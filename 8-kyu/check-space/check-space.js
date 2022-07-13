/*
  You have to write a function that accepts three parameters:

  'cap' is the amount of people the bus can hold excluding the driver.
  'on' is the number of people on the bus excluding the driver.
  'wait' is the number of people waiting to get on to the bus excluding the driver.

  If there is enough space, return 0, and if there isn't, return the number of passengers he can't take
*/

function enough(cap, on, wait) {
	let result = cap - (on + wait);

	if (result >= 0) {
		return 0;
	} else {
		return result - result * 2;
	}
}

module.exports = enough