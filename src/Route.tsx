import * as React from "react"

export interface RouteProps {
	path: string
	to: () => React.ReactElement<any>
}

export function Route(props: RouteProps) {
	return props.to()
}
