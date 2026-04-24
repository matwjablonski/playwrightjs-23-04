function testScope() {
    if (true) {
        //console.log(x);
        let x = 1;
    }

    
}

testScope();

for (let i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i);
    }, 100);
}