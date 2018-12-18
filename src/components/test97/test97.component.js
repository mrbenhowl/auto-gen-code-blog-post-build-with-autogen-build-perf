import React from 'react'

const Test97 = ({ something, doSomething }) => (
  <form>
    <div>Test component 97: {something}</div>
    <button onClick={doSomething}>
      Do something
    </button>
  </form>
)

export default Test97
