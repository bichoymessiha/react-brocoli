# React Depints

Official React bindings for [Depints](https://github.com/clerico/depints).

Provides dependency injection for React components using React pattern Provider/Consumer. You can know more about it [here](https://reactjs.org/docs/context.html).

## Installation

Requires Depints and **React v16.3 or later**.

```shell
    npm install --save react-depints
```

or

```shell
    yarn add react-depints
```

## Usage

Add provider as a parent to your root app. Passing as props the injector.

```jsx
    import { bootstrap } from "depints";
    import { InjectorProvider } from "react-depints";

    const injector = bootstrap(AppModule);
    <InjectorProvider injector={injector}>
        <AppConnected />
    </InjectorProvider>
```

Connect the component you want to inject services in.

```jsx
    class App extends React.Component<AppProps> {
        public render() {
            return <p>{this.props.logger.log("App", "IT WORKS")}</p>;
            return null;
        }
    }

    export const AppConnected = connectInjector({
        logger: Logger,
    })(App);

```

Please check [examples](./src/examples) for more details.
