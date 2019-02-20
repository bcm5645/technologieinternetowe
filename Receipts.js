let RegisteredReceipts = [ "ABC12345678901233", "ABC0987654321234", "ABC11223344556677", "ABC09876543210987" ];

function ShowReceiptInput()
{
    ReceiptDiv.style.display = "block";
    const ReceiptNumber = "<input id = \"receiptnumber\" type = \"text\" value=\"Nr paragonu\">";
    const ReceiptTotalSum = "<input id = \"receipttotalamount\" type = \"number\" value=\"Wartość paragonu\">";
    const Button = "<input id = \"ApplyButton\" type=\"button\" value=\"Dodaj\" onclick=\"AddReceipt()\">";
    ReceiptDiv.innerHTML = ReceiptNumber + ReceiptTotalSum + Button;
}

function AddReceipt() {
    ReceiptDiv.style.display = "block";

    const ReceiptNumberControl = document.getElementById("receiptnumber");
    const ReceiptTotalSumControl = document.getElementById("receipttotalamount");
    const ReceiptTotalSum = parseInt(ReceiptTotalSumControl.value);
    const ProperReceipt = ValidateReceipt(ReceiptNumberControl.value, ReceiptTotalSum);
    if (ProperReceipt == true) {
        if (ReceiptTotalSum <= 10000 && ReceiptTotalSum > 0) {
            ZalogowanyUżytkownik.punkty += ReceiptTotalSum;
            RegisteredReceipts.push(ReceiptNumberControl.value);
            ReceiptNumberControl.value = "";
            ReceiptTotalSumControl.value = 0;
            ReceiptDiv.style.display = "none";
            window.alert("Do Twojego konta dodano " +  ReceiptTotalSum + " punktów");
        }
        else
            window.alert("Nieprawidłowa kwota");
    }
    ShowAccount();
}

function ValidateReceipt(receiptnumber, receiptvalue) {
    var validated = false;
    if (receiptnumber.startsWith("ABC") && receiptnumber.length == 17)
    {
        validated = true;
        var sumEncodedInReceiptNumber = parseInt(receiptnumber.substring(17,13));

        RegisteredReceipts.forEach(element => {
            if (element == receiptnumber) {
                validated = false;
                window.alert("Ten paragon był już rejestrowany");
            }
        });

        if(validated)
        {
            if(sumEncodedInReceiptNumber != receiptvalue)
            {
                validated = false;
                window.alert("Niepoprawna kwota paragonu " + receiptnumber);
            }
        }
    }
    else {
        window.alert("Niepoprawny numer paragonu");
    }
    return validated;
}

