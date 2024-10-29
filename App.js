import React from "react";
import ReactDOM from "react-dom";

const Heading = () => (
<h1>
    Hi From jsx heading
</h1>
)
const HeaderComponent = () => (
    <div id="container">
        <Heading />
     <h2>This is A header 2 from the component</h2>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<HeaderComponent />);
