//  Write a function called collectStrings which accepts an object and returns an array of all the values in the object that have a typeof string


//helper method recursion
function collectString(obj) {
    let stringsArr = []

    function gatherString(o) {
        for (const key in o) {
            if (typeof o[key] === 'object') {
                return gatherString(o[key])
            } else {
                stringsArr.push(o[key])
            }

        }

    }
    gatherString(obj)
    console.log(stringsArr)


}




const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

collectString(obj) // ["foo", "bar", "baz"])

