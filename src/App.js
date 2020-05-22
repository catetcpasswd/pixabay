import React, { useState } from "react";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import NavBar from "./components/navbar/Navbar";
import Search from "./components/search/Search";
import ViewImages from "./components/view-images/ViewImages";
import fetchImages from "./api/pixabay";

const theme = createMuiTheme();

const App = () => {
  const [state, setState] = useState({
    searchText: "Llamas",
    amount: 5,
    images: []
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = async event => {
    const fetchedData = await fetchImages(state.searchText, state.amount);

    if (state.searchText.length) {
      const hits = fetchedData.data.hits;
      setState({ ...state, images: hits });
    }
  };

  const { searchText, amount } = state;

  return (
    <MuiThemeProvider theme={theme}>
      <div>
        <NavBar />
        <Search
          defaultText={searchText}
          defaultHits={amount}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </div>
      <ViewImages images={state.images} />
    </MuiThemeProvider>
  );
};

export default App;
