import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import Router from "./Router";
import store from "./modules";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement,
);
root.render(
    <Provider store={store}>
        <React.StrictMode>
            <Router />
        </React.StrictMode>
    </Provider>,
);
