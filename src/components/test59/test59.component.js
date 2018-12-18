import React from 'react'

const Test59 = ({ something, doSomething }) => (
  <form>
    <div>Test component 59: {something}</div>
    <button onClick={doSomething}>
      Do something
    </button>
  </form>
)

export default Test59
