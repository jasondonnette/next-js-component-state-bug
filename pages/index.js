import React from 'react';
import Link from 'next/link';
import Container from 'components/Container/Container';
import Button from 'components/Buttons/Button';
import App from 'components/App/App';

class Index extends React.Component {
  static async getInitialProps({
    req, query, store, isServer,
  }) {
    console.log('index.js getInitialProps');
  }

  render() {
    return (
      <Container>
        <h1>Start to get started.</h1>
        <Link href="/setup">
          <Button>Start</Button>
        </Link>
      </Container>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = (dispatch, props) => ({});

export default App(Index, mapStateToProps, mapDispatchToProps);
