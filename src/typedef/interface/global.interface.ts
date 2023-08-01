/**
 * @author mochamadyudi
 */
export interface dynamicProps {
  [key:string|number]: object | string | number | [] | object[] // dynamic property key and value
}

/**
 * @author mochamadyudi
 *
 */
export interface actionProps {
  type: string, // for call action in redux
  payload: object | number | number[] | string | string[] | object[] | [] | undefined // event watch any payload
}

/**
 * @author mochamadyudi
 * @description - For configure state management use redux
 */
export interface configureStoreProps {
  debug: boolean | false
}