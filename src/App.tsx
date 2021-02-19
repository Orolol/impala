import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ListBooks from './Components/ListBooks'
import DetailBook from './Components/DetailBook'

class App extends React.Component<{}, {}> {
    public render() {
        return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route exact path="/" component={ListBooks} />
                    <Route exact path="/detail/:id" component={DetailBook} />
                </Switch>
            </div>
        </BrowserRouter>
        );
    }
}

export default App;