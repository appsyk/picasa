import React from 'react';
import { connect } from 'react-redux';
import { selectName } from '../actions';

class NameList extends React.Component{
	renderList = () => {
		return this.props.name.map((names) => {
			return (
				<div className="item" key={names.id}>
					<div className="right floated content">
						<button className="ui button primary" onClick={() => this.props.selectName(names)}>
							SELECT
						</button>
					</div>
					<div className="content">{names.name}</div>
				</div>
			);
		});
	};
	render(){
		return(
			<div className="ui divided list">
				{this.renderList()}

			</div>
		);
	}
}
const mapStateToProps = (state) => {
	return {name: state.name};
};

export default connect(mapStateToProps, {selectName})(NameList);