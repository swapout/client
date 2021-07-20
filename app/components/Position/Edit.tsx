import * as React from 'react'

import {ModalProvider} from '@providers/ModalProvider'
import {ModalOpenButton} from '@components/lib/Modal/OpenButton'
import ModalContents from '@components/lib/Modal/Contents'

import EditPositionForm from '@components/Form/position/helpers/Edit'
import {FiEdit2} from 'react-icons/fi'

import type {IPositionData} from 'app/types/position'

const EditPosition = ({
  position,
}: {
  position: IPositionData
}): React.ReactElement => (
  <ModalProvider>
    <ModalOpenButton>
      <FiEdit2
        tabIndex={0}
        className='cursor-pointer focus:ring-2 focus:ring-yellow-600'
      />
    </ModalOpenButton>
    <ModalContents title='Edit position' aria-label='Edit position'>
      <EditPositionForm position={position} />
    </ModalContents>
  </ModalProvider>
)

export default EditPosition
