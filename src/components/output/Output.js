import styles from './Output.module.css'
import {AiOutlineMail,AiFillLinkedin,AiFillGithub,AiFillCalendar} from 'react-icons/ai'
import {BsFillTelephoneFill} from 'react-icons/bs'
import{GoPrimitiveDot} from 'react-icons/go'
import{GrLocation} from 'react-icons/gr'
import{MdEmail} from 'react-icons/md'
const Output=(props)=>{
    
    return(<>
        <div className={styles.mainDiv}>
            <div className={styles.outerDiv}>
                <div className={styles.innerDiv}>
                    <div className={styles.innerDiv1}>
                        <div className={styles.innerDiv12}>
                    <h1>HITEN KAKWANI</h1>
                    <h3 className={styles.iconColor}>Sophomore at chitkara university,Punjab</h3>
                    <div className={styles.rowWise}>
                        <div className={styles.rowWise1}>
                        <MdEmail className={styles.iconColor}></MdEmail>
                        <p>hitenkakwani400@gmail.com</p>
                        </div>
                        <div className={styles.rowWise1}>
                        <BsFillTelephoneFill className={styles.iconColor}></BsFillTelephoneFill>
                        <p>+91 7828892224</p>
                        </div>
                        <div className={styles.rowWise1}>
                        <AiFillLinkedin className={styles.iconColor}></AiFillLinkedin>
                        <p>hitenkakwani400</p>
                        </div>
                        <div className={styles.rowWise1}>
                        <AiFillGithub className={styles.iconColor}></AiFillGithub>
                        <p>hiten400</p>
                        </div>
                    </div>
                        </div>
                    </div>
                </div>
                <div className={styles.innerDiv1}>
                    <div className={styles.innerDiv2}>
                        <div className={styles.innerDiv11}>
                            <h2 className={styles.description}>WORK EXPERIENCE</h2>
                            <div className={styles.lineDiv}></div>
                            <h4>FRONTEND DEVELOPER</h4>
                            
                            <div className={styles.rowWise}>
                            <h4 className={styles.description}>AMAZON</h4>
                                <GrLocation></GrLocation>
                                <p>Banglore</p>
                            </div>
                            <div className={styles.rowWise}>
                                <AiFillCalendar></AiFillCalendar>
                                <p>July 2022 - JUNE 2023</p>
                            </div>
                            <div className={styles.detailedDes}>
                                <div className={styles.rowWise}>
                                <GoPrimitiveDot ></GoPrimitiveDot>
                                <p>Allow user to contact through sending feedback forms directly to email
                                    using EmailJS
                                </p>
                                </div>
                                <div className={styles.rowWise}>
                                <GoPrimitiveDot></GoPrimitiveDot>
                                <p>Fully responsive and dynamic
                                </p>
                                </div>
                                <div className={styles.rowWise}>
                                <GoPrimitiveDot></GoPrimitiveDot>
                                <p>Customized Rich UI/UX experience
                                </p>
                                </div>
                                <div className={styles.rowWise}>
                                <GoPrimitiveDot></GoPrimitiveDot>
                                <p>Used inbuilt api of whatsapp and instagram to DM
                                </p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.innerDiv11}>
                        <h2 className={styles.description}>PROJECTS</h2>
                        <div className={styles.lineDiv}></div>
                        <h4>Resume Builder</h4>
                        <h4 className={styles.description}>React JS,ReactIcons, Material UI, Bootstrap</h4>
                        <div className={styles.rowWise}>
                            <AiFillCalendar></AiFillCalendar>
                            <p>July 2022</p>
                        </div>
                        <div className={styles.detailedDes}>
                            <div className={styles.rowWise}>
                            <GoPrimitiveDot ></GoPrimitiveDot>
                            <p>Allow user to contact through sending feedback forms directly to email
                                using EmailJS
                            </p>
                            </div>
                            <div className={styles.rowWise}>
                            <GoPrimitiveDot></GoPrimitiveDot>
                            <p>Fully responsive and dynamic
                            </p>
                            </div>
                            <div className={styles.rowWise}>
                            <GoPrimitiveDot></GoPrimitiveDot>
                            <p>Customized Rich UI/UX experience
                            </p>
                            </div>
                            <div className={styles.rowWise}>
                            <GoPrimitiveDot></GoPrimitiveDot>
                            <p>Used inbuilt api of whatsapp and instagram to DM
                            </p>
                            </div>
                        </div>
                        
                        </div>
                    </div>
                    <div className={styles.innerDiv2}>
                    <div className={styles.innerDiv11}>
                        <h2 className={styles.description}>EDUCATION</h2>
                        <div className={styles.lineDiv}></div>
                        <h4>B.Tech in Computer Science and
                                Engineering, 9.90 CGPA
                        </h4>
                        <h4 className={styles.description}>Chitkara University,Punjab</h4>
                        <div className={styles.rowWise}>
                            <AiFillCalendar></AiFillCalendar>
                            <p>July 2020 - JUNE 2024</p>
                            
                        </div>
                        <h4>12th Std. CBSE Board, 86.2%
                        </h4>
                        <h4 className={styles.description}>Indore Public School, Indore, India</h4>
                        <div className={styles.rowWise}>
                            <AiFillCalendar></AiFillCalendar>
                            <p>April 2019 - March 2020</p>
                            
                        </div>
                        <h4>10th Std. CBSE Board, 89.2%
                        </h4>
                        <h4 className={styles.description}>Indore Public School, Indore, India</h4>
                        <div className={styles.rowWise}>
                            <AiFillCalendar></AiFillCalendar>
                            <p>April 2017 - March 2018</p>
                            
                        </div>
                        
                    </div>
                    <div className={styles.innerDiv11}>
                        <h2 className={styles.description}>ACHIEVMENTS</h2>
                        <div className={styles.lineDiv}></div>
                        <div className={styles.detailedDes}>
                            <div className={styles.rowWise}>
                            <GoPrimitiveDot ></GoPrimitiveDot>
                            <p>Allow user to contact through sending feedback forms directly to email
                                using EmailJS
                            </p>
                            </div>
                            <div className={styles.rowWise}>
                            <GoPrimitiveDot></GoPrimitiveDot>
                            <p>Fully responsive and dynamic
                            </p>
                            </div>
                            <div className={styles.rowWise}>
                            <GoPrimitiveDot></GoPrimitiveDot>
                            <p>Customized Rich UI/UX experience
                            </p>
                            </div>
                            <div className={styles.rowWise}>
                            <GoPrimitiveDot></GoPrimitiveDot>
                            <p>Used inbuilt api of whatsapp and instagram to DM
                            </p>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
       
    </>);
};
export default Output;