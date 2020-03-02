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
buttonSecondaryCard2[1].addEventListener('click',function(){
  let textCard = document.getElementsByClassName('card-text');
  if (textCard[1].style.color == '' || textCard[1].style.color == "black") {
    textCard[1].style.color = 'green';
  }else if (textCard[1].style.color == 'green') {
    textCard[1].style.color = 'black';
  }
  //console.log(buttonSecondaryCard2[1]);
  //console.log(textCard[1].style);
})

/* Exo 5
Pour le fun, on va implémenter une fonctionnalité à la sauce ☢"nucléaire"🤯. Et comme elle est un peu dangereuse, on va la cacher… Voici comment elle doit marcher : si un utilisateur double clique sur la navbar en haut, tout Bootstrap disparaît et la page s'affiche comme si on avait oublié de mettre le CDN qui la relie au fichier CSS. Si possible, rends cette fonctionnalité réversible (un nouveau double-clic fait tout revenir à la normale).
 */
let navBarAttribut = document.getElementsByTagName('header');
let link = document.querySelector('head > link');
let parentLink = link.parentElement;
navBarAttribut[0].addEventListener('dblclick',function(){
  if (parentLink.children.length == 2) {
    link.parentElement.removeChild(link); }
  else if (parentLink.children.length == 1) {
    parentLink.appendChild(link);
  }
  //console.log(link);
  //console.log(navBarAttribut);
})
/* Exo 6
T'as déjà implémenté 5 fonctionnalités d'interaction ! C'est top ! On va commencer à corser les choses.
La fonctionnalité sera la suivante : si un utilisateur passe sa souris sur le bouton "View" d'une card (n'importe laquelle), celle-ci va se réduire. Cela veut dire que le texte disparaît, l'image n'apparaîtra qu'à 20 % de sa taille d'origine et les boutons "Edit" / "View" restent visibles. Cette fonction sera réversible : s'il repasse sa souris, la card redevient normale !
* */