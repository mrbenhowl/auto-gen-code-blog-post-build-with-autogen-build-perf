import React from 'react'

const Test71 = ({ something, doSomething }) => (
  <form>
    <div>Test component 71: {something}</div>
    <button onClick={doSomething}>
      Do something
    </button>
  </form>
)

export default Test71
