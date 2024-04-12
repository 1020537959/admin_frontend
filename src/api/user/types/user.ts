export interface CreateOrUpdateUserRequestData {
  id?: number
  username: string
  password?: string
  name: string
  phone: string
}

export interface GetUserRequestData {
  /** 当前页码 */
  currentPage: number
  /** 查询条数 */
  size: number
  /** 查询参数：姓名 */
  name?: string
  /** 查询参数：手机号 */
  phone?: string
}

export interface GetUserData {
  id: number
  username: string
  name: string
  phone: string
  email: string
  status: number
  is_super: number
  roles: object
  created_time: string
  updated_time: string
}

export type GetUserResponseData = ApiResponseData<{
  list: GetUserData[]
  total: number
}>
