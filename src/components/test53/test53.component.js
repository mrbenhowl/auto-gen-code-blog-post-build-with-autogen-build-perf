import React from 'react'

const Test53 = ({ something, doSomething }) => (
  <form>
    <div>Test component 53: {something}</div>
    <button onClick={doSomething}>
      Do something
    </button>
  </form>
)

export default Test53
