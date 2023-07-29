export interface dynamicProps {
  [key:string|number]: object | string | number | [] | object[]
}

export interface actionProps {
  type: string,
  payload: object | number | number[] | string | string[] | object[] | [] | undefined
}