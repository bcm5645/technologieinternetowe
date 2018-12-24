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

function ShowPrizes()
{
    let Message="";
    let Button="";

    for(let i = 0; i < Nagrody.length; i++)
    {
        let IdName = "reward" + (i+1);
        document.getElementById(IdName).innerHTML = Nagrody[i].PokażNazwę + " = " + Nagrody[i].PokażCenę + " punktów <br>";
        if(ZalogowanyUżytkownik.PokażPunkty >= Nagrody[i].PokażCenę)
            Button = "<input type=\"number\" min = \"0\" max = \"100\" value=\"0\"> <br>"
            //Buttons = "<input type=\"button\" class = \"orderbutton\" value=\"Zamów " + Nagrody[i].PokażNazwę + "\" onclick=\"OrderPrize(" + i + ")\"> <br>"
        else
            Button = "<input type=\"number\" min = \"0\" max = \"100\" value=\"Zamów\" disabled> <br>"
        //Buttons = "<input type=\"button\" value=\"Zamów " + Nagrody[i].PokażNazwę + "\" onclick=\"OrderPrize(" + i + ")\" disabled> <br>"

        IdName = "price" + (i+1);
        document.getElementById(IdName).innerHTML = Button;
    } 
}

function OrderPrize(prizenumber)
{
    const Cena = Nagrody[prizenumber].PokażCenę
    let Message;
    if(ZalogowanyUżytkownik.PokażPunkty >= Cena)
    {
        ZalogowanyUżytkownik.punkty -= Cena;
        Message = Nagrody[prizenumber].PokażNazwę + "<br>";
    }
    else
        Message = "Masz za mało punktów żeby zamówić tę nagrodę";

    document.getElementById("CartContent").innerHTML += Message;
    ShowAcount();
    ShowPrizes(); // żeby zaktualizować dostępność nagród
}