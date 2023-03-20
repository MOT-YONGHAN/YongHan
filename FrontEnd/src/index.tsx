import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Router";
import store from "./modules";
import { Provider } from "react-redux";

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
