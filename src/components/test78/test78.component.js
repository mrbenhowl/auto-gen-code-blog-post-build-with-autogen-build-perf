import React from 'react'

const Test78 = ({ something, doSomething }) => (
  <form>
    <div>Test component 78: {something}</div>
    <button onClick={doSomething}>
      Do something
    </button>
  </form>
)

export default Test78
