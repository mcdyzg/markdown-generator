import { combineReducers } from 'redux'
// import { routerReducer } from 'react-router-redux'
import store from '../store'
import categoryReducer from './category'
import articleReducer from './article'
import readmeReducer from './readme'
import currentStateReducer from './currentState'

// ================================
// 同步的 Reducers（即应用初始化所必需的）
// ================================
const syncReducers = {
	// router: routerReducer,
	category: categoryReducer,
	article: articleReducer,
	readme: readmeReducer,
	currentState: currentStateReducer,
}

// ================================
// 异步加载的 Reducers（Code Splitting 按需加载的）
// ================================
const asyncReducers = {}

/**
 * @return {Function} rootReducer
 */
export default function createRootReducer() {
	return combineReducers({
		...syncReducers,
		...asyncReducers,
	})
}

/**
 * 按需加载时，立即注入对应的 Reducer
 * @param  {String}   key
 * @param  {Function} reducer
 */
// export function injectReducer(key, reducer) {
//   asyncReducers[key] = reducer
//   store.replaceReducer(createRootReducer()) // 替换当前的 rootReducer
// }
