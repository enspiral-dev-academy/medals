import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

// import {requestGradProfile} from '../actions/gradProfile'
import {saveGradProfile} from '../actions/gradProfileSaveEdit'
import {getGradProfile} from '../actions/gradProfile'

class GradProfileEdit extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      userId: 1,
      aboutMe: this.props.userData.aboutMe,
      location: '',
      githubLink: '',
      portfolio: '',
      previousExperience: '',
      interests: '',
      editable: false
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

  // check () {
  //   this.setState({editable: false})
  //   if (this.props.onChange) {
  //     this.props.onChange(
  //       [this]
  //     )
  //   }
  // }

  addGradProfile () {
    const currentUser = this.state
    this.props.dispatch(saveGradProfile(currentUser))
  }

  submitChangedData () {
    // call redux for currentUser
  }

  toggleEdit () {
    if (!this.state.editable) {
      this.setState({editable: true})
    } else if (this.state.editable) {
      this.setState({editable: false})
    }
  }

  check () {
    this.addGradProfile()
  }

  render () {
    const {aboutMe, location, github, portfolio, previousExperience, interests} = this.props.userData
    const {value, editable} = this.state
    return (
      <div>
        <div>
          <button onClick={this.toggleEdit}>Toggle Editing</button>
        </div>
        <div>
          {editable
            ? <div>
              <form className='submit-form'>
                <h3>
            About Me:
                </h3>
                <div>
                  <input name='aboutMe' onChange={this.handleChange} value={aboutMe}/>
                </div>
                <h3>
            Location:
                </h3>
                <div>
                  <input name='location' onChange={this.handleChange} value={location}/>
                </div>
                <h3>
            Github:
                </h3>
                <div>
                  <input name='githubLink' onChange={this.handleChange} value={github}/>
                </div>
                <h3>
            Portfolio:
                </h3>
                <div>
                  <input name='portfolio' onChange={this.handleChange} value={portfolio}/>
                </div>
                <h3>
            Previous Experience:
                </h3>
                <div>
                  <input name='previousExperience' onChange={this.handleChange} value={previousExperience}/>
                </div>
                <h3>
            Interests:
                </h3>
                <div>
                  <input name='interests' onChange={this.handleChange} value={interests}/>
                </div>
                <Link to='/grad-profile'><button onClick={this.check}>Save Changes
                </button></Link>
              </form>
            </div>
            : <p>
              {value || ' '}

            </p>}
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

export default connect(mapStateToProps)(GradProfileEdit)
