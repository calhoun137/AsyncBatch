AsyncBatch
==========

A java script class for running simultaneous batches of asynchronous functions

To use AsyncBatch, you must use it with async functions that accept a single argument of type object, which contains a "success" field.

The basic format is as follows:

    var batch = new AsyncBatch;
    
    batch.add(asyncFunction, {
       data1: ...
       data2: ...
       ...
       success: function(response) {
           ...
       },
       error: function(e) { ... }
    }
    
    batch.add(anotherFunction, {
        ...
    }
    
    ...
    
    batch.run(function() { 
        console.log('done') 
    });
