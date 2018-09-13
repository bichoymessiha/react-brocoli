/*
 * Copyright (c) 2018 - Indigen Solutions
 *
 * Authors:
 *   - Jérôme CLERICO <jerome.clerico@indigen.com>
 *
 * NOTICE: All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Indigen Solutions.
 */
import * as React from "react";
import { connectInjector } from "src/connect/connectInjector";
import { Logger } from "./Logger";

interface AppProps {
    logger?: Logger;
    test?: string;
}

class App extends React.Component<AppProps> {
    public render() {
        if (this.props.logger) return <p>{this.props.logger.log("App", "IT WORKS")}</p>;
        return null;
    }
}

export const AppConnected = connectInjector({
    logger: Logger,
})(App);
