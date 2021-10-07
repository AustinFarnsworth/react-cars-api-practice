import React from "react";
import unsplash from "./api/unsplash"
import SearchBar from "./SearBar";


class App extends React.Component {
  state = { images: [] };


  onSearchSubmit = async (term) => {
    // Get request to the unsplash API
    const res = await unsplash.get("/search/photos", {
      params: { query: term },
     
    })
    this.setState({ images: res.data.results })
  }

  render() {
  return (
    <div className="ui container" style={{ marginTop: '10px'}}>
      <SearchBar onSubmit={this.onSearchSubmit}/>
      Found: {this.state.images.length}
    </div>
  )
}
}

export default App; 