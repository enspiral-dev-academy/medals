import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div className='home'>
      <div className='splash-container'>
        <div className='splash'>
          <h1 className='splash-head'>Reka</h1>
          <p className='splash-subhead'>
            Enabling flavourful interactions
          </p>
          <p>
            <Link to='/events/new' className='pure-button pure-button-primary'>
              Create your next event
            </Link>
          </p>
        </div>
      </div>
      <div className='home-content-wrapper'>
        <div className='content'>
          <p>Reka helps you manage tasting events. Tasting events are heaps of fun to organise and participate in. They are a great opportunity to meet new people and enjoy the company of friends, all while experiencing new sensations of taste and smell. Some themes you might consider are: wine, beer, chocolate, cheese and soup, but the list is long.</p>
          <p>Specifically, Reka helps you manage blind tastings. That way your guests won't be influenced by personal biases, labels, prices or who brought the sample when they cast their votes and opinions. Reka makes these events easy by providing:</p>
          <ul>
            <li>A home page for your event</li>
            <li>Guest registration</li>
            <li>Registration of samples/offerings brought by your guests</li>
            <li>A registry so guests can see ahead of time what others are brining</li>
            <li>A voting platform to use during the event</li>
            <li>Control when the results are available</li>
          </ul>
          <p><Link to='/events/new'>Register your next event now</Link></p>
          <p>Reka means <a href='http://maoridictionary.co.nz/search?keywords=reka' target='_blank'>pleasing, tasty, and flavour</a> in Maori.</p>
        </div>
      </div>
    </div>
  )
}

export default Home
