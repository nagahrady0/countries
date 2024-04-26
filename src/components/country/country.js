import {useParams} from "react-router-dom";
import {useSelector } from 'react-redux';
import {Link} from "react-router-dom";

import './country.css';


const Country = ()=>{



const params = useParams();

const state = useSelector((state)=> state.reducerData.data);  // return redux state that contain countries information

const countryData = state.filter((el)=> el.name == params.name);  // return array with on element that we clicked on


// use the country information to know that boundries 
const boundries =countryData[0].borders != undefined ?countryData[0].borders.map((el)=> state.find((country)=> el == country.alpha3Code)):null;



const borders = boundries != null ?boundries.map((el , index)=> <span key={index}>{el.name}</span>):null ;

return(
	<>
	
	<div className="country">
		<Link to="/countries/" className="back">
				back
		</Link>	 
		<div className="content info">
			<div className="col-left">
				<img src={countryData[0].flags.svg} />
			</div>
			<div className="col-right">
				
				<h1 className="top heading">{countryData[0].name}</h1>
				
					<div className="middle">
					
					
						<div className="left">
							<div className="wrapper">
								<span>
									Native Name:
								</span>
								{countryData[0].nativeName}
							</div>
							<div className="wrapper">
								<span>
									population:
								</span>
								{countryData[0].population}
							</div>
							<div className="wrapper">
								<span>
									Region:
								</span>
								{countryData[0].region}
							</div>
							<div className="wrapper">
								<span>
									Sub Region:
								</span>
								{countryData[0].subregion}
							</div>
							<div className="wrapper">
								<span>
									Capital:
								</span>
								{countryData[0].capital}
							</div>
					
						</div>
						<div className="right">
							<div className="wrapper">
								<span>
									Top Level Domain:
								</span>
								{countryData[0].topLevelDomain}
							</div>
							<div className="wrapper">
								<span>
									Currencies:
								</span>
								{countryData[0].currencies[0].name}
							</div>
							<div className="wrapper">
								<span>
									Languages:
								</span>
								{countryData[0].languages.map((el,index)=> {
									return (<span key={index}>{el.name}</span>)
									}
									)
								}
							</div>
					
					        </div>
					
					</div>
					
					<div className="bottom">
						<div className="wrapper">
							<span> 
								Border Countries: 
							</span>
							{borders}
						</div>	
					
					</div>
					
			</div>   
		</div>	
	</div>	

	</>
)

}


export default Country;
