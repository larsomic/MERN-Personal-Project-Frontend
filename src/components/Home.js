import * as React from 'react';
import Header from "./Header.js"
import UnderConstruction from "./UnderConstruction.js"

const Home = () => {
    return (
        <div>
          <Header/>
          <UnderConstruction showHeader={true}/>
        </div>
  );
};
export default Home;