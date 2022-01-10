function isPossible(stringParams) {
    const combination = ['one', 'who', 'two', 'bob', 'add', 'owl', 'fab', 'den', 'mia', 'tat']
    const flag = [false, false, false]

    combination.forEach((item, index) => {
        if(stringParams[0] == item[0]) {
            flag[0] = true
        }

        if(stringParams[1] == item[1]) {
            flag[1] = true
        }

        if(stringParams[2] == item[2]) {
            flag[2] = true
        }
    })

    if(flag[0] && flag[1] && flag[2]) {
        return 'Possible'
    } else {
        return 'Not possible'
    }

}

if(process.argv[2].length == 3){
    console.log(isPossible(process.argv[2]))
}