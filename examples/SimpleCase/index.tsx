import * as React from "react";
import * as ReactDOM from "react-dom";

import { AppConnected } from "./App.component";
import { bootstrap } from 'depints';
import { AppModule } from './App.module';
import InjectorProvider from 'src/components/Provider';

const injector = bootstrap(AppModule);

ReactDOM.render(
    <InjectorProvider injector={injector}>
        <AppConnected />
    </InjectorProvider>
, document.getElementById("root") as HTMLElement);
