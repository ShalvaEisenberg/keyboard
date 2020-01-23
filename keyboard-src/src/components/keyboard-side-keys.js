import React, { Component } from 'react';

class KeyboardSideKeys extends Component {
    render() {
        return (<div className="keyboard__row keyboard__row--h3">
            <div className="key--bottom-left key--word">
                <span>fn</span>
            </div>
            <div className="key--bottom-left key--word key--w1" data-key="17">
                <span>control</span>
            </div>
            <div className="key--bottom-left key--word key--w1" data-key="18">
                <span>option</span>
            </div>
            <div className="key--bottom-right key--word key--w3" data-key="91">
                <span>command</span>
            </div>
            <div className="key--double key--right key--space" data-key="32" data-char=" ">
                &nbsp;
</div>
            <div className="key--bottom-left key--word key--w3" data-key="93-R">
                <span>command</span>
            </div>
            <div className="key--bottom-left key--word key--w1" data-key="18-R">
                <span>option</span>
            </div>
            <div data-key="37" className="key--arrow">
                <span>&#9664;</span>
            </div>
            <div className="key--double key--arrow--tall" data-key="38">
                <div>&#9650;</div>
                <div>&#9660;</div>
            </div>
            <div data-key="39" className="key--arrow">
                <span>&#9654;</span>
            </div>
        </div>);
    }
}

export default KeyboardSideKeys;