// import React from 'react'
// import { useNavigate,Link } from 'react-router-dom'
// import InputItem from './InputItem'
// import { HiArrowRight } from 'react-icons/hi'
// import{AiOutlineMail} from 'react-icons/ai'
// import {BsTelephone} from 'react-icons/bs'
// import { GiAges} from 'react-icons/gi'
// import {FaBirthdayCake} from 'react-icons/fa'
// import {MdOutlineSchool} from 'react-icons/md'
// import { CgWebsite} from 'react-icons/cg'
// import 'animate.css'
// import Resume from './Resume'

// const PromptUser = ({handleChange,imageSource,OnButtonClick,userObject}) => {
//   const navigate = useNavigate();
//   const onButtonClick=()=>{
//     alert(`WINDOWS DIMENSION : ${window.innerWidth}, ${window.innerHeight}`)
//     navigate('/resume')
//   }
//   return (
//     <>
//       {OnButtonClick ?<Resume userObject={userObject} imageSource={imageSource}/> : <div className='prompt-container animate__animated animate__bounce'>
//         <div className='inputs'>
//           <InputItem className='first-name' onChange={handleChange} label='First Name' placeholder='Enter your first name' name='firstName'/>
//           <InputItem className='last-name' onChange={handleChange} label='Last Name' placeholder='Enter your Last name' name='lastName'/>
//           <InputItem className='email' onChange={handleChange} label={<AiOutlineMail></AiOutlineMail>} placeholder='Enter your Email' name='email'/>
//           <InputItem className='phone' onChange={handleChange} label={<BsTelephone></BsTelephone>} placeholder='Enter your Phone Number' name='phoneNumber'/>
//           <InputItem className='website' onChange={handleChange} label={<CgWebsite></CgWebsite>} placeholder='Enter your Website' name='website'/>
//           <InputItem className='birth-date' onChange={handleChange} label={<FaBirthdayCake></FaBirthdayCake>} type='date' name='DOB'/>
//           <InputItem className='age' onChange={handleChange} label={<GiAges></GiAges>}  name='age' placeholder='Enter your age' type='number'/>
//           <InputItem className='skills' onChange={handleChange} label='skills' placeholder='List one relevant skill' name='skills'/>
//           <InputItem className='experience' onChange={handleChange} label={<MdOutlineSchool></MdOutlineSchool>} placeholder='Enter your Experience' name='experience'/>
//           <InputItem className='graduationYear' onChange={handleChange} label='Graduation Year' placeholder='Enter your Graduation Year' name='graduationYear'/>
//           <InputItem className='accomplishments' onChange={handleChange} label='Accomplishment' placeholder='List one accomplishment' name='accomplishment'/>
//           <InputItem className='university' onChange={handleChange} label='University' placeholder='Enter your University Name' name='university'/>
//           <InputItem className='profile' onChange={handleChange}  placeholder='Write about  yourself' name='profile' isTextArea={true}/>
//           <button className='generate-button' onClick={()=>{
//             onButtonClick()
//           }}>Generate Resume <HiArrowRight></HiArrowRight></button>
//         </div>
//         </div>} 
//     </>
//   )
// }

// export default PromptUser