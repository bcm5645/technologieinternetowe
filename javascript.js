//let StanKonta = 1459;

var ZarejestrowaneParagony = [ "ABC12345678901233", "ABC0987654321234", "ABC11223344556677", "ABC09876543210987" ]; 
var ZalogowanyUżytkownik;

var LoginDiv;

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
        LoginDiv.style.display = "none";
    }
    else
        window.alert("Błąd logowania");
}

function start() 
{
    //if(ZalogowanyUżytkownik != undefined)
    LoginDiv = document.getElementById("login")
    ShowAcount();
}

function ShowPrizes()
{
    let Message="";
    let Buttons="";

    for(let i = 0; i < Nagrody.length; i++)
    {
        Message += "Nagroda " + (i+1) + ": " + Nagrody[i].PokażNazwę + " kosztuje " + Nagrody[i].PokażCenę + " punktów <br>"
        if(ZalogowanyUżytkownik.PokażPunkty >= Nagrody[i].PokażCenę)
            Buttons += "<input type=\"button\" class = \"orderbutton\" value=\"Zamów " + Nagrody[i].PokażNazwę + "\" onclick=\"OrderPrize(" + i + ")\"> <br>"
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

function ClearSite()
{
    document.getElementById("NagrodyOpisy").innerHTML = "";
    document.getElementById("NagrodyPrzyciski").innerHTML = ""
    document.getElementById("Zamówienie").innerHTML = ""
}
