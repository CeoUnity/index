

"use strict";
/* [ properties ]
=================================== */
const $ = v => document.querySelector( v ),
	$$ = v => document.querySelectorAll( v ),
	log = v => console.log( v );
/* -------------------------------- */

let linkTemplate = "<l url=\"\"></p>";

/* [ link template ]
===============================================================================*/
class Link extends HTMLElement {
	constructor() {
		super();
		let link = document.createElement( "template" );
		link.innerHTML = linkTemplate;
		this.attachShadow( { mode: "open" } );
		this.shadowRoot.append( link.content.cloneNode( true ) );
		log( "oi" + this.innerHTML );
		if( this.innerHTML == "" ) {
			this.shadowRoot.querySelector( "[url]" ).innerHTML = this.getAttribute( "url" );
		} else {
			this.shadowRoot.querySelector( "[url]" ).innerHTML = this.innerHTML;
		}
		// this.shadowRoot.querySelector( "[url]" ).innerHTML = this.getAttribute( "url" );
	} 
	connectedCallback() {
		// console.log( this.getAttribute( "[url]" ) );
		this.render();
		let lUs = $$( "[url]" );

		lUs.forEach( link => link.addEventListener( "click", ev => {
			window.open( link.getAttribute( "url" ), "_blank" );
		} ) );
	}
	render() {
	}
}
window.customElements.define( "l-u", Link );



/* [ events ]
=================================== */
window.addEventListener( "load", ev => {
	let links = $$( "[link]" ),
		bgs = $$( "[bg]" );


	links.forEach( link => link.addEventListener( "click", ev => {
		window.open( link.getAttribute( "link" ), "_blank" );
	} ) );

	bgs.forEach( p => {
		p.style.backgroundImage = `url( ${p.getAttribute( "bg" )} )`;
		p.addEventListener( "click", ev => {
			window.open( p.getAttribute( "url" ), "_blank" );
		} );
	} );

} );