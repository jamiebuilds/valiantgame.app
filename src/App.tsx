import * as React from "react"
import { Router, Location } from "@reach/router"
import { Route } from "./Route"
import * as helperStyles from "./helperStyles"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import { css } from "emotion"

import { Home } from "./Home"
import { Intro } from "./Intro"
import { Instructions } from "./Instructions"

interface FadeRouterProps {
	speed: number
	children: React.ReactNode
}

function FadeRouter(props: FadeRouterProps) {
	return (
		<Location>
			{({ location }) => (
				<TransitionGroup className={styles.absoluteFill}>
					<CSSTransition
						key={location.key}
						classNames={{
							enter: styles.fadeEnter,
							enterActive: styles.fadeEnterActive(props.speed),
							exit: styles.fadeExit,
							exitActive: styles.fadeExitActive(props.speed),
						}}
						timeout={props.speed}
					>
						<Router location={location} className={styles.absoluteFill}>
							{props.children}
						</Router>
					</CSSTransition>
				</TransitionGroup>
			)}
		</Location>
	)
}
interface FadeRouteProps {
	path: string
	to: () => React.ReactElement<any>
}

export function FadeRoute(props: FadeRouteProps) {
	return props.to()
}

export function App() {
	return (
		<FadeRouter speed={1000}>
			<Route path="/" to={() => <Home />} />
			<Route path="/intro" to={() => <Intro />} />
			<Route path="/instructions" to={() => <Instructions />} />
		</FadeRouter>
	)
}

let styles = {
	absoluteFill: css`
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
	`,
	fadeEnter: css`
		opacity: 0;
		z-index: 1;
	`,
	fadeEnterActive: (speed: number) => css`
		opacity: 1;
		transition: opacity ${speed / 2}ms ${speed / 2}ms ease-in;
	`,
	fadeExit: css`
		opacity: 1;
		z-index: -1;
	`,
	fadeExitActive: (speed: number) => css`
		opacity: 0;
		transition: opacity ${speed / 2}ms ease-in;
	`,
}
