import { NOOP } from '@vue/shared';
import '../../../utils/index.mjs';
import { uploadBaseProps } from './upload.mjs';
import { buildProps, definePropType } from '../../../utils/vue/props.mjs';
import { mutable } from '../../../utils/typescript.mjs';

const uploadContentProps = buildProps({
  ...uploadBaseProps,
  fileList: {
    type: definePropType(Array),
    default: () => mutable([])
  },
  beforeUpload: {
    type: definePropType(Function),
    default: NOOP
  },
  onRemove: {
    type: definePropType(Function),
    default: NOOP
  },
  onStart: {
    type: definePropType(Function),
    default: NOOP
  },
  onSuccess: {
    type: definePropType(Function),
    default: NOOP
  },
  onProgress: {
    type: definePropType(Function),
    default: NOOP
  },
  onError: {
    type: definePropType(Function),
    default: NOOP
  },
  onExceed: {
    type: definePropType(Function),
    default: NOOP
  }
});

export { uploadContentProps };
//# sourceMappingURL=upload-content.mjs.map
