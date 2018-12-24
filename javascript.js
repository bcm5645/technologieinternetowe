//let StanKonta = 1459;

var ZarejestrowaneParagony = [ "ABC12345678901233", "ABC0987654321234", "ABC11223344556677", "ABC09876543210987" ]; 

class Nagroda {
    constructor(Nazwa,Cena){
        this.nazwa = Nazwa;
        this.cena = Cena;
    }
    get PokażNazwę() { return this.nazwa; }
    get PokażCenę() { return this.cena; }}

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

  class Użytkownik {
    constructor(Nazwa,Hasło,Punkty){
        this.nazwa = Nazwa;
        this.hasło = Hasło;
        this.punkty = Punkty;
    }
    get PokażNazwę() { return this.nazwa;}
    get PokażHasło() { return this.hasło;}
    get PokażPunkty() { return this.punkty;}
}

var ZalogowanyUżytkownik;
var Użytkownicy = [];

Użytkownicy.push(new Użytkownik("Wiktor", "mar", 14586));
Użytkownicy.push(new Użytkownik("Józek", "gil", 11878));
Użytkownicy.push(new Użytkownik("Paweł", "fir", 9981));
Użytkownicy.push(new Użytkownik("Marcin", "kru", 9091));
Użytkownicy.push(new Użytkownik("Adrian", "les", 7812));

function login()
{
    const user = document.getElementById("inputusername").value;
    const pass = document.getElementById("inputpassword").value;

    Użytkownicy.forEach(element => {
        if(user == element.PokażNazwę)
        {
            if(pass == element.PokażHasło)
            {
                ZalogowanyUżytkownik = element;
            }
        }
    });

    if(ZalogowanyUżytkownik != undefined)
    {
        ShowAcount();
        //window.alert("Zalogowano użytkownika " + ZalogowanyUżytkownik.PokażNazwę);
            // window.location = "main.html";
    }
    else
        window.alert("Błąd logowania");
}

function start() 
{
    //if(ZalogowanyUżytkownik != undefined)
        ShowAcount();
}

function ShowPrizes()
{
    let Message="";
    let Buttons="";

    for(let i = 0; i < Nagrody.length; i++)
    {
        Message += "Nagroda " + (i+1) + ": " + Nagrody[i].PokażNazwę + " kosztuje " + Nagrody[i].PokażCenę + " punktów <br>"
        if(ZalogowanyUżytkownik.PokażPunkty > Nagrody[i].PokażCenę)
            Buttons += "<input type=\"button\" value=\"Zamów " + Nagrody[i].PokażNazwę + "\" onclick=\"OrderPrize(" + i + ")\"> <br>"
        else
            Buttons += "<input type=\"button\" value=\"Zamów " + Nagrody[i].PokażNazwę + "\" onclick=\"OrderPrize(" + i + ")\" disabled> <br>"

    } 
    
    document.getElementById("NagrodyOpisy").innerHTML = Message;
    document.getElementById("NagrodyPrzyciski").innerHTML = Buttons;
}



function OrderPrize(prizenumber)
{
    const Cena = Nagrody[prizenumber].PokażCenę
    let Message;
    if(ZalogowanyUżytkownik.PokażPunkty >= Cena)
    {
        ZalogowanyUżytkownik.punkty -= Cena;
        Message = "Zamawiasz " + Nagrody[prizenumber].PokażNazwę;
    }
    else
        Message = "Masz za mało punktów żeby zamówić tę nagrodę";

    document.getElementById("Zamówienie").innerHTML = Message;
    ShowAcount();
    ShowPrizes(); // żeby zaktualizować dostępność nagród
}

function InputReceipt()
{
    const ReceiptNumber = "<input id = \"receiptnumber\" type = \"text\" value=\"Nr paragonu\">";
    const ReceiptTotalSum = "<input id = \"receipttotalamount\" type = \"number\" value=\"Wartość paragonu\">";
    const Button = "<input id = \"ApplyButton\" type=\"button\" value=\"Dodaj\" onclick=\"AddReceipt()\">";   
    ClearSite();
    document.getElementById("DodajParagon").innerHTML = ReceiptNumber + ReceiptTotalSum + Button
}

function AddReceipt()
{
    const AddReceiptControl = document.getElementById("DodajParagon");
    AddReceiptControl.style.display = "block";

    const ReceiptNumberControl = document.getElementById("receiptnumber");
    const ReceiptTotalSumControl = document.getElementById("receipttotalamount");
    
    const ReceiptTotalSum=parseInt(ReceiptTotalSumControl.value);
    const ProperReceipt = ValidateReceipt(ReceiptNumberControl.value);

        if(ProperReceipt)
        {
            if(ReceiptTotalSum <= 10000 && ReceiptTotalSum > 0)
            {
                ZalogowanyUżytkownik.punkty += ReceiptTotalSum;
                ZarejestrowaneParagony.push(ReceiptNumberControl.value);
                ReceiptNumberControl.value = "";
                ReceiptTotalSumControl.value = 0;
                AddReceiptControl.style.display = "none";
            }
            else
                window.alert("Nieprawidłowa kwota")
        }
        else
            window.alert("Ten paragon jest już zarejestrowany");


    ShowAcount();
}

function ValidateReceipt(receiptnumber)
{
    var validated = true;

    if(receiptnumber.startsWith("ABC") && receiptnumber.length == 17)
    {
        ZarejestrowaneParagony.forEach(element => {
            if(element == receiptnumber)
            {
                validated = false;
            }
        });
    }
    else 
        window.alert("Niepoprawny numer paragonu");

    return validated;
}

function ClearSite()
{
    document.getElementById("NagrodyOpisy").innerHTML = "";
    document.getElementById("NagrodyPrzyciski").innerHTML = ""
    document.getElementById("Zamówienie").innerHTML = ""
}
