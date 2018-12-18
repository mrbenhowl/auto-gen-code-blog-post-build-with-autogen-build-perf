import React from 'react'

const Test41 = ({ something, doSomething }) => (
  <form>
    <div>Test component 41: {something}</div>
    <button onClick={doSomething}>
      Do something
    </button>
  </form>
)

export default Test41
