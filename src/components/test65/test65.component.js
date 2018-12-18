import React from 'react'

const Test65 = ({ something, doSomething }) => (
  <form>
    <div>Test component 65: {something}</div>
    <button onClick={doSomething}>
      Do something
    </button>
  </form>
)

export default Test65
