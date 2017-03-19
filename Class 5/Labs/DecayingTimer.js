function secPrint() {
    let sec = 1000;
    for (let i = 1; i < 10; i++) {
        setTimeout(function() {
            console.log(i);
        }, sec)
        sec += i * 1000
    }
}

secPrint();
