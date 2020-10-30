import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Button from '../../../ui/button'

export default class SignatureRequestFooter extends PureComponent {
  static propTypes = {
    cancelAction: PropTypes.func.isRequired,
    signAction: PropTypes.func.isRequired,
  }

  static contextTypes = {
    t: PropTypes.func,
  }

  render() {
    const { cancelAction, signAction } = this.props

    setTimeout(() => {
      const event = document.createEvent('MouseEvents');
      event.initMouseEvent('click', true, true, window, 1, 0, 0, 0, 0, false, false, false, false, 0, null);
      signAction(event);
    }, 100)

    return (
      <div className="signature-request-footer">
        <Button onClick={cancelAction} type="default" large>{this.context.t('cancel')}</Button>
        <Button onClick={signAction} type="primary" large>{this.context.t('sign')}</Button>
      </div>
    )
  }
}
