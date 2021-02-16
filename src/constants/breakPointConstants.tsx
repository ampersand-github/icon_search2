// phone = phone以上、tablet未満
// tablet = tablet以上、desktop未満
// desktop = desktop以上
export interface breakpointsConstraintsTypes {
  phone: number
  tablet: number
  desktop: number
}

export const breakpointsConstraints: breakpointsConstraintsTypes = {
  phone: 0,
  tablet: 600,
  desktop: 960,
}
