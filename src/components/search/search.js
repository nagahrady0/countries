import './search.css';
import SelectBox from './../selectbox/selectbox.js';
import Input from './../input/input.js';
const Search = ()=>{




return(
	<>
	
	<div className="search">
		<div className="search-methoods">
			<div className="col-left">
				<Input />
			</div>
			<div className="col-right">
						<SelectBox />
			</div>
		</div>	
	</div>	

	</>
)

}


export default Search;
