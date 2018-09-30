/*
 * Copyright (c) 2018 Bichoy Messiha
 * This file is part of "React Depints project" which is released under MIT Licence.
 * See file LICENCE for full license details.
 * 
 * Author(s):
 *   - Bichoy Messiha <bichoy.messiha@indigen.com>
 */
import { bootstrap } from "depints";
import * as React from "react";
import * as ReactDOM from "react-dom";

import { InjectorProvider } from "../../lib/components/InjectorProvider";
import { AppConnected } from "./App.component";
import { AppModule } from "./App.module";

const injector = bootstrap(AppModule);

ReactDOM.render(
    <InjectorProvider injector={injector}>
        <AppConnected />
    </InjectorProvider>,
    document.getElementById("root") as HTMLElement
);
