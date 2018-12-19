import * as React from "react"
import { css, cx } from "emotion"
import * as helperStyles from "./helperStyles"
import { Link } from "@reach/router"

export function Intro() {
	return (
		<div className={cx(helperStyles.fill, styles.intro)}>
			<div className={styles.container}>
				<p>Jamie,</p>
				<p>
					I'm so sorry how long it's been since we last spoke. I've had my head
					down on my research for quite some time.
				</p>
				<p>
					Remember back 16 years ago, the team in Beijing proved the existence
					of parallel universes. Remember I started working on a theory based on
					their paper about how these other universes could be accessed.
				</p>
				<p>
					Well... It's true, it can and has been done. But not by us, by other
					universes. Jamie, we've been accessed by them.
				</p>
				<p>We have work to do. Please come.</p>
				<p className={styles.signature}>– Flores</p>
			</div>
			<Link className={styles.next} to="/instructions">
				&rarr;
			</Link>
		</div>
	)
}

let styles = {
	intro: css`
		/* background: #faffff;
		color: #22080b; */

		background: black;
		color: white;
		overflow: auto;
		-webkit-overflow-scrolling: touch;
	`,
	container: css`
		position: relative;
		font-family: "Reenie Beanie", Georgia, "Times New Roman", Times, serif;
		font-size: 8vmin;
		line-height: 1.4;
		max-width: 30em;
		margin: 0 auto;
		padding: 3vw;
		-webkit-font-smoothing: antialiased;
	`,

	next: css`
		display: block;
		font-size: 10em;
		text-align: center;
		padding: 1em 0 2em;

		font-weight: 900;
		text-decoration: none;
		color: white;
	`,

	signature: css`
		text-align: right;
	`,
}
