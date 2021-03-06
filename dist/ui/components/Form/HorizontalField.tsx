import * as React from 'react';
import classnames from 'classnames';
import './form.less';

export interface Props {
  children: React.ReactNode;
  label?: string;
  error?: boolean;
  disabled?: boolean;
  className?: string;
}

export default class HorizontalField extends React.Component<Props> {
  render(): React.ReactNode {
    const className = classnames('field horizontal', {
      [this.props.className]: !!this.props.className,
      error: this.props.error,
      disabled: this.props.disabled,
    });

    return (
      <div className={className}>
        {this.props.label && (<label>{this.props.label}</label>)}
        {this.props.children}
      </div>
    );
  }
}
