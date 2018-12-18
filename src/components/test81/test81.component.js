import React from 'react'

const Test81 = ({ something, doSomething }) => (
  <form>
    <div>Test component 81: {something}</div>
    <button onClick={doSomething}>
      Do something
    </button>
  </form>
)

export default Test81
