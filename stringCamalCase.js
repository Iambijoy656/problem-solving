var camelSentence = function camelSentence(str) {
    const normalization = str.replace(/[^a-zA-Z0-9]+(.)/g, function (match, chr) {
        const m = match.toUpperCase();
        console.log(m);
        return chr.toUpperCase();

    })
    return normalization;

}

console.log(camelSentence("Daniel LikeS-coding"
));