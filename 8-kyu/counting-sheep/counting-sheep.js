function countSheeps(arrayOfSheep) {
	return arrayOfSheep.filter((sheep) => sheep === true).length;
}

module.exports = countSheeps;
