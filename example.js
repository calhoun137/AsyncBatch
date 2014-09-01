$(function() {

	var batch = new AsyncBatch;

	var asyncFunction = function(params) {
		setTimeout(params.success, params.timer);
	}
	
	batch.add(asyncFunction, { 
		success: function() { 
			console.log('a'); 
		}, 
		timer: 3000 
	});

	batch.add(asyncFunction, { 
		success: function() { 
			console.log('b'); 
		}, 
		timer: 3000 
	});

	batch.add($.ajax, { 
		url: 'http://example.com',
		type: 'GET',
		success: function(response) { 
			console.log(response); 
		},
		error: function(s) {
			console.log(s);
		}
	});

	batch.run(function(){
		console.log('done');
	})
});