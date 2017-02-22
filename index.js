function map(collection, callback) {
  var result = [];
  for (var i = 0; i < collection.length; i++) {
    result.push(callback(collection[i], i, collection));
  }
  return result;
}

var autobots = [
  { name: 'Optimus Prime', strength: 5, isTransformed: false, },
  { name: 'Ironhide', strength: 3, isTransformed: false, },
  { name: 'Bumblebee', strength: 2.5, isTransformed: false, },
  { name: 'Ratchet', strength: 1.5, isTransformed: false, },
];

var transformedAutobots = map(autobots,
	function(autobot) {
		return Object.assign({}, autobot, {
			strength: autobot.strength * 2,
    	isTransformed: true,
		});
	}
);

var transformedAutobotsWithMap = autobots.map(function (autobot) {
  return Object.assign({}, autobot, {
    strength: autobot.strength * 2,
    isTransformed: true,
  });
});
