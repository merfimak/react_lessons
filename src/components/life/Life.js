import React, { Component } from 'react';


class Life extends Component {
    constructor(props){
        super(props)
        console.log('constructor: good place to create state');
    }
    componentDidMount() {
        console.log('componentDidMount: API calls, subscriptions || вызывается после рендеринга компонента. Здесь можно выполнять запросы к удаленным ресурсам');
    }
    
    shouldComponentUpdate() {
        console.log(
            'shouldComponentUpdate(nextProps, nextState): decide to render or not to render'
        );
        return true;
    }
    
    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate(prevProps, prevState): some updates based on new props || вызывается сразу после обновления компонента (если shouldComponentUpdate возвращает true)');
    }
    
    componentWillUnmount() {
        console.log('componentWillUnmount(): cleanup before DOM related to component will be removed || вызывается перед удалением компонента из DOM');
    }
    render() {
        console.log('return React element to build DOM');
        return  <div className="number">это из компоненты Life</div>
    }
};

export default Life;