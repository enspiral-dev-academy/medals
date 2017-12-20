import React from 'react'

import StaffRegistration from './registration/Staff'
import StudentsRegistration from './registration/Students'
import EmployersRegistration from './registration/Employers'

const STAFF = 'STAFF'
const STUDENTS = 'STUDENTS'
const EMPLOYERS = 'EMPLOYERS'

class Register extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      activeTab: STUDENTS
    }
    this.getTabSelector = this.getTabSelector.bind(this)
  }

  getTabSelector (tab) {
    return () => this.setState({activeTab: tab})
  }

  render () {
    const staffTab = this.state.activeTab === STAFF ? 'is-active' : ''
    const studentsTab = this.state.activeTab === STUDENTS ? 'is-active' : ''
    const employersTab = this.state.activeTab === EMPLOYERS ? 'is-active' : ''
    return (
      <div className='register'>
        <section className='section'>
          <div className='content'>
            <h1>Registration</h1>
          </div>
          <p className='content'>
            <span className='bold'>IMPORTANT:</span> All registrations must be approved by an admin. If you do not receive a welcome email within 24 hours, please contact us at <a href="mailto:medals@devacademy.co.nz">medals@devacademy.co.nz</a>.
          </p>
          <div className="tabs is-fullwidth is-boxed is-large">
            <ul>
              <li className={studentsTab} onClick={this.getTabSelector(STUDENTS)}>
                <a>
                  <span className="icon"><i className="fa fa-graduation-cap"></i></span>
                  <span>Students</span>
                </a>
              </li>
              <li className={staffTab} onClick={this.getTabSelector(STAFF)}>
                <a>
                  <span className="icon"><i className="fa fa-user"></i></span>
                  <span>EDA Staff</span>
                </a>
              </li>
              <li className={employersTab} onClick={this.getTabSelector(EMPLOYERS)}>
                <a>
                  <span className="icon"><i className="fa fa-building"></i></span>
                  <span>Employers</span>
                </a>
              </li>
            </ul>
          </div>
          {studentsTab && <StudentsRegistration />}
          {staffTab && <StaffRegistration />}
          {employersTab && <EmployersRegistration />}
        </section>
      </div>
    )
  }
}

export default Register
