import React, { Component } from "react";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import NavBar from "./components/navbar/Navbar";
import Search from "./components/search/Search";
import ViewImages from "./components/view-images/ViewImages";
import fetchImages from "./api/pixabay";

const theme = createMuiTheme();

class App extends Component {
  state = {
    searchText: "Llamas",
    amount: 5,
    images: []
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  handleSubmit = async event => {
    //console.log("HandleSubmit ", event.target.name);

    const fetchedData = await fetchImages(
      this.state.searchText,
      this.state.amount
    );

    console.log("search for ", this.state.searchText.length);
    if (this.state.searchText.length) {
      const hits = fetchedData.data.hits;
      //console.log("hits ", hits);
      this.setState({ images: hits });
    }
  };

  render() {
    const { searchText, amount } = this.state;

    return (
      <MuiThemeProvider theme={theme}>
        <div>
          <NavBar />
          <Search
            defaultText={searchText}
            defaultHits={amount}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </div>
        <ViewImages images={this.state.images} />
      </MuiThemeProvider>
    );
  }
}

export default App;
