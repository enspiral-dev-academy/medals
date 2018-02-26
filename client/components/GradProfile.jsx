import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import EditableComponent from './EditableComponent'
import EditableLinkComponent from './EditableLinkComponent'

import {saveGradProfile} from '../actions/gradProfileSaveEdit'
import {getGradProfile} from '../actions/gradProfile'
// import GradProfileEdit from './GradProfileEdit'

class GradProfile extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      userId: 1,
      editable: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.addGradProfile = this.addGradProfile.bind(this)
    this.setEditable = this.setEditable.bind(this)
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

  setEditable () {
    this.setState({editable: !this.state.editable})
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
          <div className='about-me'>
            <div className='about-me-title'>
            About Me: <button type='button' onClick={() => this.setEditable()}>Edit</button>

            </div>
            <div className='about-me-content'>
              <EditableComponent content={aboutMe} type='aboutMe' handleChange={this.handleChange} addGradProfile={this.addGradProfile} editable={this.setEditable} isEditable={this.state.editable}/>
            </div>
          </div>
          <div className='location'>
            <div className='location-title'>
            Location:
            </div>
            <div className='location-content'>
              <EditableComponent content={location} type='location' handleChange={this.handleChange} addGradProfile={this.addGradProfile} editable={this.setEditable} isEditable={this.state.editable}/>
            </div>
          </div>
          <div className='github-link'>
            <div className='github-link-title'>
            Github Link:
            </div>
            <div className='github-link-content'>
              <EditableLinkComponent content={githubLink} type='githubLink' handleChange={this.handleChange} addGradProfile={this.addGradProfile} editable={this.setEditable} isEditable={this.state.editable} img="https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png"/>
            </div>
          </div>
          <div className='portfolio'>
            <div className='portfolio-title'>
            Portfolio:
            </div>
            <div className='portfolio-content'>
              <EditableLinkComponent content={portfolio} type='portfolio' handleChange={this.handleChange} addGradProfile={this.addGradProfile} editable={this.setEditable} isEditable={this.state.editable}/>
            </div>
          </div>
          <div className='previous-experience'>
            <div className='previous-experience-title'>
            Previous Experience:
            </div>
            <div className='previous-experience-content'>
              <EditableComponent content={previousExperience} type='previousExperience' handleChange={this.handleChange} addGradProfile={this.addGradProfile} editable={this.setEditable} isEditable={this.state.editable}/>
            </div>
          </div>
          <div className='interests'>
            <div className='interests-title'>
            Interests:
            </div>
            <div className='interests-content'>
              <EditableComponent content={interests} type='interests' handleChange={this.handleChange} addGradProfile={this.addGradProfile} editable={this.setEditable} isEditable={this.state.editable}/>
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
    loggedUser: state.userDetails
  }
}

export default connect(mapStateToProps)(GradProfile)
