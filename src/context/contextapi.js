import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import fetchData from "../utils/api";

export const Context=createContext()

export const AppContext=(props)=>{
    const [loading,setLoading]=useState(false)
    const [searchResults,setSearchResults]=useState([])
    const [selectCategories,setselectCategories]=useState("New")
    const [mobileMenu,setmobileMenu]=useState(false)

    useEffect(()=>{
        fetchSelectedCategoryData(selectCategories)
    },[selectCategories])

    const fetchSelectedCategoryData=(query)=>{
        setLoading(true)
        fetchData(`search/?q=${query}`).then(({contents})=>{
            setSearchResults(contents)
            setLoading(false)
        })
    }

    return (
        <Context.Provider value={{
            loading,setLoading,searchResults,setSearchResults,selectCategories,setselectCategories,mobileMenu,setmobileMenu
        }} >
            {props.children}
        </Context.Provider>
    )
}