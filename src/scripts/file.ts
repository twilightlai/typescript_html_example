function displayTotalPerPerson(person: string, total: number) {
    let message: string = "Total for " + person + " is " + total;
    let game:TennisGame = new TennisGame()
    console.log(game.Score());
    document.getElementById("totalMessage").innerText = message;
}