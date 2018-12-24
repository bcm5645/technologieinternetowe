class Użytkownik {
    constructor(Nazwa, Hasło, Punkty) {
        this.nazwa = Nazwa;
        this.hasło = Hasło;
        this.punkty = Punkty;
    }
    get PokażNazwę() { return this.nazwa; }
    get PokażHasło() { return this.hasło; }
    get PokażPunkty() { return this.punkty; }
}


var Użytkownicy = [];

Użytkownicy.push(new Użytkownik("Wiktor", "mar", 14586));
Użytkownicy.push(new Użytkownik("Józek", "gil", 11878));
Użytkownicy.push(new Użytkownik("Paweł", "fir", 9981));
Użytkownicy.push(new Użytkownik("Marcin", "kru", 9091));
Użytkownicy.push(new Użytkownik("Adrian", "les", 7812));
