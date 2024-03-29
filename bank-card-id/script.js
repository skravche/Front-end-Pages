//use card-info lib.
document.querySelector("#card-number").oninput = function() {
  let cardNum = this.value;
  if (cardNum.trim().length > 5) {
    let cardInfo = new CardInfo(cardNum.trim(), {
      banksLogosPath: "./node_modules/card-info/dist/banks-logos/",
      brandsLogosPath: "./node_modules/card-info/dist/brands-logos/"
    });
    //bank name
    document.querySelector(".card-image").src = cardInfo.bankLogo;
    document.querySelector(".card-logo").src = cardInfo.brandLogo;
    document.querySelector(".card-front").style.backgroundColor =
      cardInfo.backgroundColor;
  }
};
