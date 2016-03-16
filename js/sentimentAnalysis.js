// Sentiment Analysis

var sentiment = require('sentiment');

function sentimentAnalysis(socialObject){
    var messageScore = sentiment(socialObject["text"])
    return var sentimentAndTime = {
        "sentiment": messageScore, "time": socialObject["time"]
    }
}