class Card {
    private suit: Suit;
    private rank: Rank;

    constructor(suit: Suit, rank: Rank) {
        this.suit = suit;
        this.rank = rank;
    }

    public getSuit(): Suit {
        return this.suit;
    }

    public getRank(): Rank {
        return this.rank;
    }
}