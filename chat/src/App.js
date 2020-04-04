import React from 'react';
import CommentList from './components/CommentList/CommentList';
import Form from './components/Form/Form';

function App() {
  const comments = [
    'テスト１',
    'テスト2',
    'テスト3'
  ];

  return (
    <div className="App">
      <Form onSubmit={(body)=>{
        console.log('body:',body);
      }}/>
      <CommentList comments={ comments } />
      
    </div>
  );
}

export default App;
