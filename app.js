var newArr = [];

function yuGi(n) {
    var not = true;
    for (i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            newArr.push("yu");
            not = false;
        } if (i % 3 === 0) {
            newArr.push("gi");
            not = false;
        } if (i % 5 === 0) {
            newArr.push("oh");
            not = false;
        } if (i % 2 === 0 && i % 3 === 0) {
            newArr.push("yu-gi");
            not = false;
        } if (i % 2 === 0 && i % 5 === 0) {
            newArr.push("yu-oh");
            not = false;
        } if (i % 3 === 0 && i % 5 === 0) {
            newArr.push("gi-oh");
            not = false;
        } if (i % 2 === 0 && i % 3 === 0 && i % 5 === 0) {
            newArr.push("yu-gi-oh");
            not = false;
        } if (not = false) {
            newArr.push(i);
        }
    }
    return newArr;
}

console.log(yuGi(10));

newArr = []
function yuGi2(n) {
    for (i = 1; i <= n; i++) {
        if (i % 2 == 0 && i % 3 == 0 && i % 5 == 0) {
            newArr.push("yu-gi-oh")

        }
        else if (i % 3 == 0 && i % 5 == 0) {
            newArray.push("gi-oh")

        }
        else if (i % 2 == 0 && i % 5 == 0) {
            newArr.push("yu-oh")
        }
        else if (i % 2 == 0 && i % 3 == 0) {
            newArr.push("yu-gi")
        }
        else if (i % 5 == 0) {
            newArr.push("oh")
        }
        else if (i % 3 == 0) {
            newArr.push("gi")
        }
        else if (i % 2 == 0) {
            newArr.push("yu")

        } else {
            newArr.push(i)
        }
    }

    return newArr
}

console.log("")

console.log(yuGi2(10))
