import React from 'react';
import { mount } from 'enzyme';
import {create} from 'react-test-renderer';
import Footer from '../../components/Footer';

describe('Probando componente <Footer />', () => {

    const footer = mount(<Footer />);
    test('Render del componente Footer', () => {
        expect(footer.length).toEqual(1);
    });

    test('Render del titulo', () => {
        expect(footer.find(".Footer-title").text()).toEqual('Platzi Store')
    });

    test('Render mensaje reservado', () => {
        expect(footer.find('.Footer-copy').text()).toMatch('Izquierdos Reservados')
    });
});

describe('Footer snapshot', () => {

    test('Comprobar la UI del componente footer', () => {
        const footer = create(<Footer />);
        
        expect(footer.toJSON()).toMatchSnapshot();
    });
})