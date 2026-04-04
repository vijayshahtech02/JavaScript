const Languages = {
    js : "javascript",
    py : "python",
    j : "java",
    rb : "ruby"
}

for(const key in Languages) {
    console.log(`${key} - ${Languages[key]}`)
}


const Programming = ["py", "js", "j", "rb"]
for(const key in Programming) {
    console.log(key)
}