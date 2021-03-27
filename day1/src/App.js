import React, { createElement, Fragment } from "react";
import Counter from "./components/Coutner/Counter";
import "./index.css";

export const H2old = (props) =>
  createElement("h1", { className: "test-1", style: props.style }, [
    "Sample Heading",
    createElement("span", {}, "13123"),
  ]);

// properties
const H2 = (props) => {
  return <h2 className="">{props.title}</h2>;
};

const H1 = ({ children, style }) =>
  children ? (
    <h1 className="" style={style}>
      {children}
    </h1>
  ) : (
    <span>No Heading passed</span>
  );

H1.defaultProps = {
  style: {
    color: "yellow",
  },
};

const data = [
  { id: 123, name: "Test 1" },
  { id: 124, name: "Test 2" },
  { id: 125, name: "Test 3" },
  { id: 126, name: "Test 4" },
  { id: 127, name: "Test 5" },
  { id: 128, name: "Test 6" },
  { id: 129, name: "Test 7" },
];

class App extends React.Component {
  state = {
    title2: "init",
    count: 0,
    searchText: "",
    data: 0,
  };

  render() {
    // JSX
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Counter
          callback={(count) => {
            this.setState({ data: count });
          }}
        />
        <Counter />
        <Counter />
        <H2 title={this.props.title} />
        <H2 title={`${this.state.searchText} ${this.state.count}`} />
        <button
          onClick={() => {
            this.setState((curState) => {
              return {
                title2: "new title",
                count: curState.count + 1,
              };
            });
          }}
        >
          Change title
        </button>
        <input
          value={this.state.searchText}
          onChange={(event) => {
            this.setState({
              searchText: event.target.value,
            });
          }}
        />
        <table className="table">
          <thead>
            <tr>
              <th>id</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => {
              console.log(item.name.includes(this.state.searchText))
              if (item.name.includes(this.state.searchText))
                return (
                  <tr key={item.id} style={{ background: '#adadad' }}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                  </tr>
                );
              else {
                return (null);
              }
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
