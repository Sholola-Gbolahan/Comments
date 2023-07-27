import React from 'react';

const CommentDetails = (props) => {
    console.log(props);
  return (
    <div>
         <div className='comment'>
          <a href='/' className='avatar'>
            <img alt='Avatar' src={props.avatar}/>
          </a>
          <div className='content'>
            <a href='/' className='author'>{props.author}</a>
            <div className='metadata'>
              <span>{props.timeAgo}</span>
            </div>
            <div className='text'>{props.feedback}</div>   
          </div>
          
        </div>

    </div>
  )
}

export default CommentDetails