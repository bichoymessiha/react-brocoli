import * as React from "react";
import { Inject, Newable } from "depints";
import { Logger } from "examples/SimpleCase/Logger";

// type StringLiteralDiff<T extends string, U extends string> = ({ [P in T]: P } & { [P in U]: never } & { [x: string]: never })[T];
// type Omit<T, K extends keyof T> = Pick<T, StringLiteralDiff<keyof T, K>>;

interface InjectorsProps {
    [propKey: string]: Newable;
}

export const connectInjector = (injectorsProps: InjectorsProps) => {
    return <P, S>(ComponentToWrap: Newable<React.Component<P, S>>): Newable<React.Component<P, S>> => {
        // const service = injector.resolve(Newable);

        return class ResolvedComponent extends React.Component<P, S> {};
    };
};
