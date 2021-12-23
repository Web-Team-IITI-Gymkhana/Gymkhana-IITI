import React from 'react'
import { Button } from '@material-ui/core/Button"';

export default function Authenticate() {
  return (
    <div>
      <form action="http://localhost:5000/google">
        <Button type='submit' variant='contained'>Login with Google</Button>
      </form>
    </div>
  )
}
