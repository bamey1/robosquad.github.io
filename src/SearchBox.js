import React from 'react';
 
 const SearchBox=({searchfield, searchange})=>{

 	return(
 		<div className='pa2'>
<input  onChange={searchange} className='pa3 ba b--green bg-lightest-blue' type='search'  placeholder='search robots'/>

 		</div>);
 }


 export default SearchBox;   