AsyncBatch = function() {

	var asyncCount = 0,
		requests = [];

	this.add = function(method, params) {
		requests.push({
			method: method,
			params: params
		});
	}

	this.run = function(callback) {

		var asyncCount = 0;

		var checkAsync = function() {
			if( ++asyncCount >= requests.length ) {
				callback();
			}
		}

		for( var i in requests ) {
			(function(){			
				var onSuccess = requests[i].params.success.bind({});

				requests[i].params.success = function() {
					onSuccess();
					checkAsync();
				}
			})();

			requests[i].method(requests[i].params);
		}

	}
}
