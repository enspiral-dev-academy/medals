import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

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

  getGradsDetails () {
    // this.props.dispatch(requestGradProfile(this.state.userId))
    this.props.dispatch(getGradProfile(this.state.userId))
  }

  handleChange (evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  addGradProfile () {
    const currentUser = this.state
    this.props.dispatch(submitEditGradProfile(currentUser))
  }

  submitChangedData () {
    // call redux for currentUser
  }

  render () {
    const {aboutMe, location, github, portfolio, previousExperience, interests} = this.props.userData
    return (
      <div>
        <form className='submit-form'>
          <h3>
            About Me:
          </h3>
          <div>
            <input name='aboutMe' onChange={this.handleChange} placeholder={aboutMe}/>
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
            <input name='githubLink' onChange={this.handleChange} placeholder={github}/>
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
            <input name='previousExperience' onChange={this.handleChange} placeholder={previousExperience}/>
          </div>
          <h3>
            Interests:
          </h3>
          <div>
            <input name='interests' onChange={this.handleChange} placeholder={interests}/>
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
