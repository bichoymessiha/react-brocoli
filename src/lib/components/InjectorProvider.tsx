/*
 * Copyright (c) 2018 Bichoy Messiha
 * This file is part of "React Depints project" which is released under MIT Licence.
 * See file LICENCE for full license details.
 *
 * Author(s):
 *   - Bichoy Messiha <bichoy.messiha@indigen.com>
 */

import { Injector } from "depints";
import * as React from "react";

interface InjectorProviderProps {
    injector: Injector;
}
export const InjectionContext = React.createContext({});

export class InjectorProvider extends React.Component<InjectorProviderProps> {
    public render() {
        const { children, injector } = this.props;

        return <InjectionContext.Provider value={{ injector }}>{children}</InjectionContext.Provider>;
    }
}
