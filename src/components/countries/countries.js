import { useState, useEffect } from 'react';
import {useSelector } from 'react-redux';
import './countries.css';

import {Link} from "react-router-dom";

const Countries = ()=>{

 const [data, setData] = useState([]);
 
 const state = useSelector((state)=> state.reducerData);
 
   useEffect(() => {
   
   	if(state.select == "default" && state.input == ""){
      		setData(state.data);
      	}
      	else if(state.select == "default" && state.input != ""){
      		const searchedData = state.data.filter((el)=>  el.name.toUpperCase().startsWith(state.input.toUpperCase()));
      		setData(searchedData);
      	}
    	else{
const searchedData = state.data.filter((el)=>  el.name.toUpperCase().startsWith(state.input.toUpperCase()) && el.region == state.select);
    	      		setData(searchedData);
    	}
console.log(state);

  }, [state]);

const countries = data.map((country)=>{

	return(
	

			

		<div className="cards" 	 key={country.name}>
			
			<Link to={`/countries/${country.name}`}>
			  <img src={country.flags.png}   alt="..." />
			</Link>
			  
			 <div className="wrapper">
			    <h3 >{country.name}</h3>
			    
	    		  <p>
	    		  <span>
								population :
							</span>
							{country.population}
			 </p>
			 <p >

								<span>
								region :
							</span>
							{country.region}
			 </p>
			 <p className="card-text" >

								<span>
								capital :
							</span>
							{country.capital}
			 </p>				

			  </div>
		</div>


	
	
	)
})

return(
	<>
	
	<div className="countries">

			{countries}	    

	</div>	

	</>
)

}


export default Countries;






















