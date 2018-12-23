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
            window.location.href = "program.html";
    }
    else
        window.alert("Błąd logowania");
}