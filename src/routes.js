import React from 'react'
import {Route} from 'react-router'

import App from './components/app'
import FieldList from './components/field_list'
import FieldDetail from './components/field_detail'
import FigureDetail from './components/figure_detail'

export default (
	<Route path='/' component={App}>
		<Route path='/fields' component={FieldList}>
			<Route path='/fields/:field_id' component={FieldDetail}>
				<Route path='/fields/:field_id/figures/:id' component={FigureDetail} />
			</Route>
		</Route>
	</Route>
)
