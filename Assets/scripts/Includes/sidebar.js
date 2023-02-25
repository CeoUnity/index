

window.addEventListener( "load", ev => {
    
	let arrows = $$( ".arrow" ),
		sidebar = $( "side-bar" ),
		sidebarBtn = $( ".switch" );
        
	arrows.forEach( arrow => {
		arrow.addEventListener( "click", ev => {
			let arrowParent = ev.target.parentElement.parentElement;
			arrowParent.classList.toggle( "showMenu" );
		} );
	} );

	console.log( sidebar );

	sidebarBtn.addEventListener( "click", () => {
		sidebar.classList.toggle( "close" );
		if( sidebar.classList.contains( "close" ) ) {
			sidebar.classList.remove( "blur" );
		} else {
			sidebar.classList.add( "blur" );
		}
	} );


} );