/* import Navigation from './components/navigation/Navigation.tsx'*/
import Router from './route/Router'

function App() {

  return (
      <div> 
       <Router/>
       {/* <Navigation/> */} {/* Have to have it in each file as there is some pages not needing it */}
      </div>
  )
}

export default App
