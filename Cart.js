function PrzeliczKoszyk() 
{
    WartośćKoszyka = 0;
    Nagrody.forEach(element => {
        let index = Nagrody.indexOf(element);
        let IdName = "price" + (index + 1);
        let rewardcontrol = document.getElementById(IdName);
        
        WartośćKoszyka += Nagrody[index];
    });
}
