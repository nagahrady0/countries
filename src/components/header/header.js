import './header.css';

import 'bootstrap-icons/font/bootstrap-icons.css';

const Header = (props)=>{

// <i class="bi bi-moon-fill"></i>
// 					<i className="bi bi-moon"></i>


const chgMode = ()=>{

		if(props.mode == 'light'){
		
			props.setMode('dark');
			document.body.style.background = "#202D36";
			localStorage.setItem('mode' , 'dark');


		}
		else if (props.mode == 'dark'){

			props.setMode('light');
			document.body.style.background = "#FAFAFA";
			localStorage.setItem('mode' , 'light');
		
		}
	}	
	
return(
	
			<header>
				<h3>
					where in the world
				</h3>
				<div>
				
					<i className={props.mode == "light"?"bi bi-moon":"bi bi-moon-fill" } onClick={()=>{chgMode()}}></i>
					dark mode
				
				</div>
			</header>

)

}


export default Header;
