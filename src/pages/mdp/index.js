import * as React from "react"
import Layout from "../../layout/layout"

import { section, title, text } from "./mdp.module.css"

const Index = () => {
	return (
		<Layout>
			<section className={section}>
				<h2 className={title}>Młodzieżowa drużyna pożarnicza</h2>
				<p className={text}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nulla
					est, porta vitae tortor eget, feugiat tincidunt leo. Vivamus rutrum
					diam id metus rutrum aliquet. Curabitur ac volutpat dui. Ut ut augue
					eget ligula condimentum interdum. Fusce vehicula mauris nec elementum
					facilisis. Mauris commodo lobortis tempor. Curabitur id metus ut massa
					iaculis ornare. Sed egestas eu justo non sollicitudin. Ut nec mauris
					blandit nisl luctus mollis. Sed quis metus at elit molestie sodales
					vel a massa. Integer quis malesuada justo. Aliquam nec luctus orci.
					Pellentesque quis lobortis erat, consectetur pharetra tellus. Nullam
					lobortis ac enim non fringilla. Maecenas vestibulum augue in quam
					fermentum, sit amet ornare lectus tristique. Maecenas non luctus elit,
					id pulvinar magna.{" "}
				</p>
			</section>
		</Layout>
	)
}

export default Index
