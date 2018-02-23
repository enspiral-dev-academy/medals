import React from 'react'
import {requestGradProfile, submitEditGradProfile} from '../actions/gradProfile'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

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
    this.props.dispatch(requestGradProfile(this.state.userId))
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
    return (
      <div>
        <form className='submit-form'>
          <h3>
            About Me:
          </h3>
          <div>
            <input name='aboutMe' onChange={this.handleChange} placeholder={this.props.userData.getUserReducer.aboutMe}/>
          </div>
          <h3>
            Location:
          </h3>
          <div>
            <input name='location' onChange={this.handleChange} placeholder={this.props.userData.getUserReducer.location}/>
          </div>
          <h3>
            Github:
          </h3>
          <div>
            <input name='githubLink' onChange={this.handleChange} placeholder={this.props.userData.getUserReducer.githubLink}/>
          </div>
          <h3>
            Portfolio:
          </h3>
          <div>
            <input name='portfolio' onChange={this.handleChange} placeholder={this.props.userData.getUserReducer.portfolio}/>
          </div>
          <h3>
            Previous Experience:
          </h3>
          <div>
            <input name='previousExperience' onChange={this.handleChange} placeholder={this.props.userData.getUserReducer.previousExperience}/>
          </div>
          <h3>
            Interests:
          </h3>
          <div>
            <input name='interests' onChange={this.handleChange} placeholder={this.props.userData.getUserReducer.interests}/>
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
    userData: state
  }
}

export default connect(mapStateToProps)(GradProfileEdit)
