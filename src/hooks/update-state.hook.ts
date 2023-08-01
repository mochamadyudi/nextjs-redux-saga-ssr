import React, { useState, useEffect} from "react";
import {useDispatch} from "react-redux";
import {useRouter} from "next/router";
import Router from 'next/router';
import {ChangeModeTheme} from "@yuyuid/redux";
import {CHANGE_MODE_THEME} from "@yuyuid/src/redux/constants/theme";
export function UpdateStateHook(preloadState:any){
  const router = useRouter();
  const dispatch = useDispatch();

  function _caller(){
    if(typeof preloadState === 'object' && preloadState && Object.keys(preloadState).length > 0){
      dispatch({
        type:"PRELOAD_STATE",
        payload: {
          ...preloadState
        }
      })
    }else{
      dispatch({
        type:CHANGE_MODE_THEME,
        payload:{
          mode:"dark"
        }
      })
    }

  }
  useEffect(() => {
    if(typeof preloadState === 'object' && preloadState && Object.keys(preloadState).length > 0){
      dispatch({
        type:"PRELOAD_STATE",
        payload: {
          ...preloadState
        }
      })
    }else{
      dispatch({
        type:CHANGE_MODE_THEME,
        payload:{
          mode:"dark"
        }
      })
    }
  }, []); // Add 'router.route' as a dependency to trigger the effect on route change
}