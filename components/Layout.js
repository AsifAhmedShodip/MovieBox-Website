import React, { useState, useEffect } from 'react'
import Link from 'next/link'

import Navbar from './NavigationBar'

const Layout = ({ children }) => {
	return (
		<React.Fragment>
			<Navbar />
		</React.Fragment>
	)
}

export default Layout
