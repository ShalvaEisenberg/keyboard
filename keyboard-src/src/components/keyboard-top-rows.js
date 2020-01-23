import React, { Component } from 'react';


class Keyboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            zoomedIn: false,
        };
    }

    render() {
        return (<div>
            <div className="keyboard__row keyboard__row--h1">
                <div data-key="27" className="key--word">
                    <span>esc</span>
                </div>
                <div data-key="112" className="key--fn">
                    <span>F1</span>
                </div>
                <div data-key="113" className="key--fn">
                    <span>F2</span>
                </div>
                <div data-key="114" className="key--fn">
                    <span>F3</span>
                </div>
                <div data-key="115" className="key--fn">
                    <span>F4</span>
                </div>
                <div data-key="116" className="key--fn">
                    <span>F5</span>
                </div>
                <div data-key="117" className="key--fn">
                    <span>F6</span>
                </div>
                <div data-key="118" className="key--fn">
                    <span>F7</span>
                </div>
                <div data-key="119" className="key--fn">
                    <span>F8</span>
                </div>
                <div data-key="120" className="key--fn">
                    <span>F9</span>
                </div>
                <div data-key="121" className="key--fn">
                    <span>F10</span>
                </div>
                <div data-key="122" className="key--fn">
                    <span>F11</span>
                </div>
                <div data-key="123" className="key--fn">
                    <span>F12</span>
                </div>
                <div data-key="n/a" className="key--word">
                    <span>pwr</span>
                </div>
            </div>
            <div className="keyboard__row">
                <div className="key--double" data-key="192">
                    <div>~</div>
                    <div>`</div>
                </div>
                <div className="key--double" data-key="49">
                    <div>!</div>
                    <div>1</div>
                </div>
                <div className="key--double" data-key="50">
                    <div>@</div>
                    <div>2</div>
                </div>
                <div className="key--double" data-key="51">
                    <div>#</div>
                    <div>3</div>
                </div>
                <div className="key--double" data-key="52">
                    <div>$</div>
                    <div>4</div>
                </div>
                <div className="key--double" data-key="53">
                    <div>%</div>
                    <div>5</div>
                </div>
                <div className="key--double" data-key="54">
                    <div>^</div>
                    <div>6</div>
                </div>
                <div className="key--double" data-key="55">
                    <div>&</div>
                    <div>7</div>
                </div>
                <div className="key--double" data-key="56">
                    <div>*</div>
                    <div>8</div>
                </div>
                <div className="key--double" data-key="57">
                    <div>(</div>
                    <div>9</div>
                </div>
                <div className="key--double" data-key="48">
                    <div>)</div>
                    <div>0</div>
                </div>
                <div className="key--double" data-key="189">
                    <div>_</div>
                    <div>-</div>
                </div>
                <div className="key--double" data-key="187">
                    <div>+</div>
                    <div>=</div>
                </div>
                <div className="key--bottom-right key--word key--w4" data-key="8">
                    <span>delete</span>
                </div>
            </div>

        </div>)
    }
}

export default Keyboard;
