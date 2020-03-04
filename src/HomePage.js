import React from 'react';
import { Button } from 'react-bootstrap';



function HomePage() {
  return (
    <div className="Homepage">
      <h1>Make the first move!</h1>

      <>
        <style type="text/css">
          {`
    .btn-flat {
      background-color: purple;
      color: white;
    }

    .btn-xxl {
      padding: 1rem 1.5rem;
      font-size: 1.5rem;
    }
    `}
        </style>

        <Button href='#my-profile' variant="flat" size="xxl" >
          Create your Profile
  </Button>
      </>


    </div>
  );
}





export default HomePage;



