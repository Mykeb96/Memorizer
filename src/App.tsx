import './styles/App.css'

import Card from './components/Card'

function App() {
  const arr = [
    1,
    2,
    3,
    4,
    5,
  ]

  return (
    <>
      {arr.map((el: number, key: number) => <Card key={key} num={el} />)}
    </>
  )
}

export default App
