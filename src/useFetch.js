import React from "react";
import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { fetching } from './actions/fetching';


export  const useFetch = (url) => {
    const dispatch = useDispatch();

    useEffect(() => {
        async function fetchData(){
          console.log('STARTED')
          let response = await fetch(url)
          let data = await response.json()

          const dispatching = () => dispatch(fetching(data))
          dispatching()
        }
        fetchData();
      },[])
}
