const coding = ["java", "javascript", "cpp", "python"] 

coding.forEach(function(val) {
        // console.log(val)
})

coding.forEach((val, index, arr) => {
    // console.log(val, index, arr)
})

function printme(item) {
    console.log(item);
}

// coding.forEach(printme)


//

const myarr = [
    {
        languageName : "javascript",
        languagefileName: "js"
    },
    {
        languageName : "java",
        languagefileName : "j"
    },
    {
        languageName : "python",
        languagefileName : "py"
    }

]

myarr.forEach(function(item) {
        // console.log(item)
})