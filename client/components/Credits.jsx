import React from 'react'

import contributors from '../data/contributors.json'

const ghUrl = 'https://github.com'

const Credits = () => {
  return (
    <div className='credits'>
      <h1>The awesome developers who&apos;ve contributed to the Medals platform</h1>
      <ul>
        {contributors.map(({username, firstName, lastName}) => {
          return <li key={username}>
            <a target='_blank' href={`${ghUrl}/${username}`}>
              {firstName} {lastName}
            </a>
          </li>
        })}
        <li>... and some EDA staff</li>
      </ul>
    </div>
  )
}

export default Credits
