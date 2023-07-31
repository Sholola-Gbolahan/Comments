import React from 'react';
import ReactDom from 'react-dom/client';
import Comment from './CommentDetails';
import { faker } from '@faker-js/faker';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
      <>
        <div className='ui container comments'>

          <ApprovalCard >
            <Comment author ='SamR' timeAgo='Today at 2:30pm' feedback='Nice blog post' avatar={faker.image.avatar()}/>
          </ApprovalCard>

          <ApprovalCard>
           <Comment author ='Daniel' timeAgo='Yesterday at 4:00pm'  feedback='Kinda of cool though' avatar={faker.image.avatar()} />
          </ApprovalCard>
          
          <ApprovalCard>
            <Comment author='Samson' timeAgo='Today at 2:30pm'  feedback='I feel you bro, keep it up' avatar={faker.image.avatar()}/> 
          </ApprovalCard>

          
           

        </div>
       
      </>
      

            );

}

const root = ReactDom.createRoot(document.querySelector('#root'))

root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );