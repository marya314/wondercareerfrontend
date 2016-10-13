import React from 'react'
import {Route, IndexRoute} from 'react-router'

import App from './components/app'
import Home from './components/home'
import FieldList from './components/field_list'
import FieldDetail from './components/field_detail'
import FigureDetail from './components/figure_detail'
import Quiz from './components/quiz'
import SearchBox from './components/search_box'

export default (
	<Route path='/' component={App}>
		<IndexRoute component={Home} />
		<Route path='/quiz' component={Quiz}/>
		<Route path='/search' component={SearchBox}>
			<Route path='/fields' component={FieldList}>
				<Route path='/fields/:field_id' component={FieldDetail}>
					<Route path='/fields/:field_id/figures/:id' component={FigureDetail} />
				</Route>
			</Route>
		</Route>
	</Route>
)
