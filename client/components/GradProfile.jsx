import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import EditableComponent from './EditableComponent'

import {saveGradProfile} from '../actions/gradProfileSaveEdit'
import {getGradProfile} from '../actions/gradProfile'
// import GradProfileEdit from './GradProfileEdit'

class GradProfile extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      userId: 1
    }
    this.handleChange = this.handleChange.bind(this)
    this.addGradProfile = this.addGradProfile.bind(this)
  }

  componentDidMount () {
    this.getGradsDetails()
  }

  componentWillReceiveProps (props) {
    this.setState(props.userData)
  }

  getGradsDetails () {
    // this.props.dispatch(requestGradProfile(this.state.userId))
    this.props.dispatch(getGradProfile(this.state.userId))
  }

  handleChange (evt, type) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  addGradProfile () {
    const currentUser = this.state
    this.props.dispatch(saveGradProfile(currentUser))
    window.location.reload()
  }

  render () {
    const {aboutMe, location, githubLink, portfolio, previousExperience, interests} = this.props.userData
    return (
      <div className='grad-profile'>
        <div className='container'>
          <h1>Name | Email | Phone</h1>
          <Link to='/grad-profile/edit'><button>
          Edit Profile
          </button></Link>
          <div className='about-me'>

            {/* Current Work v v v */}
            <div className='about-me-title'>
            About Me:
            </div>
            <div className='about-me-content'>
              <EditableComponent content={aboutMe} type='aboutMe' handleChange={this.handleChange} addGradProfile={this.addGradProfile}/>
            </div>
          </div>

          {/* Current Work ^ ^ ^ */}

          <div className='location'>
            <div className='location-title'>
            Location:
            </div>
            <div className='location-content'>
              <EditableComponent content={location} type='location' handleChange={this.handleChange} addGradProfile={this.addGradProfile}/>
            </div>
          </div>
          <div className='github-link'>
            <div className='github-link-title'>
            Github Link:
            </div>
            <div className='github-link-content'>
              <a href={`${githubLink}`}>{githubLink}</a>
            </div>
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
    userData: state.getUserReducer
  }
}

export default connect(mapStateToProps)(GradProfile)
