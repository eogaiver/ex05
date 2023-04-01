import React, { useState } from 'react'
import './App.css';
import Prodeucts from './components/Prodeucts';
import Students from './components/Students';
import ProductPage from './ProductPage';
import RouterPage from './components/RouterPage';

const App = () => {
    
    return (
        <div className='App'>
            <RouterPage/>
        </div>

        // <div className="App">
        //     {/* <Students/>
        //     <hr/> */}
        //     <Prodeucts/>
        //     {/* <ProductPage/> */}


        // </div>
    );
}

export default App;

{/* <Header />
<Component2 />
<Component1 /> */}

{/* <h1>리액트시작</h1> */ }
{/* <Component1 name='홍길동' age={26} shcool='인하대학교' />
      <Component1 name='인하1' age={26} shcool='인하대학교' /> */}
      // <Component2/>
      // <hr></hr>
      // <Component2/>