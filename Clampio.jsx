import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Clampio extends PureComponent {
  static propTypes = {
    text: PropTypes.string.isRequired,
    lines: PropTypes.number,
    ellipsis: PropTypes.string,
    className: PropTypes.string,
  };

  static defaultProps = {
    lines: 2,
    ellipsis: '…',
  };

  constructor(props) {
    super(props);

    this.element = null;
    this.original = props.text;
    this.lineHeight = 0;
    this.start = 0;
    this.middle = 0;
    this.end = 0;
  }

  state = {
    noClamp: false,
    text: '.',
  };

  componentDidMount() {
    if (this.props.text) {
      this.lineHeight = this.element.clientHeight + 1;
      this.clampLines();
    }
  }

  getEllipsis = () => (
    !this.state.noClamp ? this.props.ellipsis : ''
  );

  clampLines = () => {
    this.setState({ text: '' });

    const maxHeight = (this.lineHeight * this.props.lines) + 1;
    this.start = 0;
    this.middle = 0;
    this.end = this.original.length;

    while (this.start <= this.end) {
      this.middle = Math.floor((this.start + this.end) / 2);
      this.element.innerText = this.original.slice(0, this.middle);
      if (this.middle === this.original.length) {
        this.setState({
          text: this.original,
          noClamp: true,
        });

        return;
      }

      this.moveMarkers(maxHeight);
    }

    this.element.innerText = this.original.slice(0, this.middle - 5) + this.getEllipsis();
    this.setState({ text: this.original.slice(0, this.middle - 5) + this.getEllipsis() });
  };

  moveMarkers = (maxHeight) => {
    if (this.element.clientHeight <= maxHeight) {
      this.start = this.middle + 1;
    } else {
      this.end = this.middle - 1;
    }
  };

  render() {
    const { text, className, ...other } = this.props;

    if (!text) {
      return null;
    }

    return (
      <div
        {...other}
        className={className}
        ref={(node) => { this.element = node; }}
      >
        {this.state.text}
      </div>
    );
  }
}

export default Clampio;
