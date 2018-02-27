import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {Profile} from './Profile'
import {getGradProfile} from '../actions/gradProfile'

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
    this.props.dispatch(getGradProfile(this.state.userId))
  }

  render () {
    const {aboutMe, location, githubLink, linkedinLink, portfolioLinkOne, portfolioLinkTwo, portfolioLinkThree, previousExperience, interests} = this.props.userData
    return (
      <div className='grad-profile'>
        <div className='user-header'>
          <div className='user-image-name'>
            <img src={`${this.props.profile.profilePic}`} alt="student profile picture"/>
            <h1>{this.props.profile.preferredName}</h1>
            <h1>{this.props.profile.surname}</h1>
          </div>
          <div className='user-contact'>
            <h3>{this.props.profile.email}</h3>
            <h3>{this.props.profile.phone}</h3>
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
          <div className='portfolio'>
            <div className='portfolio-title'>
            Portfolio:
            </div>
            <div className='portfolio-content'>
              <p>{portfolioLinkOne}</p>
            </div>
            <div className='portfolio-content'>
              <p>{portfolioLinkTwo}</p>
            </div>
            <div className='portfolio-content'>
              <p>{portfolioLinkThree}</p>
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
    userData: state.getUserReducer
  }
}

export default connect(mapStateToProps)(GradProfile)
