import * as React from "react"
import { css, cx } from "emotion"
import * as helperStyles from "./helperStyles"
import { Link } from "@reach/router"

export function Intro() {
	return (
		<div className={cx(helperStyles.fill, styles.intro)}>
			<div className={styles.container}>
				<p>My friend,</p>
				<p>
					What if I told you that parallel universes do exist, and that we can
					access them?
				</p>
				<p>
					I've had a breakthrough. A breakthrough that will change not just our
					universe, but all of them.
				</p>
				<p>
					It's incredible. Every universe that could exist, does. Every decision
					you've ever made, there's a universe where you made the opposite
					decision. These universes fork off each other at an infathomable rate.
					There are infinite universes that are growing at an infinite rate. And
					now, we have a chance to access them.
				</p>
				<p>
					In the multiverse, time is basically meaningless. We can move through
					time as easily as we walk from one side of the room to the other. By
					accessing these other universes, we can see the consequences of every
					decision we ever make before we even make it.
				</p>
				<p>We have work to do. Please join me.</p>
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
		font-size: 5vmin;
		line-height: 1.8;
		max-width: 30em;
		margin: 0 auto;
		padding: 2em;
		text-align: justify;
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
}
