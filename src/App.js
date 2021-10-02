import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Notes from "./pages/Notes";
import Create from "./pages/Create";
import { createTheme ,ThemeProvider } from "@material-ui/core/styles";
import {purple } from "@mui/material/colors";


const theme = createTheme({
  palette: {
    secondary: purple
  },
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: '400',
    fontWeightMedium: '500',
    fontWeightRegular: '600',
    fontWeightBold: '700'
  }
});

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Notes />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
