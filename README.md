AsyncBatch
==========

When making multiple asynchronous function calls, there are some groups of requests which must be chained one after the other, and others which can all be executed at the same time becuase they do not depend on each other.  In the later case, it is important to be able to execute a single callback method after all of the simultaneous requests have completed.

AsyncBatch is a java script "class" designed to simplify the code for running simultaneous batches of asynchronous functions.  To use AsyncBatch, you must use it with functions that accept a single argument of type object, which contains a "success" field.  It can be used with $.ajax very naturally, but it also will work for any async functions which have the appropriate type of argument.

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
