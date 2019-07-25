import React, { Component } from "react";
import Songdata from "./DataStore.json";
import Buttons from "../components/Buttons";

export class Search extends Component {
  constructor(props) {
    super(props);
    this.list = [];
    this.mist = [];
    this.state = {
      Songdata: Songdata,
      keylist: this.list,
      Search: "",
      searchString: this.mist
    }
    this.handlesearchchange = this.handlesearchchange.bind(this);
  }

  handlesearchchange = (e) => {


    this.setState({
      Search: e.target.value
    })
    console.log({ Search: e.target.value });

  }



  handlesearchresult = () => {

    console.log(this.state.Search);
    const valueList = this.state.Songdata.filter(i => i.SONGNAME === this.state.Search);
    console.log(valueList)
    this.setState({
      Search: "",
      searchString: valueList
    })

    console.log(this.state.searchString)



  }

  AddEvent = value => {


    const remdub = this.state.keylist.concat(value);
    console.log("remdub" + remdub);
    const unique = [...new Set(remdub)];
    this.list.push(unique);

    this.setState({
      keylist: unique
    });

    console.log(this.state.keylist);
  };

  delete = value => {
    const valueList = this.state.keylist.filter(i => i !== value);
    this.setState({ keylist: valueList });

    console.log(valueList);
    console.log(this.state.keylist);
  };

  render() {
    return (

      <div className="Jsonresult">
        <div className="wrap">
          <input
            type="text"
            placeholder="Search.."
            name="Search"
            value={this.state.Search}
            onChange={this.handlesearchchange}
          >
          </input>

          {/* <button onClick={this.handlesearchresult}><i className="fa fa-search"></i></button> */}
          <Buttons
            action={e => {
              this.handlesearchresult();
            }}
            title={"Search"}
          />
        </div>
        <div className="movebutton">


          <h2>POPULAR SONGS</h2>


          {Songdata.map(Songdata => (
            <div className="songsborder" key={Songdata.KEY}>
              <br />
              <strong className="SongsAlignLeft">SongName</strong> :{" "}
              {Songdata.SONGNAME}
              <br />
              <strong className="SongsAlignLeft"> Artist</strong> :{" "}
              {Songdata.ARTIST}
              <br />
              <strong className="SongsAlignLeft">Location</strong>:{" "}
              {Songdata.LOCATION}
              <br />
              <strong className="SongsAlignLeft">Album</strong> :{" "}
              {Songdata.ALBUM}
              <br />
              <strong className="SongsAlignLeft">Duration</strong>:{" "}
              {Songdata.DURATION}
              <br />
              <strong className="SongsAlignLeft">Tags</strong> : {Songdata.TAGS}
              <pre className="SongsAlignLeft">
                <Buttons
                  action={e => {
                    this.AddEvent(Songdata.SONGNAME);
                  }}
                  title={"+"}
                />
              </pre>
              <br />
            </div>
          ))}
        </div>

        <h2 className="displayresult" >PLAYLIST SONGS</h2>

        {this.state.keylist.map((keylist, index) => (
          <pre className="displayresult" key={index}>
            <p>
              SongName: {keylist}
              <Buttons
                action={e => {
                  this.delete(keylist);
                }}
                title={"-"}
              />
            </p>
          </pre>
        ))}


        {this.state.searchString.map(searchString => (
          <div className="searchString" key={searchString.KEY}>
            <br />
            <strong className="SongsAlignRight">SongName</strong> :{" "}
            {searchString.SONGNAME}
            <br />
            <strong className="SongsAlignRight"> Artist</strong> :{" "}
            {searchString.ARTIST}
            <br />
            <strong className="SongsAlignRight">Location</strong>:{" "}
            {searchString.LOCATION}
            <br />
            <strong className="SongsAlignRight">Album</strong> :{" "}
            {searchString.ALBUM}
            <br />
            <strong className="SongsAlignRight">Duration</strong>:{" "}
            {searchString.DURATION}
            <br />
            <strong className="SongsAlignRight">Tags</strong> : {searchString.TAGS}
            <pre className="SongsAlignRight">

            </pre>
            <br />
          </div>
        ))}

      </div>

    );
  }
}

export default Search;
