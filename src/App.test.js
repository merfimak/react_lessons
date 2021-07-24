import React from 'react';
import App from './App';
import ReactDOM from 'react-dom'
import { unmountComponentAtNode } from "react-dom";

// прверяем отрендерится ли наше приложение
test('renders without crashing', () => {
	let container = null;
 container = document.createElement("div");//cоздаем div в катором будем рендерить нужный нам кусок в данном слечае <App />
 ReactDOM.render(<App />, container);// рендерим, если отрендирилось то все ок
 unmountComponentAtNode(container);// удаляем div шоб не мешал другим нашим тестам
});