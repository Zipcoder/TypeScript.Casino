class Deck {
    private cards: Card[] = [];

    constructor() {
        for(let rank of Rank.getValues()) {
            for(let suit of Suit.getValues()) {
                this.push(new Card(suit, rank));
            }
        }
    }

    public isEmpty(): boolean {
        return this.cards.length == 0;
    }

    public push(card: Card) {
        this.cards.push(card);
    }

    public pop(): Card {
        return this.cards.pop();
    }

    public peek(): Card {
        return this.cards[0];
    }

    public shuffle() {
        ArrayUtils.shuffle(this.cards);
    }
}