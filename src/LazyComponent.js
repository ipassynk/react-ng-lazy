import React, {Component} from 'react';

class LazyComponent extends Component {
    constructor() {
        super();
        this.state = {show: false};
        this.onMouseOver = this.onMouseOver.bind(this);
    }

    onMouseOver() {
        this.setState({show: true});
    }

    render() {
        let lazy = <div onMouseOver={this.onMouseOver}>Hover over me to activate</div>;

        return (
            <div>
                {this.state.show ? this.props.children : lazy}
            </div>
        );
    }
}

export default LazyComponent;