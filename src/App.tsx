import { RouterProvider } from 'react-router'
import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'
import './App.css'
import { router } from './router'

function App() {
  return (
    <MantineProvider>
      <RouterProvider router={router} />
    </MantineProvider>
  )
}

export default App
