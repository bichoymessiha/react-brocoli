import React, { Children } from "react";
import { Injector } from "depints";

interface InjectorProviderProps {
    injector: Injector;
}

export default class InjectorProvider extends React.Component<InjectorProviderProps> {
    getChildContext() {
        return {
            injector: this.props.injector,
        };
    }

    render() {
        const { children } = this.props;

        return Children.only(children);
    }
}
