import React from 'react'

const Test60 = ({ something, doSomething }) => (
  <form>
    <div>Test component 60: {something}</div>
    <button onClick={doSomething}>
      Do something
    </button>
  </form>
)

export default Test60
