import {css} from 'styled-components'

// export const maxWidth = '1440px';
export const maxWidth = '1366px';

// mobile first!
export const media = {
	wide: (...args) => css `
		@media (min-width: 500px) {
			${css(...args)}
		}
	`,
	wider: (...args) => css `
		@media (min-width: 1000px) {
			${css(...args)}
		}
	`,
	widest: (...args) => css `
		@media (min-width: ${maxWidth}) {
			${css(...args)}
		}
	`
}
