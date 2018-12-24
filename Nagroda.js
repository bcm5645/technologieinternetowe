class Nagroda {
    constructor(Nazwa, Cena) {
        this.nazwa = Nazwa;
        this.cena = Cena;
    }
    get PokażNazwę() { return this.nazwa; }
    get PokażCenę() { return this.cena; }
}
var Nagrody = [];
Nagrody.push(new Nagroda("Samochód wywrotka", 120));
Nagrody.push(new Nagroda("Długopis", 8));
Nagrody.push(new Nagroda("Lizak ChupaChups", 15));
Nagrody.push(new Nagroda("Czekolada Milka duża", 30));
Nagrody.push(new Nagroda("Kubek z napisem", 90));
Nagrody.push(new Nagroda("Puzzle 300 elementów", 500));
Nagrody.push(new Nagroda("Pendrive 32GB", 650));
Nagrody.push(new Nagroda("Dysk SSD 256GB", 3000));
Nagrody.push(new Nagroda("Karma dla kotów sucha 2kg", 450));
Nagrody.push(new Nagroda("Wino musujące 'Blady Julek'", 1300));
