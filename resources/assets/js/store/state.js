const windowWidth = $A(window).width(),
    windowHeight = $A(window).height(),
    windowOrientation = $A.screenOrientation()

export default {
    // 客户端ID（希望不变的，除非清除浏览器缓存或者卸载应用）
    clientId: "",

    // 窗口是否激活
    windowActive: true,

    // 窗口滚动条位置
    windowScrollY: 0,

    // 浏览器支持触摸事件
    windowTouch: "ontouchend" in document,

    // 浏览器尺寸信息
    windowWidth: windowWidth,
    windowHeight: windowHeight,

    // 浏览器窗口方向
    windowOrientation: windowOrientation,
    windowLandscape: windowOrientation === 'landscape', // 横屏
    windowPortrait: windowOrientation === 'portrait',   // 竖屏

    // 表单布局
    formLabelPosition: windowWidth > 576 ? 'right' : 'top',
    formLabelWidth: windowWidth > 576 ? 'auto' : '',

    // 键盘状态（仅iOS）
    keyboardType: null, // show|hide
    keyboardHeight: 0,  // 键盘高度
    safeAreaBottom: 0,  // 安全区域底部高度

    // App通知权限
    appNotificationPermission: true,

    // 播放中的音频地址
    audioPlaying: null,

    // 路由记录
    routeHistorys: [],
    routeHistoryLast: {},

    // 请求时间
    callAt: [],

    // 加载状态
    loads: [],
    loadDashboardTasks: false,
    loadUserBasic: false,
    loadProjects: 0,
    loadDialogs: 0,
    floatSpinnerTimer: [],
    floatSpinnerLoad: 0,
    touchBackInProgress: false,

    // User
    cacheUserActive: {},
    cacheUserWait: [],
    cacheUserBasic: [],

    // Dialog
    cacheDialogs: [],

    // Project
    cacheProjects: [],
    cacheColumns: [],
    cacheTasks: [],
    cacheProjectParameter: [],
    cacheTaskBrowse: [],

    // Emoji
    cacheEmojis: [],

    // ServerUrl
    cacheServerUrl: "",

    // Ajax
    ajaxWsReady: false,
    ajaxWsListener: [],
    ajaxNetworkException: false,

    // Websocket
    ws: null,
    wsMsg: {},
    wsCall: {},
    wsTimeout: null,
    wsRandom: 0,
    wsOpenNum: 0,
    wsListener: {},
    wsReadTimeout: null,
    wsReadWaitData: {},

    // 会员信息
    userInfo: {},
    userId: 0,
    userToken: '',
    userIsAdmin: false,
    userOnline: {},
    userAvatar: {},

    // 会话聊天
    dialogId: 0,
    dialogSearchMsgId: 0,
    dialogIns: [],
    dialogMsgs: [],
    dialogTodos: [],
    dialogHistory: [],
    dialogDraftTimer: {},
    dialogMsgTransfer: {time: 0},

    // 搜索关键词（主要用于移动端判断滑动返回）
    messengerSearchKey: {dialog: '', contacts: ''},

    // 文件
    fileLists: [],
    fileLinks: [],

    // 项目任务
    projectId: 0,
    projectTotal: 0,
    projectLoad: 0,
    taskId: 0,
    taskCompleteTemps: [],
    taskContents: [],
    taskFiles: [],
    taskLogs: [],
    taskOperation: {},
    taskArchiveView: 0,

    // 任务等待状态
    taskOneLoad: {},

    // 任务流程信息
    taskFlows: [],
    taskFlowItems: [],

    // 任务优先级
    taskPriority: [],

    // 项目创建列表模板
    columnTemplate: [],

    // 列表背景色
    columnColorList: [
        {name: '默认', color: ''},
        {name: '灰色', color: '#444444'},
        {name: '棕色', color: '#947364'},
        {name: '橘色', color: '#faaa6c'},
        {name: '黄色', color: '#f2d86d'},
        {name: '绿色', color: '#73b45c'},
        {name: '蓝色', color: '#51abea'},
        {name: '紫色', color: '#b583e3'},
        {name: '粉色', color: '#ff819c'},
        {name: '红色', color: '#ff7070'},
    ],

    // 任务背景色
    taskColorList: [
        {name: '默认', color: ''},
        {name: '黄色', color: '#fffae6'},
        {name: '蓝色', color: '#e5f5ff'},
        {name: '绿色', color: '#ecffe5'},
        {name: '粉色', color: '#ffeaee'},
        {name: '紫色', color: '#f6ecff'},
        {name: '灰色', color: '#f3f3f3'},
    ],

    // 主题皮肤
    themeMode: window.localStorage.getItem("__theme:mode__"),
    themeList: [
        {name: '跟随系统', value: 'auto'},
        {name: '明亮', value: 'light'},
        {name: '暗黑', value: 'dark'},
    ],
    themeIsDark: false,

    // 客户端新版本号
    clientNewVersion: null,

    // 预览图片
    previewImageIndex: 0,
    previewImageList: [],

    // 工作报告未读数量
    reportUnreadNumber: 0,

    // 加密相关
    apiKeyData: {},
    localKeyPair: {},
    localKeyLock: false,

    // 插件
    plugins: {
        menus:[],
        files:[]
    },
};
