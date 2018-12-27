function ShowAccount() {
    if(ZalogowanyUżytkownik != null) 
    {
        ShowAccountDiv();
        document.getElementById("Account").innerHTML = "Hej " + ZalogowanyUżytkownik.nazwa + ", stan twojego konta: " + ZalogowanyUżytkownik.PokażPunkty + " punktów";
    }
}
