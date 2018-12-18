import React from 'react'

const Test62 = ({ something, doSomething }) => (
  <form>
    <div>Test component 62: {something}</div>
    <button onClick={doSomething}>
      Do something
    </button>
  </form>
)

export default Test62
