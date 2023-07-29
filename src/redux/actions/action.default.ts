import {
  APP_PREFIX,
  T_PROCESS,
  T_CONTINUE,
  T_FAILURE,
  T_REQUEST,
  T_SUCCESS,
  T_BAD_SERVER
} from "@yuyuid/redux";


export function PROCESS({type, prefix}: {
  type: string | undefined, // @ts-ignore
  prefix: string | APP_PREFIX
}) {
  // @ts-ignore
  return [prefix, [type, T_PROCESS].join('_')].join('/')
}

export function CONTINUE({type, prefix}: {
  type: string | undefined, // @ts-ignore
  prefix: string | APP_PREFIX
}) {
  // @ts-ignore
  return [prefix, [type, T_CONTINUE].join('_')].join('/')
}


export function REQUEST(type:string) {
  return `${APP_PREFIX}/${type}/${T_REQUEST}`
}

export function SUCCESS({type, prefix}: {
  type: string | undefined, // @ts-ignore
  prefix: string | APP_PREFIX
}) {
  // @ts-ignore
  return [prefix, [type, T_SUCCESS].join('_')].join('/')
}

export function FAILURE({type, prefix}: {
  type: string | undefined, // @ts-ignore
  prefix: string | APP_PREFIX
}) {
  // @ts-ignore
  return [prefix, [type, T_FAILURE].join('_')].join('/')
}
export function BAD_SERVER({type, prefix}: {
  type: string | undefined, // @ts-ignore
  prefix: string | APP_PREFIX
}) {
  // @ts-ignore
  return [prefix, [type, T_BAD_SERVER].join('_')].join('/')
}
