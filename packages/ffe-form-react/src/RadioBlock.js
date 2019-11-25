import React, { Component } from 'react';
import { bool, node, oneOfType, string } from 'prop-types';
import classNames from 'classnames';
import uuid from 'uuid';

class RadioBlock extends Component {
    id = `radio-block-${uuid.v4()}`;

    render() {
        const {
            checked,
            children,
            className,
            /* Support for the dark theme has not been added for this component
             * but since we're passing props onwards to DOM nodes we need to make
             * sure we don't pass this as part of "inputProps" since it's not being
             * used but can still be passed down from a parent `RadioButtonInputGroup`.
             */
            dark, //eslint-disable-line
            label,
            name,
            selectedValue,
            showChildren,
            value,
            ...inputProps
        } = this.props;

        const isSelected = checked || selectedValue === value;

        return (
            <div className={classNames('ffe-radio-block', className)}>
                <input
                    className={classNames('ffe-radio-input', {
                        'ffe-radio-input--dark': dark,
                    })}
                    checked={isSelected}
                    id={this.id}
                    type="radio"
                    name={name}
                    value={value}
                    {...inputProps}
                />
                <div
                    className={classNames('ffe-radio-block__content', {
                        'ffe-radio-block__content--dark': dark,
                    })}
                >
                    <label
                        className={classNames(
                            'ffe-radio-block__content__header',
                            {
                                'ffe-radio-block__content__header--dark': dark,
                            },
                        )}
                        htmlFor={this.id}
                    >
                        {label}
                    </label>
                    {(isSelected || showChildren) && (
                        <div
                            className={classNames(
                                'ffe-radio-block__content__wrapper',
                                {
                                    'ffe-radio-block__content__wrapper--empty': !children,
                                    'ffe-radio-block__content__wrapper--dark': dark,
                                },
                            )}
                        >
                            {children}
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

RadioBlock.propTypes = {
    /** Whether or not the radio block is selected */
    checked: bool,
    /** The content rendered when choice is selected */
    children: node,
    /** Additional class names applied to the outer div */
    className: string,
    /** Dark variant */
    dark: bool,
    /** The always visible label of the radio block */
    label: oneOfType([node, string]).isRequired,
    /** The name of the radio button set */
    name: string.isRequired,
    /** The selected value of the radio button set */
    selectedValue: string,
    /** Whether or not children are always visible */
    showChildren: bool,
    /** The value of the radio block */
    value: string.isRequired,
};

RadioBlock.defaultProps = {
    dark: false,
};

export default RadioBlock;
