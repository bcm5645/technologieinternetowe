let StanKonta = 1459;

var ZarejestrowaneParagony = [ "ABC12345678901233", "ABC0987654321234", "ABC11223344556677", "ABC09876543210987" ]; 

class Nagroda {
    constructor(Nazwa,Cena){
        this.nazwa = Nazwa;
        this.cena = Cena;
    }
    get PokażNazwę()
    {
        return this.nazwa;
    }

    get PokażCenę()
    {
        return this.cena;
    }
}

  const Nagroda1 = new Nagroda("Samochód wywrotka", 120);
  const Nagroda2 = new Nagroda("Długopis", 8);
  const Nagroda3 = new Nagroda("Lizak ChupaChups", 15);
  const Nagroda4 = new Nagroda("Czekolada Milka duża", 30);
  const Nagroda5 = new Nagroda("Kubek z napisem", 90);
  const Nagroda6 = new Nagroda("Puzzle 300 elementów", 500);
  const Nagroda7 = new Nagroda("Pendrive 32GB", 650);
  const Nagroda8 = new Nagroda("Dysk SSD 256GB", 3000);
  const Nagroda9 = new Nagroda("Karma dla kotów sucha 2kg", 450);
  const Nagroda10 = new Nagroda("Wino musujące 'Blady Julek'", 1300);

  const Nagrody = [ Nagroda1, Nagroda2, Nagroda3, Nagroda4, Nagroda5, Nagroda6, Nagroda7, Nagroda8, Nagroda9, Nagroda10 ];

  class Użytkownik {
    constructor(Nazwa,Hasło){
        this.nazwa = Nazwa;
        this.hasło = Hasło;
    }
    get PokażNazwę()
    {
        return this.nazwa;
    }

    get PokażHasło()
    {
        return this.hasło;
    }
}

var ZalogowanyUżytkownik;
let Użytkownicy = [];

Użytkownicy.push(new Użytkownik("Wiktor", "mar"));
Użytkownicy.push(new Użytkownik("Józek", "gil"));
Użytkownicy.push(new Użytkownik("Paweł", "fir"));
Użytkownicy.push(new Użytkownik("Marcin", "kru"));
Użytkownicy.push(new Użytkownik("Adrian", "les"));

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
            window.alert("Zalogowany");
            //document.location.replace("program.html");
            window.location.href = "program1.html";
//            window.location.href = "program.html";
    }
    else
        window.alert("Błąd logowania");
}

function start() 
{
    if(ZalogowanyUżytkownik != undefined)
        ShowAcount();
}

function Login()
{

    document.write("");
    return false;
}

function ShowPrizes()
{
    let Message="";
    let Buttons="";

    for(let i = 0; i < Nagrody.length; i++)
    {
        Message += "Nagroda " + (i+1) + ": " + Nagrody[i].PokażNazwę + " kosztuje " + Nagrody[i].PokażCenę + " punktów <br>"
        if(StanKonta > Nagrody[i].PokażCenę)
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
    if(StanKonta >= Cena)
    {
        StanKonta -= Cena;
        Message = "Zamawiasz " + Nagrody[prizenumber].PokażNazwę;
    }
    else
        Message = "Masz za mało punktów żeby zamówić tę nagrodę";

    document.getElementById("Zamówienie").innerHTML = Message;
    ShowAcount();
    ShowPrizes(); // żeby zaktualizować dostępność nagród
}

function ShowAcount()
{
    document.getElementById("Stan konta").innerHTML = "Na Twoim koncie masz " + StanKonta + " punktów";
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
    const ReceiptNumberControl = document.getElementById("receiptnumber");
    const ReceiptTotalSumControl = document.getElementById("receipttotalamount");
    
    const ReceiptTotalSum=parseInt(ReceiptTotalSumControl.value);
    const ProperReceipt = ValidateReceipt(ReceiptNumberControl.value);

        if(ProperReceipt)
        {
            if(ReceiptTotalSum <= 10000 && ReceiptTotalSum > 0)
            {
                StanKonta += ReceiptTotalSum;
                ZarejestrowaneParagony.push(ReceiptNumberControl.value);
                ReceiptNumberControl.value = "";
                ReceiptTotalSumControl.value = 0;
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