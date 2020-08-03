import { newsAPI } from '../api'

const NEWS_COUNTRY_TOP_HEADLINES = 'NEWS_COUNTRY_TOP_HEADLINES'

let initialState = {
	MainNews: [],
}

let NEWS_REDUCER = function (state = initialState, action) {
	switch(action.type){
		case NEWS_COUNTRY_TOP_HEADLINES:
			return {
				...state,
				MainNews: [...action.news]
			}
		default:
			return state
	}
}

let setNewsCountryHeadlines = (news) => ({
	type: NEWS_COUNTRY_TOP_HEADLINES,
	news,
})

export let NewsCountryHeadlinesTC = (news) => (dispatch) =>{
	
	newsAPI.getNewsSearch(news).then(response => {
		if(response.status){
			dispatch(setNewsCountryHeadlines(response.data.articles))
		}
	})
}


export default NEWS_REDUCER;