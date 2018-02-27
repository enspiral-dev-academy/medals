import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {getGradProfile, getGradTags} from '../actions/gradProfile'
import {getUserProfile} from '../actions/userProfile'
// import GradProfileEdit from './GradProfileEdit'

class GradProfile extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      userId: 1
    }
  }
  componentDidMount () {
    this.getGradsDetails()
  }

  getGradsDetails () {
    this.props.dispatch(getUserProfile(this.state.userId))
    this.props.dispatch(getGradProfile(this.state.userId))
    this.props.dispatch(getGradTags(this.state.userId))
  }

  render () {
    // const {preferredName, surname, email, phone} = this.props.userProfileData
    const {aboutMe, location, githubLink, linkedinLink, portfolioLinkOne, portfolioLinkTwo, portfolioLinkThree, previousExperience, interests} = this.props.userData
    return (
      <div className='grad-profile'>
        <div className='user-header'>
          <div className='user-image-name'>
            <h1>Name | Email | Phone</h1>
            {/* <img src={`${profilePic}`} alt="student profile picture"/>
            <h1>{preferredName}</h1>
            <h1>{surname}</h1>
          </div>
          <div className='user-contact'>
            <h3>{email}</h3>
            <h3>{phone}</h3> */}
          </div>
        </div>
        <div className='container'>
          <Link to='/grad-profile/edit'><button>
          Edit Profile
          </button></Link>
          <div className='about-me'>
            <div className='about-me-title'>
            About Me:
            </div>
            <div className='about-me-content'>
              <p>{aboutMe}</p>
            </div>
          </div>
          <div className='location'>
            <div className='location-title'>
            Location:
            </div>
            <div className='location-content'>
              <p>{location}</p>
            </div>
          </div>
          <div className='links'>
            <div className='links-title'>
            Links:
            </div>
            <div className='github-link-content'>
              <a href={`${githubLink}`} target='_blank'>
                <img src="https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png" height="35px" width="35px"/>
              </a>
            </div>
            <div className='linkedin-link-content'>
              <a href={`${linkedinLink}`} target='_blank'>
                <img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/square-linkedin-512.png" height="35px" width="35px"/>
              </a>
            </div>
          </div>
          <div className='tags'>
            <div className='portfolio-title'>
            tags:
            </div>
            <div className='portfolio-content'>
              {this.props.tags.map((tag, id) => {
                return <p key={id}>{tag.tag}</p>
              })}
            </div>
          </div>
          <div className='portfolio'>
            <div className='portfolio-title'>
            Portfolio:
            </div>
            <div className='portfolio-content'>
              <a href={`${portfolioLinkOne}`} target='_blank'>
                {portfolioLinkOne}
              </a>
            </div>
            <div className='portfolio-content'>
              <a href={`${portfolioLinkTwo}`} target='_blank'>
                {portfolioLinkTwo}
              </a>
            </div>
            <div className='portfolio-content'>
              <a href={`${portfolioLinkThree}`} target='_blank'>
                {portfolioLinkThree}
              </a>
            </div>
          </div>
          <div className='previous-experience'>
            <div className='previous-experience-title'>
            Previous Experience:
            </div>
            <div className='previous-experience-content'>
              <p>{previousExperience}</p>
            </div>
          </div>
          <div className='interests'>
            <div className='interests-title'>
            Interests:
            </div>
            <div className='interests-content'>
              <p>{interests}</p>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    userProfileData: state.getUserProfileReducer,
    userData: state.getUserReducer,
    tags: state.getGradTags
  }
}

export default connect(mapStateToProps)(GradProfile)
