import { newsAPI } from '../api/apiNews'
import { newsState } from '../NewsState'

const NEWS_COUNTRY_TOP_HEADLINES = 'news-reducer/NEWS_COUNTRY_TOP_HEADLINES'
const SET_TOTAL_RESULT = 'news-reducer/SET_TOTAL_RESULT'

let initialState = {
	MainNews: [],
	totalResults: null,
}

let NEWS_REDUCER = function (state = initialState, action) {
	switch(action.type){
		case NEWS_COUNTRY_TOP_HEADLINES:
			return {
				...state,
				MainNews: [...action.news]
			}
		case SET_TOTAL_RESULT:
			return{
				...state,
				totalResults: action.totalResults
			}
		default:
			return state
	}
}

let setNewsCountryHeadlines = (news) => ({
	type: NEWS_COUNTRY_TOP_HEADLINES,
	news,
})
let setTotalResult = (totalResults) => ({
	type: SET_TOTAL_RESULT,
	totalResults,
})


export let NewsCountryHeadlinesTC = (page, country ) => (dispatch) =>{
	newsAPI.getNewsSearch(page, country).then(response => {
		if (response.status === 200 ){
			dispatch(setTotalResult(response.data.totalResults))
			dispatch(setNewsCountryHeadlines(response.data.articles))
		}
	}).catch(dispatch(setNewsCountryHeadlines(newsState.articles)))
}

export default NEWS_REDUCER;