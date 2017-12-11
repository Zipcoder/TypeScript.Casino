class Profile {
    private profileId: number;
    private name: string
    private balance: number;

    public Profile(name: string, balance: number) {
    this.name = name;
    this.balance = balance;
    this.profileId = Casino.profiles.size();
}

public printInformation(): void {
    Console.printDashes();

    Console.println("Printing profile details");
    Console.println("\tName:\t\t %s", getName());
    Console.println("\tBalance:\t %s", getBalance());
    Console.println("\tId:\t\t\t %s", getProfileId());
}

public increaseBalance(amount: number): void{
    let oldBalance = this.getBalance();
    let newBalance = oldBalance + amount;
    let deltaStr = newBalance > oldBalance ? "increased" : "decreased";

    this.setBalance(newBalance);
    PageObject.DISPLAY.append("[ %s ]'s balance has %s from [ %s ] to [ %s ]", name, deltaStr, oldBalance, newBalance);
}

public decreaseBalance(double amount): void{
    increaseBalance(amount * -1);
}

public Double createBetAmount() {
    Console.printDashes();
    double playerBalance = getBalance();
    double playerBet = Console.getLongInput("How much money would you like to bet this game, [ %s ] ?", getName());
    if (playerBet <= playerBalance) {
        return playerBet;
    } else {
        Console.println("You cannot bet more money than what is credited to your player-profile.");
        Console.println("Try inputting a valid less than [ %s ]", playerBalance);
        printInformation();
        return createBetAmount();
    }
}

public double getBalance() {
    return this.balance;
}

public String getName() {
    return this.name;
}

public Long getProfileId() {
    return this.profileId;
}

private void setBalance(double balance) {
    this.balance = balance;
}
}
