/*
 * Copyright (c) 2018 Bichoy Messiha
 * This file is part of "React Depints project" which is released under MIT Licence.
 * See file LICENCE for full license details.
 * 
 * Author(s):
 *   - Bichoy Messiha <bichoy.messiha@indigen.com>
 */
import * as React from "react";

import { connectInjector } from "../../lib/connect/connectInjector";
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
