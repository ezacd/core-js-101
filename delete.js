function toNumber(value, def) {
    return +value || def
}

console.log(toNumber(null, 1))