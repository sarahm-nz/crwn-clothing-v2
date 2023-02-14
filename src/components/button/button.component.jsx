/*
default

inverted

google sign in
*/

import './button.styles.scss';

export const BUTTON_TYPE_CLASSES = {
    google: 'google-sign-in',
    inverted: 'inverted'
}

export default function Button({ children, buttonType, isLoading, ...otherProps }) {
    return (
        <button disabled={isLoading} className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}{...otherProps}>{children}</button>
    )
}