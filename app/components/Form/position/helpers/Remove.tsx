import * as React from 'react'

import useSessionCookie from '@hooks/cookie/useSessionCookie'
import useRemovePosition from '@hooks/position/useRemovePosition'
import useModalContext from '@hooks/modal/useModalContext'

import CancelButton from '@components/form/Button/Cancel'
import {ConfirmButton} from '@components/form/Button/Confirm'

export const RemovePositionForm = ({
  uid,
  onKeyDown,
}: {
  uid: number
  onKeyDown: () => void
}): JSX.Element => {
  const token = useSessionCookie()
  const {setIsOpen} = useModalContext()
  const handleConfirm = useRemovePosition(token, uid, setIsOpen)
  return (
    <React.Fragment>
      <div className='h-16 w-full'>
        <span role='article' className='h-1/2'>
          Are you sure you want delete this position?
        </span>
      </div>
      <div className='w-full h-1/3 flex'>
        <ConfirmButton bgColor='red' onClickAction={handleConfirm}>
          Confirm
        </ConfirmButton>
        <CancelButton
          onClickHandler={() => setIsOpen(false)}
          onKeyDownHandler={onKeyDown}
        />
      </div>
    </React.Fragment>
  )
}
