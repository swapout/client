import {PActions} from 'app/types/constants'
import type {PositionResponseType} from 'app/types/response'
import {useFetchContext} from '@hooks/fetch/useFetchContext'
import useModalContext from '@hooks/modal/useModalContext'
import {usePositionContext} from '@hooks/position/usePositionContext'

export default function useAddApplication(
  id: number
): () => Promise<PositionResponseType> {
  const {dispatch} = usePositionContext()
  const fetchContext = useFetchContext()
  const {setIsOpen} = useModalContext()
  const handleConfirm = async (): Promise<PositionResponseType> => {
    try {
      const response = await fetchContext.authAxios.post<PositionResponseType>(
        '/application',
        {
          position: id,
        }
      )
      const {data} = response
      if (response.status === 201) {
        dispatch({type: PActions.edit, payload: response.data.position})
        setIsOpen(false)
        return Promise.resolve(data)
      }
      return Promise.reject({message: 'Something went wrong'})
    } catch (error) {
      return Promise.reject(error)
    }
  }
  return handleConfirm
}
