import { axios } from '@/utils/request'

/**
 * 查询任务列表

 *
 * @author tao
 * @date 2021-04-29 23:25:56
 */
export function sysUserTaskPage (parameter) {
  return axios({
    url: '/sysUserTask/page',
    method: 'get',
    params: parameter
  })
}

/**
 * 任务列表
列表
 *
 * @author tao
 * @date 2021-04-29 23:25:56
 */
export function sysUserTaskList (parameter) {
  return axios({
    url: '/sysUserTask/list',
    method: 'get',
    params: parameter
  })
}

/**
 * 添加任务列表

 *
 * @author tao
 * @date 2021-04-29 23:25:56
 */
export function sysUserTaskAdd (parameter) {
  return axios({
    url: '/sysUserTask/add',
    method: 'post',
    data: parameter
  })
}

/**
 * 编辑任务列表

 *
 * @author tao
 * @date 2021-04-29 23:25:56
 */
export function sysUserTaskEdit (parameter) {
  return axios({
    url: '/sysUserTask/edit',
    method: 'post',
    data: parameter
  })
}

/**
 * 删除任务列表

 *
 * @author tao
 * @date 2021-04-29 23:25:56
 */
export function sysUserTaskDelete (parameter) {
  return axios({
    url: '/sysUserTask/delete',
    method: 'post',
    data: parameter
  })
}
