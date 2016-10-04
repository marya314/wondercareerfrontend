import React from 'react'
import {Route} from 'react-router'

import App from './components/app'
import FieldList from './components/field_list'
import FieldDetail from './components/field_detail'
import FigureDetail from './components/figure_detail'
import SearchBox from './components/search_box'

export default (
	<Route path='/' component={App}>
		<Route path='/search' component={SearchBox} />
		<Route path='/fields' component={FieldList}>
			<Route path='/field/:id' component={FieldDetail} />
		</Route>
		<Route path='/figures/:id' component={FigureDetail} />
	</Route>
)