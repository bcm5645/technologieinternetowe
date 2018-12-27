//let StanKonta = 1459;

var LoginDiv, MenuDiv, AccountDiv, RewardsDiv, PricesDiv, SliderDiv, LogoutDiv, CartDiv, ReceiptDiv;

var WartośćKoszyka = 0;

function start() 
{
    SliderChangeImage();

    LoginDiv = document.getElementById("Login");
    MenuDiv = document.getElementById("Menu");
    AccountDiv = document.getElementById("Account");
    RewardsDiv = document.getElementsByClassName("Rewards");
    PricesDiv = document.getElementsByClassName("Prices");
    SliderDiv = document.getElementById("Slider");
    LogoutDiv = document.getElementById("Logout");
    CartDiv = document.getElementById("Cart");
    ReceiptDiv = document.getElementById("reward1");

    ShowAccount();
    HideAll();
    ShowLoginDiv();
}

function HideAll()
{
    HideAccountDiv();
    HideRewardsDiv()
    HideMenuDiv();
    HideLoginDiv();
    HideSliderDiv();
    HideLogoutDiv();
    HideCartDiv();
}

function HideLoginDiv() { LoginDiv.style.display = "none"; }
function HideAccountDiv() { AccountDiv.style.display = "none"; }
function HideMenuDiv() { MenuDiv.style.display = "none"; }
function HideSliderDiv() { SliderDiv.style.display = "none"; }
function HideLogoutDiv() { LogoutDiv.style.display = "none"; }
function HideCartDiv() { CartDiv.style.display = "none"; }

function HideRewardsDiv() 
{
    for(let i = 0; i < RewardsDiv.length; i++) 
    {
        RewardsDiv[i].style.display = "none"; 
    }
    for(let i = 0; i < PricesDiv.length; i++)
    {
        PricesDiv[i].style.display = "none"; 
    }
}

function ShowLoginDiv() { LoginDiv.style.display = "block"; }
function ShowAccountDiv() { AccountDiv.style.display = "block"; }
function ShowMenuDiv() { MenuDiv.style.display = "block"; }
function ShowSliderDiv() { SliderDiv.style.display = "block"; }
function ShowLogoutDiv() { LogoutDiv.style.display = "block"; }
function ShowCartDiv() { CartDiv.style.display = "block"; }

function ShowRewardsDiv()
{
    for(let i = 0; i < RewardsDiv.length; i++) 
    {
        RewardsDiv[i].style.display = "block"; 
    }
    for(let i = 0; i < PricesDiv.length; i++) 
    {
        PricesDiv[i].style.display = "block"; 
    }
}