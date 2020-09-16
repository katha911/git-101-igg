console.log("1")
console.log("2")
new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve(console.log("3"))
    }, 1000);
}).then(() => {
    console.log("4")
    console.log("5")
})
