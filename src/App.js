import React, { Component } from 'react';
import { FormField } from './components/FormField';
import { TextField } from './components/TextField';
import './App.css';

class App extends Component {
  state = {
  }
  render() {
    return (
      <main>
        <h1>Student Loans Calculator</h1>
        <FormField>
          <TextField id="total" type="number" label="Total" pattern="-?[0-9]*(\.[0-9]+)?">Total</TextField>
          <TextField id="annual-rate" type="number" label="Annual Rate" pattern="-?[0-9]*(\.[0-9]+)?">Total</TextField>
          <TextField id="annual-rate" type="number" label="Annual Rate" pattern="-?[0-9]*(\.[0-9]+)?">Total</TextField>
          <TextField id="annual-rate" type="number" label="Annual Rate" pattern="-?[0-9]*(\.[0-9]+)?">Total</TextField>
        </FormField>
      </main>
    );
  }
}

export default App;
