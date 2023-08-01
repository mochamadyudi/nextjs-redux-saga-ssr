export * from './uuid'
export function getEnv(environment: string,permit?: string | 'private'){
  switch (permit){
    case "private":
      return process.env[environment] ?? null
    case "public":
      return process.env[['NEXT_PUBLIC',environment].join('_')] ?? null
    default:
      return null
  }
}