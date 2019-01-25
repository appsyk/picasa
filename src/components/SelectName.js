import './image.css';
import React from 'react';
import { connect } from 'react-redux';

const SelectName = ({ names }) => {
	if(!names){
		return <h1>Select a Name</h1>
	}
	///console.log(names.name);
	return(
		<div>
			<h1>Details of a Name</h1>

			ID :  {names.id}
			<br />
			<img className="img" src={names.pic} alt={names.name} />
			<br />
			NAME :  {names.name}
			<br />
			AGE :  {names.age}
			
		</div>
	);
};

const mapStateToProps = (state) => {
	return {names:state.selectedName};
};
export default connect(mapStateToProps)(SelectName);