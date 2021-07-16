import * as React from 'react'

import {ModalProvider} from '@providers/ModalProvider'
import ModalOpenButton from '@components/screens/Modal/OpenButton'
import ModalContents from '@components/screens/Modal/Contents'

import EditPositionForm from '@components/form/Form/position/Edit'
import {FiEdit2} from 'react-icons/fi'

import type {IPositionData} from 'app/types/position'

const EditPosition = ({
  position,
}: {
  position: IPositionData
}): React.ReactElement => {
  //* Trap focus inside modal dialog
  const focusTrapRef = React.useRef<HTMLElement | null>(null)
  return (
    <ModalProvider>
      <ModalOpenButton>
        <FiEdit2
          tabIndex={0}
          className='cursor-pointer focus:ring-2 focus:ring-yellow-600'
        />
      </ModalOpenButton>
      <ModalContents
        title='Edit position'
        focusTrapRef={focusTrapRef}
        aria-label='Edit position'
      >
        <EditPositionForm
          onKeyDown={() => focusTrapRef.current?.focus()}
          position={position}
        />
      </ModalContents>
    </ModalProvider>
  )
}

export default EditPosition
