function add(a, b ,callback) {
    setTimeout(() => {
        console.log(a+b);
    },2000)
}

add( 1, 4, (sum) => {
    console.log(sum);
})


