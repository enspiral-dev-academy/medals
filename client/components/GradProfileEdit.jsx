import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {saveGradProfile} from '../actions/gradProfileSaveEdit'
import {getGradProfile} from '../actions/gradProfile'

class GradProfileEdit extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      userId: 1,
      aboutMe: '',
      location: '',
      githubLink: '',
      portfolio: '',
      previousExperience: '',
      interests: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.addGradProfile = this.addGradProfile.bind(this)
    //  this.getGradsDetails = this.getGradsDetails.bind(this)
  }

  componentDidMount () {
    this.getGradsDetails()
  }

  componentWillReceiveProps (props) {
    this.setState(props.userData)
  }

  getGradsDetails () {
    this.props.dispatch(getGradProfile(this.state.userId))
  }

  handleChange (evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  addGradProfile () {
    const currentUser = this.state
    this.props.dispatch(saveGradProfile(currentUser))
  }
  

  render () {
    const {aboutMe, location, githubLink, portfolio, previousExperience, interests} = this.props.userData
    return (
      <div>
        <form className='submit-form'>
          <h3>
            About Me:
          </h3>
          <div>
            <textarea name='aboutMe' onChange={this.handleChange} placeholder={aboutMe}/>
          </div>
          <h3>
            Location:
          </h3>
          <div>
            <input name='location' onChange={this.handleChange} placeholder={location}/>
          </div>
          <h3>
            Github:
          </h3>
          <div>
            <input name='githubLink' onChange={this.handleChange} placeholder={githubLink}/>
          </div>
          <h3>
            Portfolio:
          </h3>
          <div>
            <input name='portfolio' onChange={this.handleChange} placeholder={portfolio}/>
          </div>
          <h3>
            Previous Experience:
          </h3>
          <div>
            <textarea name='previousExperience' onChange={this.handleChange} placeholder={previousExperience}/>
          </div>
          <h3>
            Interests:
          </h3>
          <div>
            <textarea name='interests' onChange={this.handleChange} placeholder={interests}/>
          </div>
          <Link to='/grad-profile'><button onClick={() => this.addGradProfile()}>Save Changes
          </button></Link>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    userData: state.getUserReducer
  }
}

export default connect(mapStateToProps)(GradProfileEdit)
