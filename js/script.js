const header = document.querySelector("header");
window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY > 100);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navlist.classList.toggle('open');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navlist.classList.remove('open');
};
const source =this.document.getElementById('view').innerHTML
 
const bt1 =this.document.getElementById('send')
 bt1.addEventListener('click', after);

 function after()
 {
    const template = Handlebars.compile(source);
     var v1 = document.getElementById('name').value;

     const replacement = {};
     replacement.Name = v1;
     const compiledHtml = template(replacement);
    const displayGoals = document.getElementById('message');
    displayGoals.innerHTML = compiledHtml;
 }