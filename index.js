function writeCards(names, type) {
    let thanks = []
    for (let i = 0; i < names.length; i++) {
        thanks.push(`Thank you, ${names[i]}, for the wonderful ${type} gift!`)
    }
    return thanks
}

function countDown(num) {
    while (num > -1) {
        console.log(num)
        num--
    }
}