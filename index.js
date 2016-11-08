// Selects the closes ratio
module.exports = function(target, available) {

	available = available || [[3,2],[4,3],[16,9],[3,4],[1,1]];

	return available.map((option)=>{
		return {
			ratio: option,
			diff: Math.abs(option[0]/option[1] - target[0]/target[1])
		};
	}).reduce((selected, option) => {
		if (!selected || option.diff < selected.diff) {
			return option;
		}
		return selected;
	}, null).ratio;
};