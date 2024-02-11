import { Stack } from '@chakra-ui/react';
import React from 'react'
import { useRouteError } from 'react-router-dom'
import styled from 'styled-components';

const ErrorPage = () => {
    const error = useRouteError();

  return (
      <ErrorContainer>
          <h1>Oops!</h1>
          <p>Sorry , an unexpected error has occurred.</p>
          <p>
              <i>{error.statusText || error.message}</i>
          </p>
      </ErrorContainer>
  )
}

export default ErrorPage

const ErrorContainer = styled(Stack)`

`