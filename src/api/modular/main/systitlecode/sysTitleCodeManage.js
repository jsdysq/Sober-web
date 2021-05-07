import { axios } from '@/utils/request'

/**
 * 查询批量返回网站title与code
 *
 * @author tao
 * @date 2021-05-07 21:57:45
 */
export function sysTitleCodePage (parameter) {
  return axios({
    url: '/sysTitleCode/page',
    method: 'get',
    params: parameter
  })
}

/**
 * 批量返回网站title与code列表
 *
 * @author tao
 * @date 2021-05-07 21:57:45
 */
export function sysTitleCodeList (parameter) {
  return axios({
    url: '/sysTitleCode/list',
    method: 'get',
    params: parameter
  })
}

/**
 * 添加批量返回网站title与code
 *
 * @author tao
 * @date 2021-05-07 21:57:45
 */
export function sysTitleCodeAdd (parameter) {
  return axios({
    url: '/sysTitleCode/add',
    method: 'post',
    data: parameter
  })
}

/**
 * 编辑批量返回网站title与code
 *
 * @author tao
 * @date 2021-05-07 21:57:45
 */
export function sysTitleCodeEdit (parameter) {
  return axios({
    url: '/sysTitleCode/edit',
    method: 'post',
    data: parameter
  })
}

/**
 * 删除批量返回网站title与code
 *
 * @author tao
 * @date 2021-05-07 21:57:45
 */
export function sysTitleCodeDelete (parameter) {
  return axios({
    url: '/sysTitleCode/delete',
    method: 'post',
    data: parameter
  })
}
