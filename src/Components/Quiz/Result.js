import React from 'react'

function Result({data,score}) {
  return (
    <>    
        <div className='container p-4'>
                <h1 className='text-success'>your score is {score}</h1>
            </div>
    </>
  )
}

export default Result