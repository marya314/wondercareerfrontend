import React from 'react'
import {Link} from 'react-router'

import NavBar from './nav_bar'
import SearchBox from './search_box'
import FieldList from './field_list'
import FieldDetail from './field_detail'
import FigureDetail from './figure_detail'

export default (props) => {

	return(
		<div>
			<NavBar title="Career Yeah!" url="/" />
			<div className="col-md-4">
				<SearchBox />
			</div>
			<div className="col-md-3">
				<FieldList />
			</div>
			<div className="col-md-5">
				<FieldDetail />
			</div>
			<div className="col-md-12">
				<FigureDetail />
			</div>
		</div>
	)
}
