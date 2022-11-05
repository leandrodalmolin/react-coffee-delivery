/**
 * Make all theme properties available on autocompletion
 *
 * 1. Pass all types from "defaultTheme" to "ThemeType"
 * 2. Add "ThemeType" types to styled-components' default theme
 */
import 'styled-components'
import { defaultTheme } from '../styles/themes/default'

// [1]
type ThemeType = typeof defaultTheme

// [2]
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
