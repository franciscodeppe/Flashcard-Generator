var ClozeCard = function(text, cloze) {
    this.cloze = cloze;
    this.fullText = text;
    this.partial = this.fullText.replace(this.cloze, "... ")
}

ClozeCard.prototype.printCloze = function() {
    if (this.partial === this.fullText) {
        console.log("oops!\n" + this.cloze + " doesn't appear in " + this.fullText)
    } else {
        console.log(this.partial)
    }
};

var firstPresidentCloze = new ClozeCard("George Washington was the first president of United State", "Washington")

firstPresidentCloze.printCloze()

module.exports = ClozeCard;
