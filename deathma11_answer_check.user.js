// ==UserScript==
// @name        デスマコロシアム11解答チェック
// @description デスマコロシアム11解答チェック
// @include       http*://ideone.com/*
// @version     1.0.0
// @grant       none
// ==/UserScript==

window.document.onclick =  function(event){
  var output = document.getElementById("output-text");
  if (output == null) {
    return;
  }
  var answer = output.innerHTML;
  var expected = "br*infuckbra*nfuckbrain*uckbrainfu*kb*ainfuckb*ainfuckb*ainfuckbra*nfuckb*ainfuckbrainfu*kb*ainfuckbrainfuck*br*infuckbra*nfuckbr*infuckbrainfuck*bra*nfuckb*ainfuckbra*nfuckbrainfu*kbrai*fuckb*ainfuckbrai*fuckbra*nfuckbrai*fuckbrainfu*kbrain*uckbra*nfuckbrain*uckbrainfuck*brainf*ckb*ainfuckbrainf*ckbrainfu*kbrainfu*kb*ainfuckbrainfu*kbra*nfuckbrainfu*kbrainfuck*brainfuc*bra*nfuckbrainfuc*brainfuck*brainfuck*brainfu*kb*ainfuck*rainfuckb*ainfuckb*ainfuck*rainfuckbra*nfuckb*ainfuck*rainfuckbrainfu*kb*ainfuck*rainfuckbrainfuck*b*ainfuckb*ainfuckbra*nfuck";
  if (answer == expected || answer == expected + "\n") {
    console.log("OK");
  } else {
    console.log("NG");
  }
}
