/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useContext, useState} from 'react';
// import styles from './UserInput.module.css';
import {v4} from 'uuid';
import { MyContext } from '../Context/context';
import styles from './UserInput.module.css';
import {Route, Routes, useNavigate, useSearchParams} from 'react-router-dom';
import Temp1 from '../Temp1/Temp1';
import Temp2 from '../Temp2/Temp2';
import Temp3 from '../Temp3/Temp3';



export const UserInput = () =>{
     
    const [params] = useSearchParams();
    console.log(params);

    const navigate= useNavigate();
    
    const [viewInput, setViewInput] = useState(true);
     
    const {accessToken} = JSON.parse(sessionStorage.getItem('user'));

    const [file, setFile] = useState();

    const [selectedImages, setSelectedImages] = useState(null);
    console.log(accessToken);
   
    const [data, setData] = useState({
        name:'',
        number:'',
        email:'',
        address:'',
        linkedurl:'',
        git:'',
        education:'',
        education1:'',
        reference:'',
        reference1:'',
        skills:'',
        skills1:'',
        skills2:'',
        skills3:'',
        summary:'',
        companyName:'',
        desig:'',
        expYearStart:'',
        expYearEnd:'',
        explanation:'',
        companyName1:'',
        desig1:'',
        expYearStart1:'',
        expYearEnd1:'',
        explanation1:'',
        companyName2:'',
        desig2:'',
        expYearStart2:'',
        expYearEnd2:'',
        explanation2:'',
        image:'',
       
    })

const [getID, setID] =useState([])


    const handleChange= (ele) =>{
     const {name, value} = ele.target
     setData({...data, [name] : value});
    }
    const handleImageChange = (event) => {
      const files = event.target.files;
      setSelectedImages(files);
    };

    const handleSubmit = async(ele) =>{
     ele.preventDefault();
     const idValue =v4();
     setID(idValue);
     const formdata= new FormData();
     formdata.append('inputs', selectedImages)
   const response= await fetch(`http://localhost:5000/input`,formdata,{
        method:'POST',
        body : JSON.stringify({...data,id:idValue}),
        headers:{
            "content-type": "application/json/multipart/form-data",
            "auth-token":accessToken,
        },
     })
     navigate(`/input/temp/${params.get('input')}`)
     console.log("I am Template1",params);

     setData({
        name:'',
        number:'',
        email:'',
        address:'',
        linkedurl:'',
        git:'',
        education:'',
        education1:'',
        reference:'',
        reference1:'',
        skills:'',
        skills1:'',
        skills2:'',
        skills3:'',
        summary:'',
        companyName:'',
        desig:'',
        expYearStart:'',
        expYearEnd:'',
        explanation:'',
        companyName1:'',
        desig1:'',
        expYearStart1:'',
        expYearEnd1:'',
        explanation1:'',
        companyName2:'',
        desig2:'',
        expYearStart2:'',
        expYearEnd2:'',
        explanation2:'',
        image:'',
      
     })
 setViewInput(!viewInput)

    }

   console.log(setID)
    return(
        <MyContext.Provider value={{getID, setID}}>
     
          { viewInput && <div className='container'>
            <div className={styles.formContainer}>
            <form action="POST" onSubmit={handleSubmit}>
            <div className={styles.inputBox}>
            <label htmlFor="name">Name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label> 
            <input type="text" name="name" id="name" value={data.name} onChange={handleChange} className={styles.input} /> <br /><br />
            </div>
            <div className={styles.inputBox}>
            <label htmlFor="number"> Number :</label>
             <input type="number" name="number" id="num" value={data.number} onChange={handleChange} className={styles.input} /> <br /> <br />
            </div>
             <div className={styles.inputBox}>
             <label htmlFor="email">Email ID : </label>
             <input type="email" name="email" id="email"  value={data.email} onChange={handleChange} className={styles.input} /> <br /> <br />
             </div>
            {/* <div className={styles.inputBox}>
            <label htmlFor="address">Address :</label>
            <input type="text" name="address" id="address" value={data.address} onChange={handleChange} className={styles.input} /> <br /><br />
            </div> 
              */}
            <div className={styles.inputBox}>
            <label htmlFor="url">LinkedIN : </label>
             <input type="text" name="linkedurl" id="url" value={data.linkedurl} onChange={handleChange} className={styles.input}/> <br /> <br />
            </div>
            <div className={styles.inputBox}>
            <label htmlFor="git">GitHub : &nbsp;&nbsp; </label>
             <input type="url" name="git" id="git" value={data.git} onChange={handleChange} className={styles.input}/> <br /><br />
            </div>
            {/* <div className={styles.inputBox}>
             <label htmlFor="ref">Reference :</label>
             
             <input type="text" name="reference" id="ref" value={data.reference} onChange={handleChange} className={styles.input}/> &nbsp;           
             </div> 
             <input type="text" name="reference1" id="ref1" value={data.reference1} onChange={handleChange} className={styles.inputRef} /> <br /><br /> */}
        <div className={styles.inputMultiBox}>
        <label htmlFor="education">Education :</label>
        <div className=''> 
             <input type="text" name="education"  id="education" value={data.education} onChange={handleChange} className={styles.input}  /> <br />
             <input type="text" name="education1"  id="education1" value={data.education1} onChange={handleChange} className={styles.input} /> <br /><br />
        </div></div>
          <div className={styles.inputMultiBox}>
              <label htmlFor="skills"> Skills :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
             <input type="text" name="skills" id="skils" value={data.skills} onChange={handleChange} className={styles.input} /> <br />
             <input type="text" name="skills1" id="skills1" value={data.skills1} onChange={handleChange}  className={styles.input}  /> <br /><br />
             <input type="text" name="skills2" id="skills2" value={data.skills2} onChange={handleChange} className={styles.input}  /> <br />
             <input type="text" name="skills3" id="skills3" value={data.skills3} onChange={handleChange} className={styles.input}/> <br />
             </div>
           <div className={styles.inputBox}> 
        <label htmlFor="summary">Professional Summary :</label>
        <textarea id="summary" name="summary" rows="4" cols="100" value={data.summary}  onChange={handleChange} className={styles.textarea}  ></textarea> <br />
        </div>
        <p> If you are a fresher, you can include your project. </p>
             <div className={styles.inputBox}> 
              <label htmlFor="companyName"> Company name / Project Name :</label>
              <input type="text" name="companyName" id="companyName" value={data.companyName} onChange={handleChange} className={styles.input}/> <br />
        </div>
        <div className={styles.inputBox}> 
              <label htmlFor="desig"> Designation :</label>
              <input type="text" name="desig" id="desig" value={data.desig} onChange={handleChange} className={styles.input}/> <br />
        </div>
        <div className={styles.inputBox}> 
              <label htmlFor="expYearStart">Duration of starting</label>
              <input type='date' name="expYearStart" id="expYearStart" value={data.expYearStart} onChange={handleChange} className={styles.input}/> <br />
        </div>
        <div className={styles.inputBox}> 
              <label htmlFor="expYearEnd">Duration of End</label>
              <input type="date" name="expYearEnd" id="expYearEnd" value={data.expYearEnd} onChange={handleChange} className={styles.input}/> <br />
        </div>
        <div className={styles.inputBox}> 
        <label htmlFor="explanation">Project Explanation</label>
        <textarea id="explanation" name="explanation" value={data.explanation} rows="4" cols="100" onChange={handleChange} className={styles.textarea}></textarea>
        </div>
        <div className={styles.inputBox}> 
              <label htmlFor="companyName1"> Company name :</label>
              <input type="text" name="companyName1" id="companyName1" value={data.companyName1} onChange={handleChange} className={styles.input}/> <br />
        </div>
        <div className={styles.inputBox}> 
              <label htmlFor="desig1"> Designation :</label>
              <input type="text" name="desig1" id="desig1" value={data.desig1} onChange={handleChange} className={styles.input}/> <br />
        </div>
        <div className={styles.inputBox}> 
              <label htmlFor="expYearStart1">Duration of starting</label>
              <input type="date" name="expYearStart1" id="expYearStart1" value={data.expYearStart1} onChange={handleChange} className={styles.input}/> <br />
        </div>
        <div className={styles.inputBox}> 
              <label htmlFor="expYearEnd1">Duration of End</label>
              <input type="date" name="expYearEnd1" id="expYearEnd1" value={data.expYearEnd1} onChange={handleChange} className={styles.input}/> <br />
        </div>
        <div className={styles.inputBox}> 
        <label htmlFor="explanation1">Project Explanation</label>
        <textarea id="explanation1" name="explanation1" rows="4" cols="100" value={data.explanation1} onChange={handleChange} className={styles.textarea}></textarea>
        </div>
        <div className={styles.inputBox}> 
              <label htmlFor="companyName2"> Company name :</label>
              <input type="text" name="companyName2" id="companyName2" value={data.companyName2} onChange={handleChange} className={styles.input}/> <br />
        </div>
        <div className={styles.inputBox}> 
              <label htmlFor="desig2"> Designation :</label>
              <input type="text" name="desig2" id="desig2" value={data.desig2} onChange={handleChange} className={styles.input}/> <br />
        </div>
        <div className={styles.inputBox}> 
              <label htmlFor="expYearStart2">Duration of starting</label>
              <input type="date" name="expYearStart2" id="expYearStart2" value={data.expYearStart2} onChange={handleChange} className={styles.input}/> <br />
        </div>
        <div className={styles.inputBox}> 
              <label htmlFor="expYearEnd2">Duration of End</label>
              <input type="date" name="expYearEnd2" id="expYearEnd2" value={data.expYearEnd2} onChange={handleChange} className={styles.input}/> <br />
        </div>
        <div className={styles.inputBox}> 
        <label htmlFor="explanation2">Project Explanation</label>
       <textarea id="explanation2" name="explanation2" rows="4" cols="100" onChange={handleChange} value={data.explanation2} className={styles.textarea}></textarea>
        </div>

        <div>
            <input type="file" onChange={handleImageChange} />
        </div>
     
                <button type="submit">Submit the Details</button>
                </form>
                </div>
            </div> }
     
        <Routes>
        <Route path="/temp/1" element={<Temp1/>}/>   
         <Route path="/temp/2" element={<Temp2/>}/> 
         <Route path="/temp/3"  element={<Temp3/>}/> 
        </Routes>
        </MyContext.Provider>
    )
}

export const useInput =() =>{
  return useContext(MyContext)
}

