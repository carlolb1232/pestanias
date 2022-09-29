import React from 'react'

const Content = (props) => {
  const { tabNumber } = props;
  return (
    <div className='text-container'>
      <p>{`Tab ${tabNumber} is showing here`}</p>
    </div>
  )
}

export default Content;