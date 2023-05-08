let path = window.document.location.href;
let pathName = window.location.pathname;
let pos = path.indexOf(pathName);
let url = path.substring(0, pos);

/* 服务地址（网关） */

/* 生产环境 */
const WS_URL = url.substring(7);
const URL = '/';

/* 开发环境 */
// const WS_URL = '127.0.0.1:10001';
// const URL = 'http://127.0.0.1:10001/';

const gateway_serve = URL;
const user_serve = gateway_serve + 'user/';
const file_serve = gateway_serve + 'file/';
const message_serve = gateway_serve + 'message/';
const face_serve = gateway_serve + 'face/';
const enterprise_serve = gateway_serve + 'enterprise/';

/* webSocket服务地址 */
const url_web_socket = `ws://${WS_URL}/message/ws/v1/message/conference`;

/* axios 配置 */
axios.defaults.headers.common['CMS-TOKEN'] = localStorage.getItem('CMS_TOKEN');

function reloadToken(cms_token) {
    axios.defaults.headers.common['CMS-TOKEN'] = cms_token;
}

/* 令牌更新时间 */
const token_update_time = 10;

/* 检测人脸位置 */
const url_face_location = face_serve + 'api/v1/face/location/retina-face';

/* 扫脸登录 */
const url_login_face = user_serve + 'api/v1/user/login/face';

/* 注册账号 */
const url_user_register = user_serve + 'api/v1/user/register';

/* 账号登录 */
const url_user_login = user_serve + 'api/v1/user/login';

/* 个人资料 */
const url_user_me = user_serve + 'api/v1/user/me';

/* 用户 */
const url_user = user_serve + 'api/v1/user';

/* 发送验证码 */
const url_send_verification = user_serve + 'api/v1/verification';

/* 上传文件 */
const url_file_upload = file_serve + 'api/v1/file/upload/1';

/* 查看文件 */
const url_file_view  = file_serve + 'api/v1/file/view/';

/* 查看人脸 */
const url_face_view = face_serve + 'api/v1/face/view/';

/* 录入人脸 */
const url_face_record = face_serve + 'api/v1/face/record/';

/* 人脸接口 */
const url_face = face_serve + 'api/v1/face';

/* 更新令牌 */
const url_update_token = user_serve + 'api/v1/user/update-token';

/* 企业 */
const url_enterprise = enterprise_serve + 'api/v1/enterprise';

/* 我的企业 */
const url_enterprise_me = enterprise_serve + 'api/v1/enterprise/query-me';

/* 企业的会议 */
const url_enterprise_conference = enterprise_serve + 'api/v1/conference';

/* 企业会议统计 */
const url_enterprise_conference_total = enterprise_serve + 'api/v1/conference/total';

/* 待开会议 */
const url_enterprise_conference_future = enterprise_serve + 'api/v1/conference/future';

/* 企业用户  */
const url_enterprise_user = enterprise_serve + 'api/v1/enterprise-user';

/* 我加入的企业 */
const url_enterprise_user_me = enterprise_serve + 'api/v1/enterprise-user/query-me';

/* 企业人员统计 */
const url_enterprise_user_total = enterprise_serve + 'api/v1/enterprise-user/total';

/* 加入企业 */
const url_enterprise_user_join = enterprise_serve + 'api/v1/enterprise-user/join';

/* 会议用户 */
const url_conference_user = enterprise_serve + 'api/v1/conference-user';

/* 清空会议用户 */
const url_conference_user_clear = enterprise_serve + 'api/v1/conference-user/conferenceId';

/* 会议扫脸签到 */
const url_conference_face_sign = enterprise_serve + 'api/v1/conference-user/face/sign';

/* 会议手动签到 */
const url_conference_manual_sign = enterprise_serve + 'api/v1/conference-user/manual/sign';

/* 会议笔记 */
const url_conference_user_note = enterprise_serve + 'api/v1/conference-user-note';

/* 会议统计 */
const url_conference_day_count = enterprise_serve + 'api/v1/conference/day-count/7';

/* 公告 */
const url_message_notice = message_serve + 'api/v1/notice';

/* 我的公告 */
const url_message_notice_me = message_serve + 'api/v1/notice/me-receive';

/* 公告用户 */
const url_message_notice_user = message_serve + 'api/v1/notice-user';

/* 公告已读 */
const url_message_notice_read = message_serve + 'api/v1/notice-user/set-read';
