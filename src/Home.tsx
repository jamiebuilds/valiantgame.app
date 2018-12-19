import * as React from "react"
import { Link } from "@reach/router"
import { css, cx } from "emotion"
import space from "./space.jpg"
import * as helperStyles from "./helperStyles"

export function Home() {
	return (
		<div
			className={cx(
				helperStyles.fill,
				helperStyles.centerChildren,
				styles.home,
			)}
		>
			<h1 className={styles.gameTitle}>Valiant</h1>
			<Link to="/intro" role="button" className={cx(styles.startButton)}>
				Start
			</Link>
		</div>
	)
}

let styles = {
	home: css`
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		color: white;
		background: black;
		background-image: url(${space});
		background-size: cover;
		background-position: center;
	`,

	gameTitle: css`
		display: inline;
		margin: 1.5em 0 0;
		font-size: 18vmin;
		font-weight: 600;
		letter-spacing: -0.04em;
		text-shadow: 0 10px 100px rgba(0, 0, 0, 0.8);
		font-family: "Major Mono Display";
	`,

	startButton: css`
		color: inherit;
		text-decoration: none;
		margin-top: 1em;
		padding: 1em 2em;
		font-size: 8vmin;
		text-shadow: 0 10px 10px rgba(0, 0, 0, 0.8);
		font-weight: 500;
		font-family: "Major Mono Display";
		text-transform: lowercase;
	`,
}
