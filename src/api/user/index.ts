import { request } from "@/utils/service"
import type * as User from "./types/user"

/** 增 */
export function createUserDataApi(data: User.CreateOrUpdateUserRequestData) {
  return request({
    url: "users",
    method: "post",
    data
  })
}

/** 删 */
export function deleteUserDataApi(id: number) {
  return request({
    url: `users/${id}`,
    method: "delete"
  })
}

/** 改 */
export function updateUserDataApi(data: User.CreateOrUpdateUserRequestData) {
  const { id } = data
  return request({
    url: `users/${id}`,
    method: "patch",
    data
  })
}

/** 查 */
export function getUserDataApi(params: User.GetUserRequestData) {
  return request<User.GetUserResponseData>({
    url: "users",
    method: "get",
    params
  })
}
