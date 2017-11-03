import React from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';

const Container = ({ loggingIn, style, children }) => (
  <div style={style}>
    <Link href="/">
      <a>Home</a>
    </Link>
    {children}
    <style jsx>{`
      :global(body) {
        background: white;
        margin: 0;
        padding: 0;
        font-size: 16px;
      }
      :global(*) {
        font-family: 'Maison Neue';
        font-weight: 300;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
      :global(h1) {
        font-family: 'Domaine Display';
        font-weight: 700;
      }
      div {
        width: 600px;
        max-width: 100%;
        min-height: 100vh;
        padding: 0 20px 20px 20px;
        background-color: #f2f2f2;
        margin: 0 auto;
      }
    `}</style>
  </div>
);

Container.propTypes = {};

const mapStateToProps = state => ({
  isLoggedIn: true,
});

const mapDispatchToProps = (dispatch, props) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Container);
