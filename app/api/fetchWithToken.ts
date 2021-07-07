import axios, {AxiosResponse} from 'axios'
import type {NestedStringsType} from 'app/types/project'
import type {IPositionInput} from 'app/types/position'
import type {
  TechnologiesResponseType,
  LanguagesResponseType,
  PositionResponseType,
  ProjectsResponseType,
  RemoveProjectResponseType,
  RemovePositionResponseType,
} from 'app/types/response'

export async function fetchTechnologiesWithToken(
  token: string
): Promise<TechnologiesResponseType> {
  try {
    const response = await axios.get<TechnologiesResponseType>('/technology', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    const {data} = response
    return Promise.resolve(data)
  } catch (err) {
    return Promise.reject(err)
  }
}

export async function fetchLanguagesWithToken(
  token: string
): Promise<LanguagesResponseType> {
  try {
    const response = await axios.get<LanguagesResponseType>('/language', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    const {data} = response
    return Promise.resolve(data)
  } catch (err) {
    return Promise.reject(err)
  }
}

export async function fetchProjectsWithToken(
  token: string,
  date: NestedStringsType,
  match: NestedStringsType,
  available: NestedStringsType,
  technologies: NestedStringsType
): Promise<AxiosResponse<ProjectsResponseType>> {
  //* technologies and match must be checked before each fetching
  const tech =
    technologies && technologies.length
      ? `&technologies=${technologies.toString()},`
      : ''
  const matches = match ? `&match=${match}` : ''
  const response = await axios.get<ProjectsResponseType>(
    `/project?sort=${date}${matches}&hasPositions=${available}${tech}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )
  return response
}

export async function addPositionWithToken(
  data: IPositionInput,
  token: string
): Promise<AxiosResponse<PositionResponseType>> {
  data.projectId = window.location.pathname.slice(10)
  const response = await axios.post<PositionResponseType>(
    '/position',
    {
      position: data,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )
  return response
}

export async function deleteProjectByIdWithToken(
  token: string,
  id: string
): Promise<AxiosResponse<RemoveProjectResponseType>> {
  const response = await axios.delete<RemoveProjectResponseType>(
    `/project/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )
  return response
}

export async function deletePositionByIdWithToken(
  token: string,
  id: string
): Promise<AxiosResponse<RemovePositionResponseType>> {
  const response = await axios.delete<RemovePositionResponseType>(
    `/position/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )
  return response
}
