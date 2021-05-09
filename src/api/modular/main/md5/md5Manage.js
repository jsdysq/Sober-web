import { axios } from '@/utils/request'

/**
 * 查询MD5查询
 *
 * @author tao
 * @date 2021-05-10 00:00:46
 */
export function md5Page (parameter) {
  return axios({
    url: '/md5/page',
    method: 'get',
    params: parameter
  })
}

/**
 * MD5查询列表
 *
 * @author tao
 * @date 2021-05-10 00:00:46
 */
export function md5List (parameter) {
  return axios({
    url: '/md5/list',
    method: 'get',
    params: parameter
  })
}

/**
 * 添加MD5查询
 *
 * @author tao
 * @date 2021-05-10 00:00:46
 */
export function md5Add (parameter) {
  return axios({
    url: '/md5/add',
    method: 'post',
    data: parameter
  })
}

/**
 * 编辑MD5查询
 *
 * @author tao
 * @date 2021-05-10 00:00:46
 */
export function md5Edit (parameter) {
  return axios({
    url: '/md5/edit',
    method: 'post',
    data: parameter
  })
}

/**
 * 删除MD5查询
 *
 * @author tao
 * @date 2021-05-10 00:00:46
 */
export function md5Delete (parameter) {
  return axios({
    url: '/md5/delete',
    method: 'post',
    data: parameter
  })
}
