import React, { useState, useEffect } from "react";
import NavBar from "./NAVBAR";
import { Outlet } from "react-router-dom"

const Homepage = () => {

    const [puppiesInBowl, setPuppiesInBowl] = useState([])

    useEffect(() => {
        async function grabPuppyData () {
            try {
                const response = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2209-ftb-mt-web-ft/players")
                const data = await response.json()
                console.log(data)
                console.log(data.data.players)
                setPuppiesInBowl(data.data.players)
            } catch (error) {
                console.log(error)
            }
        }
        grabPuppyData()
    }, [])

    return (
        <div>
            <h1>PUPPY BOWL!</h1>
            <NavBar />

            <Outlet context={[puppiesInBowl, setPuppiesInBowl]} />


        </div>
    )
}

export default Homepage