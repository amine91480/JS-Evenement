/* Exo -> 1 & 1bis
On commence par un petit échauffement : lorsque l'utilisateur va cliquer sur le footer (portant le tag <footer>), tu vas afficher le mot "clique" en console.
Cette fonctionnalité doit être codée avec un addEventListener("click", function(){ } car c'est une bonne habitude à prendre ! 😇
*/
let footerAttribut = document.getElementsByTagName('footer');

footerAttribut[0].onclick = eventFooter;

function eventFooter() {
  let i = 0;
  console.log(`Click n'${i}`);
  i = i + 1
}
//console.log(footerAttribut);

/* EXO 2
On va enfin faire fonctionner ce satané "Hamburger Menu" qui s'affiche depuis le début mais qui n'actionne rien quand on clique dessus. C'est quoi un "hamburger menu" ? C'est ça, ce bouton avec trois lignes horizontales en haut à droite de la navbar.
Tu vas faire que si quelqu'un clique sur ce bouton, l'élément HTML portant l'Id navbarHeader perde sa classe collapse. Une fois que ça, ça marche, fait que si on clique à nouveau dessus, la classe collapse soit rajoutée à nouveau à l'élément portant l'Id navbarHeader
*/
let hamburgerAttribut = document.querySelector('button.navbar-toggler');
hamburgerAttribut.addEventListener('click',function(){
  let navbarHeader = document.getElementById('navbarHeader');
  
  if (navbarHeader.className == 'collapse bg-dark') {
    navbarHeader.className = 'bg-dark'; }
  else if (navbarHeader.className == 'bg-dark') {
    navbarHeader.className = 'collapse bg-dark'; }
  //console.log(navbarHeader);
})
//console.log(hamburgerAttribut.className);

/* Exo 3
À présent, on va faire cela : si on clique sur le bouton "Edit" de la première card, le texte de la card va se mettre en rouge de façon irréversible (sauf si on recharge la page). À toi de jouer !
 */


let buttonSecondaryCard = document.getElementsByClassName('btn btn-sm btn-outline-secondary');
buttonSecondaryCard[0].addEventListener('click',function(){
  let textCard = document.getElementsByClassName('card-text');
  textCard[0].style.color =  'red' ;
  //console.log(buttonSecondaryCard[0]);
  //console.log(textCard[0]);
})

/* Exo 4
Fonctionnalité 4 :
On va faire quelque chose de similaire à la fonctionnalité 3 mais un peu plus complexe : si on clique sur le bouton "Edit" de la deuxième card, le texte de la card va se mettre en vert. Si on re-clique dessus, il redevient comme avant ! Tu l'as compris, il va falloir que tu cherches comment faire un "toggle" sur le style du texte. C'est plus compliqué que sur une classe.
 */
let buttonSecondaryCard2 = document.getElementsByClassName('btn btn-sm btn-outline-secondary');
let textCard = document.getElementsByClassName('card-text');
buttonSecondaryCard2[1].addEventListener('click',function(){

})
console.log(buttonSecondaryCard2[1]);
console.log(textCard[1]);