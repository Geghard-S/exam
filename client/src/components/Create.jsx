import { useState } from 'react';
import { navigate } from '@reach/router';
import axios from 'axios';

const Create = ({addPet}) => {

    const [content, setContent] = useState("");
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [desc, setDesc] = useState("");
    const [skill1, setSkill1] = useState("");
    const [skill2, setSkill2] = useState("");
    const [skill3, setSkill3] = useState("");
    const [err, setErr] = useState("");

    const formHandler = (e) => {
        e.preventDefault();

        axios.post("http://localhost:8000/pets", {
            content: content,
            name: name,
            type: type,
            desc: desc,
            skill1: skill1,
            skill2: skill2,
            skill3: skill3
        })
            .then(response => {
                addPet(response.data);
                navigate("/");
            })
            .catch(err => {
                console.log(err.response);
                if(err.data===null){
                    setErr("not unique");
                }
                setErr("Something went wrong");
            })
    }

    return (
        <>
            <form onSubmit={formHandler}>
                
                <div>
                    <p>{err}</p>
                </div>
                <div>
                    <p>{name}</p>
                </div>
                <div className="mb-3"><label htmlFor="content" className="form-label"> Content: </label>
                    <input type="text" className="form-control" id="content" value={content} onChange={(e) => setContent(e.target.value)}/>
                </div>
                <div className="mb-3"><label htmlFor="name" className="form-label"> Name: </label>
                    <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className="mb-3"><label htmlFor="type" className="form-label"> Type: </label>
                    <input type="text" className="form-control" id="type" value={type} onChange={(e) => setType(e.target.value)}/>
                </div>
                <div className="mb-3"><label htmlFor="desc" className="form-label"> Description: </label>
                    <input type="text" className="form-control" id="desc" value={desc} onChange={(e) => setDesc(e.target.value)}/>
                </div>
                <div className="mb-3"><label htmlFor="skills" className="form-label"> Skills: </label>
                    <input type="text" className="form-control" id="skills" value={skill1} onChange={(e) => setSkill1(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control" value={skill2} onChange={(e) => setSkill2(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control" value={skill3} onChange={(e) => setSkill3(e.target.value)}/>
                </div>
                <input type="submit" value="Add a Pet!"/>
            </form>
        </>
     )
 }
 
 export default Create;