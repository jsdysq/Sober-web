import { axios } from '@/utils/request'

/**
 * 查询弱口令扫描
 *
 * @author tao
 * @date 2021-05-09 14:50:06
 */
export function weakPassScanPage (parameter) {
  return axios({
    url: '/weakPassScan/page',
    method: 'get',
    params: parameter
  })
}

/**
 * 弱口令扫描列表
 *
 * @author tao
 * @date 2021-05-09 14:50:06
 */
export function weakPassScanList (parameter) {
  return axios({
    url: '/weakPassScan/list',
    method: 'get',
    params: parameter
  })
}

/**
 * 添加弱口令扫描
 *
 * @author tao
 * @date 2021-05-09 14:50:06
 */
export function weakPassScanAdd (parameter) {
  return axios({
    url: '/weakPassScan/add',
    method: 'post',
    data: parameter
  })
}

/**
 * 编辑弱口令扫描
 *
 * @author tao
 * @date 2021-05-09 14:50:06
 */
export function weakPassScanEdit (parameter) {
  return axios({
    url: '/weakPassScan/edit',
    method: 'post',
    data: parameter
  })
}

/**
 * 删除弱口令扫描
 *
 * @author tao
 * @date 2021-05-09 14:50:06
 */
export function weakPassScanDelete (parameter) {
  return axios({
    url: '/weakPassScan/delete',
    method: 'post',
    data: parameter
  })
}
