import React from 'react';
import NameList from './NameList';
import SelectName from './SelectName';

const App = () => {
		return(
		<div className="ui container grid">
			<div className="ui row">
				<div className="column eight wide">
					<NameList />
				</div>
				<div className="column eight wide">
					<SelectName />
				</div>
			</div>
		</div>
		);

};
export default App;