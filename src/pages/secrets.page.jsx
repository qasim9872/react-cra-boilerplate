import tw from 'twin.macro'
import React from 'react'

import { AppTemplate } from '../components/templates/app.template'
import { Container } from '../components/atoms/utility/container.component'
import { SecretsContextProvider } from '../services/secrets/secrets.context'

export const Secrets = () => {
  return (
    <SecretsContextProvider>
      <AppTemplate>
        <Container>This is the secrets page</Container>
      </AppTemplate>
    </SecretsContextProvider>
  )
}