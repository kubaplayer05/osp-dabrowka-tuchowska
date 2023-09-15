import * as React from "react"
import Layout from "../../layout/layout"
import { StaticImage } from "gatsby-plugin-image";

import {section, title, members, card, name} from "./members.module.css"

const Index = () => {

	const membersArr = [{id:1},{id:2},{id:3},{id:4},{id:5},{id:6},{id:7},{id:8},{id:9},{id:10}]

	return (
		<Layout>
			<section className={section}>
				<h2 className={title}>Członkowie</h2>
				<div className={members}>
					{membersArr.map(member => {
						return (
							<div className={card} key={member.id}>
								<StaticImage src="../../../content/assets/user.png" alt=""/>
								<p className={name}>Imię i Nazwisko</p>
							</div>
						)
					})}
				</div>
			</section>
		</Layout>
	)
}

export default Index
