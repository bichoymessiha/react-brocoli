/*
 * Copyright (c) 2018 Bichoy Messiha
 * This file is part of "React Depints project" which is released under MIT Licence.
 * See file LICENCE for full license details.
 *
 * Author(s):
 *   - Bichoy Messiha <bichoy.messiha@indigen.com>
 */
import { Newable } from "depints";
import hoistStatics from "hoist-non-react-statics";
import * as React from "react";

import { InjectionContext } from "../components/InjectorProvider";
import { InjectionContextProps } from "../types/InjectionContextProps";

interface InjectorsProps {
    [propKey: string]: Newable | string;
}
export const connectInjector = <P, Dummy = {}>(injectorsProps: InjectorsProps = {}) => {
    return (ComponentToWrap: React.ComponentType<any>): React.ComponentType<P> => {
        class ResolvedComponent extends React.Component<P> {
            public render() {
                return (
                    <InjectionContext.Consumer>
                        {(context: InjectionContextProps) => {
                            const resolveService = (service: Newable | string) => {
                                if (context.injector === undefined) {
                                    return null;
                                }
                                if (typeof service === "string") {
                                    return context.injector.resolve(undefined, service);
                                }
                                return context.injector.resolve(service);
                            };

                            const props = Object.keys(injectorsProps).reduce(
                                (prev, curr) => ({
                                    ...prev,
                                    [curr]: resolveService(injectorsProps[curr]),
                                }),
                                {}
                            );

                            return <ComponentToWrap {...props} injector={context.injector} {...this.props} />;
                        }}
                    </InjectionContext.Consumer>
                );
            }
        }

        return hoistStatics(ResolvedComponent, ComponentToWrap);
    };
};
