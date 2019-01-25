import { combineReducers } from 'redux';
//reducers
const nameReducer = () =>{
	return[
		{id:1, name:'Avinash', age:23, pic:'https://scontent.fbom10-1.fna.fbcdn.net/v/t1.0-9/11391389_431623587009579_3661329242265558412_n.jpg?_nc_cat=103&_nc_ht=scontent.fbom10-1.fna&oh=4f7ec9f8470a619a2b8c1c8acc21966c&oe=5C9232F6'},
		{id:2, name:'Suraj', age:21, pic:'https://scontent.fbom10-1.fna.fbcdn.net/v/t1.0-9/41841658_735490953466446_5804745426934431744_o.jpg?_nc_cat=105&_nc_ht=scontent.fbom10-1.fna&oh=51a7f315cce6ca839d7db67130587156&oe=5C9267A6'},
		{id:3, name:'Dinesh', age:20, pic:'https://scontent.fbom10-1.fna.fbcdn.net/v/t1.0-9/48414538_1241753515964008_3996409318797737984_n.jpg?_nc_cat=110&_nc_ht=scontent.fbom10-1.fna&oh=c1a1240ec9930b2cb79fe7b4b0619db9&oe=5C96A6BC'},
		{id:4, name:'Vrushabh', age:21, pic:'https://scontent.fbom10-1.fna.fbcdn.net/v/t1.0-9/42653008_888098961400219_8274869754104119296_n.jpg?_nc_cat=102&_nc_ht=scontent.fbom10-1.fna&oh=08737e5cbf3430f43156bf77df17b0ae&oe=5CCE367F'},
		{id:5, name:'Sanjay', age:22, pic:'https://scontent.fbom10-1.fna.fbcdn.net/v/t1.0-9/38419280_2079795722235376_3399470742247571456_n.jpg?_nc_cat=102&_nc_ht=scontent.fbom10-1.fna&oh=b30a55a50d06b55b61d585b4beafd18f&oe=5CCDD363'},
	];
};

const selectedNameReducer = (selectedName = null, action) => {
	if(action.type === 'NAME_SELECTED'){
		return action.payload;
	}

		return selectedName;
};

export default combineReducers({
	name: nameReducer,
	selectedName: selectedNameReducer
});