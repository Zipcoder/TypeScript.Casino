class Rank {
    private static values: Rank[] = [];
    public static LOW_ACE: Rank = new Rank(1);
    public static TWO: Rank = new Rank(2);
    public static THREE: Rank = new Rank(3);
    public static FOUR: Rank = new Rank(4);
    public static FIVE: Rank = new Rank(5);
    public static SIX: Rank = new Rank(6);
    public static SEVEN: Rank = new Rank(7);
    public static EIGHT: Rank = new Rank(8);
    public static NINE: Rank = new Rank(9);
    public static TEN: Rank = new Rank(10);
    public static JACK: Rank = new Rank(10);
    public static QUEEN: Rank = new Rank(10);
    public static KING: Rank = new Rank(10);

    private value: number;

    constructor(value: number) {
        this.value = value;
        Rank.values.push(this);
    }

    public getValue(): number {
        return this.value;
    }

    public static getValues(): Rank[] {
        return Rank.values;
    }
}