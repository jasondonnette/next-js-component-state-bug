import React from 'react';
import Container from 'components/Container/Container';
import Button from 'components/Buttons/Button';
import App from 'components/App/App';

class Setup extends React.Component {
  static async getInitialProps({
    req, query, store, isServer,
  }) {
    console.log('setup.js getInitialProps');
  }

  state = {
    one: null,
    two: null,
    three: null,
  };

  render() {
    if (this.state.one === null) {
      return (
        <Container>
          <h1>One</h1>
          <Button
            onClick={() => {
              this.setState({ one: 'YES' });
            }}
          >
            Yes
          </Button>
          <Button
            onClick={() => {
              this.setState({ one: 'NO' });
            }}
          >
            No
          </Button>
        </Container>
      );
    }
    if (this.state.two === null) {
      return (
        <Container>
          <h1>Two?</h1>
          <Button
            onClick={() => {
              this.setState({ two: 'RECENTLY' });
            }}
          >
            Recently
          </Button>
          <Button
            onClick={() => {
              this.setState({ two: 'LONG_AGO' });
            }}
          >
            A long time ago
          </Button>
        </Container>
      );
    }
    if (this.state.three === null) {
      return (
        <Container>
          <h1>Three?</h1>
          <Button
            onClick={() => {
              this.setState({ three: 'YES' });
            }}
          >
            Yes
          </Button>
          <Button
            onClick={() => {
              this.setState({ three: 'NO' });
            }}
          >
            Not really
          </Button>
        </Container>
      );
    }

    return (
      <Container>
        <h1>Now change something in setup.js to hot-reload</h1>
        <p>it will revert back to it's default state</p>
      </Container>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = (dispatch, props) => ({});

export default App(Setup, mapStateToProps, mapDispatchToProps);
