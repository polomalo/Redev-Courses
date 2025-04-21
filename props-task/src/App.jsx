import './App.css'
import React from 'react'
import RegistrationForm from './components/RegistrationForm.jsx'
import { Box, Container, CssBaseline, Grid, Stack } from '@mui/material'
import Header from './components/Header.jsx'
import Navigation from './components/Navigation.jsx'
import Content from './components/Content.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <>
      <div className="app-container">
        <Header />
        <Grid container spacing={2}>
          <Grid size={4} border={2}>
            <Navigation />
          </Grid>
          <Grid size={8}>
            <Content />
          </Grid>
        </Grid>
        <Footer />
      </div>
    </>
  )
}

export default App
