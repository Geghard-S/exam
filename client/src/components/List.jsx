import axios from "axios";
import { navigate, Link } from '@reach/router';



const List = ({pets, showpet}) => {

    return (
        <>
            {
                
                pets.map((pet, idx) =>
                
                   
                        
                        <table class="table table-dark">
                            <thead>
                                <tr>
                                    <td>Name</td>
                                    <td>Type</td>
                                    <td>Actions</td>
                                </tr>
                            </thead>
                            <tbody>
                           
                                <tr className="table-active" key={idx}>
                                    <td><p>{pet.name} </p></td>
                                    <td><p>{pet.type} </p></td>
                                    <td><p><button onClick={() => navigate(`/pets/${pet._id}`)}>Details</button></p>
                                        <p><button onClick={() => navigate(`/edit/${pet._id}`)}>Edit</button></p></td>
                                </tr>
                            </tbody>
                        </table>
                    
                       
                )
            }
        </>
    )
}

export default List;
