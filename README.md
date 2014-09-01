AsyncBatch
==========

AsyncBatch is a java script "class" for running simultaneous batches of asynchronous functions.  To use AsyncBatch, you must use it with async functions that accept a single argument of type object, which contains a "success" field.  It can be used with $.ajax very naturally, but it also will work for any async functions which have the appropriate type of argument.

The basic format is as follows:

    var batch = new AsyncBatch;
    
    batch.add(asyncFunction, {
       success: function(response) {
           ...
       }
    }
    
    batch.add(anotherFunction, { ... })
    
    batch.add($.ajax, {
        url: 'http://example.com',
        success: function(response) { ... },
        error: function(e) { ... }
    });
    
    batch.run(function() { 
        console.log('done') 
    });
