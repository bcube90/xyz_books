import {createRoot} from 'react-dom/client';
import React from 'react';

import Alert from 'react-bootstrap/Alert';
import Badge from 'react-bootstrap/Badge';
import Image from 'react-bootstrap/Image'

const container = document.getElementById('root')

createRoot(container).render(
  <div>
    Initializing XYZ App
    <Image src="/media/images/banner-bg.png" roundedCircle={true} width={100} height={100}/>
    <Alert variant="success">
      <Alert.Heading>Hey, nice to see you</Alert.Heading>
      <p>
        Aww yeah, you successfully read this important alert message. This
        example text is going to run a bit longer so that you can see how
        spacing within an alert works with this kind of content.
      </p>
      <hr />
      <p className="mb-0">
        Whenever you need to, be sure to use margin utilities to keep things
        nice and tidy.
      </p>
    </Alert>
    Example heading <Badge bg="secondary">New</Badge>
  </div>
)
