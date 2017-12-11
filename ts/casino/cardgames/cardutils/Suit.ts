class Suit {
    private static values: Suit[] = [];
    public static HEARTS: Suit = new Suit("♥");
    public static DIAMONDS: Suit = new Suit("♦");
    public static CLUBS: Suit = new Suit("♣");
    public static SPADES: Suit = new Suit("♠");

    private value: string;

    constructor(value: string) {
        this.value = value;
        Suit.values.push(this);
    }

    public getValue(): string {
        return this.value;
    }

    public static getValues(): Suit[] {
        return Suit.values;
    }
}