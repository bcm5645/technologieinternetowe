var ZalogowanyUżytkownik;

class User {
    constructor(Nazwa, Hasło, Punkty) {
        this.nazwa = Nazwa;
        this.hasło = Hasło;
        this.punkty = Punkty;
    }
    get PokażNazwę() { return this.nazwa; }
    get PokażHasło() { return this.hasło; }
    get PokażPunkty() { return this.punkty; }
}

var Users = [];

Users.push(new User("Wiktor", "mar", 14586));
Users.push(new User("Józek", "gil", 11878));
Users.push(new User("Paweł", "fir", 9981));
Users.push(new User("Marcin", "kru", 9091));
Users.push(new User("Adrian", "les", 7812));

function login()
{
    ZalogowanyUżytkownik = null;
    const user = document.getElementById("inputusername").value;
    const pass = document.getElementById("inputpassword").value;

    Users.forEach(element => {
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
        ShowAccount();
        HideLoginDiv();
        ShowMenuDiv();
        ShowLogoutDiv();
    }
    else
        window.alert("Błąd logowania");
}

function logout()
{
    ZalogowanyUżytkownik = null;
    HideAll();
    ShowLoginDiv();
}