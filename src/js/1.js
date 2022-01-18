var flag = 2
var name = '234'

export { // 组件抛出，使其他文件使用 ，因为模块化
  flag, name
}
const ttr = 20
export default ttr //  一个模块中包含某个功能，我们希望导入者自己命名，在同一模块中只能有一个
