import React from 'react'

const Test17 = ({ something, doSomething }) => (
  <form>
    <div>Test component 17: {something}</div>
    <button onClick={doSomething}>
      Do something
    </button>
  </form>
)

export default Test17
