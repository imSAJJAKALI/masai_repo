import React from 'react';

const Post = () => {
  return (
    <div data-testid="post">
      <div>
        {/* add title in below h6 and body in P tag */}
        <h6></h6>
        <p></p>
      </div>
      {/* The default textContent of button should be  "Verify" and other textContent should be changed to "Verified" and vice-versa */}
      <button data-testid="verify_btn"></button>
    </div>
  );
};
