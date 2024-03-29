'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var shared = require('@vue/shared');
require('../../../utils/index.js');
var ajax = require('./ajax.js');
var props = require('../../../utils/vue/props.js');
var typescript = require('../../../utils/typescript.js');

const uploadListTypes = ["text", "picture", "picture-card"];
let fileId = 1;
const genFileId = () => Date.now() + fileId++;
const uploadBaseProps = props.buildProps({
  action: {
    type: String,
    default: "#"
  },
  headers: {
    type: props.definePropType(Object)
  },
  method: {
    type: String,
    default: "post"
  },
  data: {
    type: Object,
    default: () => typescript.mutable({})
  },
  multiple: {
    type: Boolean,
    default: false
  },
  name: {
    type: String,
    default: "file"
  },
  drag: {
    type: Boolean,
    default: false
  },
  withCredentials: Boolean,
  showFileList: {
    type: Boolean,
    default: true
  },
  accept: {
    type: String,
    default: ""
  },
  type: {
    type: String,
    default: "select"
  },
  fileList: {
    type: props.definePropType(Array),
    default: () => typescript.mutable([])
  },
  autoUpload: {
    type: Boolean,
    default: true
  },
  listType: {
    type: String,
    values: uploadListTypes,
    default: "text"
  },
  httpRequest: {
    type: props.definePropType(Function),
    default: ajax.ajaxUpload
  },
  disabled: Boolean,
  limit: Number
});
const uploadProps = props.buildProps({
  ...uploadBaseProps,
  beforeUpload: {
    type: props.definePropType(Function),
    default: shared.NOOP
  },
  beforeRemove: {
    type: props.definePropType(Function)
  },
  onRemove: {
    type: props.definePropType(Function),
    default: shared.NOOP
  },
  onChange: {
    type: props.definePropType(Function),
    default: shared.NOOP
  },
  onPreview: {
    type: props.definePropType(Function),
    default: shared.NOOP
  },
  onSuccess: {
    type: props.definePropType(Function),
    default: shared.NOOP
  },
  onProgress: {
    type: props.definePropType(Function),
    default: shared.NOOP
  },
  onError: {
    type: props.definePropType(Function),
    default: shared.NOOP
  },
  onExceed: {
    type: props.definePropType(Function),
    default: shared.NOOP
  }
});

exports.genFileId = genFileId;
exports.uploadBaseProps = uploadBaseProps;
exports.uploadListTypes = uploadListTypes;
exports.uploadProps = uploadProps;
//# sourceMappingURL=upload.js.map
