function PrzeliczKoszyk() 
{
    WartośćKoszyka = 0;

    for(i=0; i < Nagrody.length; i++)
    {
        let IdName = "inputprice" + (i + 1);
        let rewardcontrol = document.getElementById(IdName);
        let quantity = parseInt(rewardcontrol.value);

        WartośćKoszyka += Nagrody[i].cena * quantity;
    }

    for(i=0; i < Nagrody.length; i++)
    {
        let IdName = "inputprice" + (i + 1);
        let rewardcontrol = document.getElementById(IdName);
        let controlvalue = parseInt(rewardcontrol.value);
        let remainingpoints = (ZalogowanyUżytkownik.punkty - WartośćKoszyka);
        let currentrewardprice = Nagrody[i].cena;

        if(remainingpoints >= currentrewardprice)
        {
            //rewardcontrol.disabled = false;
            rewardcontrol.max = controlvalue + (remainingpoints / currentrewardprice);
            rewardcontrol.style.backgroundColor = "white";
        }
        else
        {
            rewardcontrol.max = controlvalue;       // zablokowanie dalszego zwiększania 
            rewardcontrol.style.backgroundColor = "red";

            //window.alert("Masz niewystarczającą ilość punktów");
            //rewardcontrol.disabled = true;
        } 
    }
    document.getElementById("CartContent").innerHTML = "Wartość koszyka: " + WartośćKoszyka;
}
