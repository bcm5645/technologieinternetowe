//let StanKonta = 1459;

var ZarejestrowaneParagony = [ "ABC12345678901233", "ABC0987654321234", "ABC11223344556677", "ABC09876543210987" ]; 
var ZalogowanyUżytkownik;

var LoginDiv;

var WartośćKoszyka = 0;

function login()
{
    ZalogowanyUżytkownik = null;
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
    
    SliderChangeImage();
    LoginDiv = document.getElementById("login")
    ShowAcount();
}

function ClearSite()
{
    document.getElementById("NagrodyOpisy").innerHTML = "";
    document.getElementById("NagrodyPrzyciski").innerHTML = ""
    document.getElementById("Zamówienie").innerHTML = ""
}
