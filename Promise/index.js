const colorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.getElementById('hi').style.color = color;
            console.log(color)
            resolve();
        }, delay)
    })
}

colorChange('red', 1000)
    .then(() => colorChange('orange', 1000))
    .then(() => colorChange('blue', 1000))


var promise = new Promise(function (resolve, reject) {
    const x = prompt("Enter a string")
    const y = prompt("Enter another string")
    if (x === y) {
        resolve();
    } else {
        reject();
    }
});

promise.
    then(function () {
        console.log('Success');
    }).
    catch(function () {
        console.log('Some error has occurred');
    });

