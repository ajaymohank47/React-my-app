import Test from './components/Test'
import Test1 from './components/Test1'
import img1 from './assets/Killua.jpg';  // with the correct extension

function App(){
    return (
      <div>
       <Test></Test>
       <Test1></Test1>
       <img src={img1} alt="Description of the image"style={{ width: '1200px', height: 'auto' }} />
      </div>
    )
  }
  export default App;