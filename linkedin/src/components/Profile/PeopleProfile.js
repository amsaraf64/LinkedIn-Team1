import React, {Component} from 'react';
import '../../static/css/PeopleProfile.css';
import Header from '../Header/Header';
import{Link} from 'react-router-dom';
import axios from 'axios';


class PeopleProfile extends Component{
    
    constructor(props){
        super(props);
        console.log(props);

        //bind
        this.addConnection = this.addConnection.bind(this);
        this.logProfileView = this.logProfileView.bind(this);
    }

    componentDidMount(){
       // this.getProfileData();
        this.logProfileView();        
    }

    // getProfileData = () =>{
    //     axios.defaults.withCredentials=true;
    //     var data = {
    //         profileId : this.props.match.params.id
    //     }
    //     axios.post('http://localhost:3001/get-profile-data', data)
    //         .then((response)=>{
    //             if(response.status === 200){
    //                 console.log('profile data response: ', response.data);
    //             }
    //         });
    // }

    logProfileView = ()=>{
        axios.defaults.withCredentials=true;
        var data = {
            profileEmail : "aehari2010@gmail.com",
            viewTime : new Date()
        }

        axios.post('http://localhost:3001/log-profile-view', data)
            .then((response)=>{
                if(response.status === 200){
                    console.log('profile view response', response.data);
                }
            });
    }

    addConnection = ()=>{
        var data = {
            email: "aehari2010@gmail.com"
        }
        var profileData = {};
        axios.defaults.withCredentials=true;
        axios.post('http://localhost:3001/get-profile', data)
            .then((response)=>{
                if(response.status === 200){
                    console.log('response profile', response.data);
                    profileData = response.data.value;
                    axios.post('http://localhost:3001/send-connection-request', profileData)
                    .then((response)=>{
                        console.log('Send Connection res', response.data);
                    });
                }
            });

       
        
        
    }

    render(){
        return(
            <div>
                <Header />
                <div className="row people-profile-container">
                    <div className="col-lg-1"></div>
                    <div className="content-container col-lg-8 mt-5">
                        <div className="intro-container border">
                            <div className="cover-image-container">
                                <img src="https://wallpapercave.com/wp/0557mer.jpg" alt="cover-img" />
                            </div>
                            <div className="profile-img-container ml-4">
                                <img className="profile-img" src="https://img.freepik.com/free-icon/user-filled-person-shape_318-74922.jpg?size=338c&ext=jpg" alt="profile-img"/>
                            </div>
                            <div className="pull-down-div ml-4 row">
                                <div className="col-7">
                                    <div className="profile-name">Arivoli AE</div>
                                    <div className="profile-summary">Actively seeking Summer Internship | Studies at San Jose State University</div>
                                    <div>San Jose, California</div>
                                    <div className="mt-2"><button className="btn btn-md profile-btn" onClick={this.addConnection}>Connect</button></div>
                                </div>
                                <div className="col-5 flt-right">
                                    <div className="p-1">San Jose State University</div>
                                    <div className="p-1">See contact info</div>
                                    <div className="p-1"><i className="fas fa-user-friends pr-2"></i>See Connections</div>
                                </div>
                            </div> 
                            <hr className="ml-4 mr-4"/>   
                            <div className="mb-5 ml-4 mr-4">
                            I am pursuing Masters in Software Engineering specializing in Enterprise Software Technologies at San Jose State University. 

                                I am looking for opportunities in the field of Software Development. 

                                I worked as a Software Analyst at Aspire Systems. Strong engineering professional with a Bachelor of Technology (B.Tech.) focused in Computer Science from SASTRA University. 

                                I am very passionate about software engineering and eager to work with new technologies and in a challenging environment. I have over 18 months of experience as a Software Developer with a demonstrated history of working in the information technology and services industry. 

                                Skills:

                                PROGRAMMING: JAVA, C# .NET, Node JS (Express), React JS, Redux, HTML5, CSS, jQuery
                                TECHNOLOGIES: Apache Kafka, Mocha, JUnit, Episerver CMS, Azure, AWS
                                DATABASE: SQL Server, MySQL, MongoDB
                                TOOLS: JMeter, JIRA, Confluence, Git, IIS
                            </div>
                        </div>
                        <div className="exp-container mt-5 border pb-3">
                            <h4 className="ml-4 mt-4">Experience</h4>
                            <hr/>
                            <div className="exp-content-container ml-4 row">
                                <div className="col-1">
                                    <img className="profile-company-img-container" src="https://media.licdn.com/dms/image/C4D0BAQEl0ggQ_q2eow/company-logo_400_400/0?e=1551916800&v=beta&t=bRRW076zg7OTMag2B9OrXHSfIXdP9GRXVd5YVUNr3bw" alt="profile-company-img"/>
                                </div>
                                <div className="col-6 ml-4">
                                    <div>Software Analyst</div>
                                    <div>Aspire Systems</div>
                                    <div>Jun 2016-Jun 2018</div>
                                    <div>Chennai Area, India</div>
                                </div>
                            </div>
                            <hr/>
                            <div className="exp-content-container ml-4 row">
                                <div className="col-1">
                                    <img className="profile-company-img-container" src="https://media.licdn.com/dms/image/C4D0BAQEl0ggQ_q2eow/company-logo_400_400/0?e=1551916800&v=beta&t=bRRW076zg7OTMag2B9OrXHSfIXdP9GRXVd5YVUNr3bw" alt="profile-company-img"/>
                                </div>
                                <div className="col-6 ml-4">
                                    <div>Software Analyst</div>
                                    <div>Aspire Systems</div>
                                    <div>Jun 2016-Jun 2018</div>
                                    <div>Chennai Area, India</div>
                                </div>
                            </div>

                        </div>
                        <div className="edu-container mt-5 border pb-4">
                            <h4 className="ml-4 mt-4">Education</h4>
                            <hr/>
                            <div className="edu-content-container ml-4 row">
                                <div className="col-1">
                                    <img className="profile-edu-img-container" src="https://media.licdn.com/dms/image/C4E0BAQHaOICdw5hkVQ/company-logo_400_400/0?e=1551916800&v=beta&t=pQk2VKX5m9Ge2n_aBrYY-zNjQbIFLE2DFcvrHCOlGLc" alt="profile-company-img"/>
                                </div>
                                <div className="col-6 ml-4">
                                    <div>San Jose State University</div>
                                    <div>Master's degree, Computer Software Engineering</div>
                                    <div>2018-2020</div>
                                </div>
                            </div>
                            <hr/>
                            <div className="edu-content-container ml-4 row">
                                <div className="col-1">
                                    <img className="profile-edu-img-container" src="https://media.licdn.com/dms/image/C4E0BAQHaOICdw5hkVQ/company-logo_400_400/0?e=1551916800&v=beta&t=pQk2VKX5m9Ge2n_aBrYY-zNjQbIFLE2DFcvrHCOlGLc" alt="profile-company-img"/>
                                </div>
                                <div className="col-6 ml-4">
                                    <div>San Jose State University</div>
                                    <div>Master's degree, Computer Software Engineering</div>
                                    <div>2018-2020</div>
                                </div>
                            </div>
                        </div>
                        <div className="profile-skills-container mt-5 border pb-4">
                            <h4 className="ml-4 mt-4">Skills</h4>
                            <hr/>
                            <div className="skills-content-container ml-4">
                                <div className="skill-name">Node JS</div>
                            </div>
                            <hr/>
                            <div className="skills-content-container ml-4">
                                <div className="skill-name">Node JS</div>
                            </div>
                        </div>
                    </div>
                    
                </div>

            </div>
        )
    }
}

export default PeopleProfile;