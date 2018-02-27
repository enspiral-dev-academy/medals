import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {getGradProfile, getGradTags} from '../actions/gradProfile'
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
    // this.props.dispatch(requestGradProfile(this.state.userId))
    this.props.dispatch(getGradProfile(this.state.userId))
    this.props.dispatch(getGradTags(this.state.userId))
  }

  onClick () {

  }

  render () {
    const {aboutMe, location, githubLink, portfolio, previousExperience, interests} = this.props.userData
    const {tags} = this.props.tags || ['hello']
     console.log(tags)
    return (
      <div className='grad-profile'>
        <div className='container'>
          <h1>Name | Email | Phone</h1>
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
          <div className='github-link'>
            <div className='github-link-title'>
            Github Link:
            </div>
            <div className='github-link-content'>
              <a href={`${githubLink}`} target='_blank'>
                <img src="https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png"/>
              </a>
            </div>
          </div>
          <div className='tags'>
            <div className='portfolio-title'>
            tags:
            </div>
            {/* <div className='portfolio-content'>
              {tags.map((tag, id) => {
                return <p key={id}>{tag}</p>
              })}
            </div> */}
          </div>
          <div className='portfolio'>
            <div className='portfolio-title'>
            Portfolio:
            </div>
            <div className='portfolio-content'>
              <p>{portfolio}</p>
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
    userData: state.getUserReducer,
    tags: state.getGradTags
  }
}

export default connect(mapStateToProps)(GradProfile)
