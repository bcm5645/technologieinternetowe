//let StanKonta = 1459;

var ZarejestrowaneParagony = [ "ABC12345678901233", "ABC0987654321234", "ABC11223344556677", "ABC09876543210987" ]; 
var ZalogowanyUżytkownik;

var LoginDiv, MenuDiv, AccountDiv, RewardsDiv, PricesDiv;

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

function logout()
{
    ZalogowanyUżytkownik = null;
    HideAll();
}

function start() 
{
    //if(ZalogowanyUżytkownik != undefined)
    
    SliderChangeImage();
    //showDivs(1);
    LoginDiv = document.getElementById("Login");
    MenuDiv = document.getElementById("Menu");;
    AccountDiv = document.getElementById("Account");
    RewardsDiv = document.getElementsByClassName("Rewards");
    PricesDiv = document.getElementsByClassName("Prices");

    ShowAcount();
}

function HideAll()
{
    HideAccountDiv();
    HideRewardsDiv()
    HideMenuDiv();
    HideLogin();
}

function HideLogin() { LoginDiv.style.display = "none"; }
function HideAccountDiv() { AccountDiv.style.display = "none"; }
function HideMenuDiv() { MenuDiv.style.display = "none"; }

function HideRewardsDiv() 
{
    RewardsDiv.forEach(element => { element.style.display = "none"; }); 
    PricesDiv.forEach(element => { element.style.display = "none"; });         
}
