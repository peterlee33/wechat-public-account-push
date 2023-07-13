/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx2bb70c362f6aa70c',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '25344f2a43484a62ae9d018828e67cef',

  PROVINCE: '苏州',
  CITY: '太仓',

  USERS: [
    {
      // 想要发送的人的名字
      name: '倩宝宝',
      // 发送给谁？-----------------------------------------------------------------------------------------
      id: 'obiO96cYcW3LcN7p_Ti04XFuXcoE',
      // 模板ID-------------------------------------------------------------------------------
      useTemplateId: 'ZB3lK11zsD7yUp-JAb--cLGPEjZGeRlhTpJAuYVL7uY',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '05-09',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝贝农', year: '1997', date: '05-09',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '宝贝阳', year: '1997', date: '05-09',
        },
        {
          type: '节日', name: '恋爱纪念日', year: '2023', date: '04-28',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 相识的日子
        { keyword: 'love_day', date: '2023-03-26' },
        // 在一起纪念日
        { keyword: 'marry_day', date: '2023-04-28' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'Y8QDUttjwERqJQaANUVD5rW7QP7oS7ZbFVCXgvo2rQE',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'obiO96cYcW3LcN7p_Ti04XFuXcoE',
    }
  ],

}

module.exports = USER_CONFIG

