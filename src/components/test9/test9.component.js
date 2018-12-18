import React from 'react'

const Test9 = ({ something, doSomething }) => (
  <form>
    <div>Test component 9: {something}</div>
    <button onClick={doSomething}>
      Do something
    </button>
  </form>
)

export default Test9
