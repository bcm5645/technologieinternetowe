//let StanKonta = 1459;

var ZarejestrowaneParagony = [ "ABC12345678901233", "ABC0987654321234", "ABC11223344556677", "ABC09876543210987" ]; 

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

<<<<<<< HEAD
function InputReceipt()
=======
function ShowAcount()
{
    document.getElementById("StanKonta").style.display = "block";
    document.getElementById("StanKonta").innerHTML = "Masz " + ZalogowanyUżytkownik.PokażPunkty + " punktów";
}

function ShowReceiptInput()
>>>>>>> sss
{
    document.getElementById("DodajParagon").style.display = "block";
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

        if(ProperReceipt == true)
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

    ShowAcount();
}

function ValidateReceipt(receiptnumber)
{
    var validated = false;

    if(receiptnumber.startsWith("ABC") && receiptnumber.length == 17)
    {
        validated = true;
        ZarejestrowaneParagony.forEach(element => {
            if(element == receiptnumber)
            {
                validated = false;
                window.alert("Ten paragon był już rejestrowany")
            }
        });
    }
    else
    {
        window.alert("Niepoprawny numer paragonu");
    }

    return validated;
}

function ClearSite()
{
    document.getElementById("NagrodyOpisy").innerHTML = "";
    document.getElementById("NagrodyPrzyciski").innerHTML = ""
    document.getElementById("Zamówienie").innerHTML = ""
}
