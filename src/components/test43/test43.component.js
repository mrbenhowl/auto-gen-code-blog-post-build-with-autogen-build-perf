import React from 'react'

const Test43 = ({ something, doSomething }) => (
  <form>
    <div>Test component 43: {something}</div>
    <button onClick={doSomething}>
      Do something
    </button>
  </form>
)

export default Test43
