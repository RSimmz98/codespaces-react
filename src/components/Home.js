import React, { Component } from 'react'
import {Breadcrumb,Alert, BreadcrumbItem, Button, Container} from 'reactstrap'

export default class Home extends Component {

  render() {
        return (
            <>
            <Container className='text-center'>
                   <Breadcrumb >
    <BreadcrumbItem className='text-center'>
      <a href="/Home" className='text-center'>
        Home
      </a>
    </BreadcrumbItem>
    <BreadcrumbItem active>
      Library
    </BreadcrumbItem>
  </Breadcrumb >
            </Container>
      
        <h1>Hello</h1>
        <Button color="primary" disabled><Alert>
  <h4 className="alert-heading">
    Well done!
  </h4>
  <p>
    Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.
  </p>
  <hr />
  <p className="mb-0">
    Whenever you need to, be sure to use margin utilities to keep things nice and tidy.
  </p>
</Alert></Button>
<p className='text-center' t>holla</p>
            </>
        )
    }
}
