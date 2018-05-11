'use strict'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import store from './store'
import MainContainer from './Components/MainContainer'

const theme = createMuiTheme();

render(
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <MainContainer />
    </Provider>
  </MuiThemeProvider>
  ,
  document.getElementById('main')
)
