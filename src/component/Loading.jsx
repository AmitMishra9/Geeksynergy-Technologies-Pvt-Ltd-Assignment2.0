import React from 'react';
import './Loading.css'; // You'll need to create this CSS file

const Loading = () => {
  return (
    <div className="loading-spinner">
      <img src="https://i.pinimg.com/originals/71/3a/32/713a3272124cc57ba9e9fb7f59e9ab3b.gif" alt="Loading..." />
    </div>
  );
};

export default Loading;