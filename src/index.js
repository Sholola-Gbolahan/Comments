import React from 'react';
import ReactDom from 'react-dom/client';
import { faker } from '@faker-js/faker'

const App = () => {
    return (
      <div className='ui container comments'>
        <div className='comment'>
          <a href='/' className='avatar'>
            <img alt='Avatar' src={faker.image.avatar()}/>
          </a>
          <div className='content'>
            <a href='/' className='author'>Sam</a>
            <div className='metadata'>
              <span>Today at 6:00pm </span>
            </div>
            <div className='text'>Nice blog post!</div>   
          </div>
          
        </div>

        <div className='comment'>
          <a href='/' className='avatar'>
            <img alt='Avatar' src={faker.image.avatar()}/>
          </a>
          <div className='content'>
            <a href='/' className='author'>Sam</a>
            <div className='metadata'>
              <span>Today at 6:00pm </span>
            </div>
            <div className='text'>Nice blog post!</div>   
          </div>
          
        </div>
        
      </div>

            );

}

const root = ReactDom.createRoot(document.querySelector('#root'))

root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );