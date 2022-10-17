import React from "react";
import { useOutletContext } from "react-router-dom";

const AllPuppies = () => {
    const puppyOutletContext = useOutletContext()
    return (
        <div>
            <h2>ALL PUPPIES!!</h2>
            {
                puppyOutletContext[0].map((puppy,idx) => {
                    return <div key={idx} id="puppy-info">
                        <p id="puppy-name">Puppy's Name: {puppy.name}</p>
                        <p id="puppy-breed">Puppy's Breed: {puppy.breed}</p>
                        <div><img src={puppy.imageUrl} id="puppy-pic"></img></div>
                    </div>
                })
            }
        </div>
    )
}

export default AllPuppies