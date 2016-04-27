import sinon from 'sinon';
import { shallow } from 'enzyme';
import { assert } from 'chai';
import React from 'react';
import Checkbox from './checkbox';


describe('<Checkbox />', () => {
   
    it('should render a input', () => {
        const wrapper = shallow(<Checkbox />);
        assert.equal(wrapper.find('input').length, 1);
    });

    it('should call onChange when clicked', () => {
        const spy = sinon.spy();
        const wrapper = shallow(<Checkbox onChange={spy} />);

        wrapper.find('input').simulate('change');
        assert.equal(spy.calledOnce, true);
    });

    it('should call onChange with the correct parameter', () => {
        let spy = sinon.spy();
        
        let wrapper = shallow(<Checkbox onChange={spy} />);

        wrapper.find('input').simulate('change');
        assert.equal(spy.args[0][0], true);

        spy = sinon.spy();
        wrapper = shallow(<Checkbox checked={true} onChange={spy} />);
        
        wrapper.find('input').simulate('change');
        assert.equal(spy.args[0][0], false);

    });

    it('should render a default value if passed', () => {
        let wrapper = shallow(<Checkbox />);
        assert.equal(wrapper.find('input').prop('checked'), undefined);

        wrapper = shallow(<Checkbox checked={true} />);
        assert.equal(wrapper.find('input').prop('checked'), true);
    });

    it('should apply the same id to <label> and <input>', () => {
        const wrapper = shallow(<Checkbox name="Some text goes here" />);

        assert.equal(
            wrapper.find('label').prop('htmlFor'),
            wrapper.find('input').prop('id')
        );
    });
    
});
