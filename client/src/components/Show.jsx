import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const Show = props => {
    const [pet, setPet] = useState({});
    useEffect(() => {
        console.log(props.id)
      axios.get(`http://localhost:8000/pets/${props.id}`)
        .then(res => {
          setPet(res.data[0])
          console.log(res.data)
        })
        .catch(err => console.log(err))
  
    }, [props.id])
    const axiosDelete = () => {
        axios.delete(`http://localhost:8000/pets/${props.id}`)
            .then(res => navigate('/'))
            .catch(err => console.log(err))
    }
    
    return (
        
            
                
                    
                        
                            <div>
                                
            
                                <p>Name: {pet && pet.name}</p>
                                <p>Type: {pet && pet.type}</p>
                                <p>Description: {pet && pet.desc}</p>
                                <p>Skills: {pet && pet.skill1} <br /> {pet && pet.skill2} <br /> {pet && pet.skill3}</p>
                                <p>Date: {Date(pet && pet.createdAt)}</p>
                                <p><button onClick={() => axiosDelete(pet._id)}>Delete me!</button></p>
                                <hr />
                                
                            </div>
                    
                        
                        
            
        
    )
    
}

export default Show;
