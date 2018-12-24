
function ShowReceiptInput() {
    document.getElementById("DodajParagon").style.display = "block";
    const ReceiptNumber = "<input id = \"receiptnumber\" type = \"text\" value=\"Nr paragonu\">";
    const ReceiptTotalSum = "<input id = \"receipttotalamount\" type = \"number\" value=\"Wartość paragonu\">";
    const Button = "<input id = \"ApplyButton\" type=\"button\" value=\"Dodaj\" onclick=\"AddReceipt()\">";
    ClearSite();
    document.getElementById("DodajParagon").innerHTML = ReceiptNumber + ReceiptTotalSum + Button;
}

function AddReceipt() {
    const AddReceiptControl = document.getElementById("DodajParagon");
    AddReceiptControl.style.display = "block";
    const ReceiptNumberControl = document.getElementById("receiptnumber");
    const ReceiptTotalSumControl = document.getElementById("receipttotalamount");
    const ReceiptTotalSum = parseInt(ReceiptTotalSumControl.value);
    const ProperReceipt = ValidateReceipt(ReceiptNumberControl.value);
    if (ProperReceipt == true) {
        if (ReceiptTotalSum <= 10000 && ReceiptTotalSum > 0) {
            ZalogowanyUżytkownik.punkty += ReceiptTotalSum;
            ZarejestrowaneParagony.push(ReceiptNumberControl.value);
            ReceiptNumberControl.value = "";
            ReceiptTotalSumControl.value = 0;
            AddReceiptControl.style.display = "none";
        }
        else
            window.alert("Nieprawidłowa kwota");
    }
    ShowAcount();
}
function ValidateReceipt(receiptnumber) {
    var validated = false;
    if (receiptnumber.startsWith("ABC") && receiptnumber.length == 17) {
        validated = true;
        ZarejestrowaneParagony.forEach(element => {
            if (element == receiptnumber) {
                validated = false;
                window.alert("Ten paragon był już rejestrowany");
            }
        });
    }
    else {
        window.alert("Niepoprawny numer paragonu");
    }
    return validated;
}
