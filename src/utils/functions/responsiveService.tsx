import { breakpointsConstraintsTypes } from '../../constants/breakPointConstants'

export const responsive = <T,>(width: number, responsive: [T, T, T], breakpoints: breakpointsConstraintsTypes): T => {
  if (width >= breakpoints.phone && width < breakpoints.tablet) return responsive[0]
  else if (width >= breakpoints.tablet && width < breakpoints.desktop) return responsive[1]
  else if (width >= breakpoints.desktop) return responsive[2]
  // 一致なしはタブレットサイズを返す
  else return responsive[1]
}
