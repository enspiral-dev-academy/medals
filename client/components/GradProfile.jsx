import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {getGradProfile, getGradTags} from '../actions/gradProfile'
import {getUserProfile} from '../actions/userProfile'

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
    const {preferredName, profilePic, surname, email, phone} = this.props.userProfileData
    const {
      aboutMe, location, interests,
      previousExperience, gitHubLink, linkedInLink,
      portfolioLink1, portfolioLink2, portfolioLink3
    } = this.props.userData
    return (
      <div className='grad-profile'>
        <div className='user-header'>
          <div className='user-image-name'>
            <img src={`${profilePic}`} alt="student profile picture"/>
            <h1>{preferredName}</h1>
            <h1>{surname}</h1>
          </div>
          <div className='user-contact'>
            <h3>{email}</h3>
            <h3>{phone}</h3>
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
              <a href={`${gitHubLink}`} target='_blank'>
                <img src="https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png" height="35px" width="35px"/>
              </a>
            </div>
            <div className='linkedin-link-content'>
              <a href={`${linkedInLink}`} target='_blank'>
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
              <a href={`${portfolioLink1}`} target='_blank'>
                {portfolioLink1}
              </a>
            </div>
            <div className='portfolio-content'>
              <a href={`${portfolioLink2}`} target='_blank'>
                {portfolioLink2}
              </a>
            </div>
            <div className='portfolio-content'>
              <a href={`${portfolioLink3}`} target='_blank'>
                {portfolioLink3}
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
    userProfileData: state.userProfile,
    userData: state.getUserReducer,
    tags: state.getGradTags
  }
}

export default connect(mapStateToProps)(GradProfile)
