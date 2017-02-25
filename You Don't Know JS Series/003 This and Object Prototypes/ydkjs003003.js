function baz(){
    //call-stack is 'baz'
    //so our call-site is in the global scope
    
    console.log("baz");
    bar(); // <-- call-site for bar
}

function bar(){
    //call-stack is: 'baz' -> "bar"
    //so, our call-site is in 'baz'

    console.log("bar");
    foo(); // Call-site for 'foo'
}

function foo(){
    //call-site is: 'baz' -> 'bar' -> 'foo'
    //so, our call-site is in 'bar'

    console.log("foo");
}

baz(); // Call-site for 'baz'