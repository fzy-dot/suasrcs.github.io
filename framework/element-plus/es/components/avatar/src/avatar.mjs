import '../../../utils/index.mjs';
import '../../../constants/index.mjs';
import { buildProps, definePropType } from '../../../utils/vue/props.mjs';
import { componentSizes } from '../../../constants/size.mjs';
import { iconPropType } from '../../../utils/vue/icon.mjs';

const avatarProps = buildProps({
  size: {
    type: [Number, String],
    values: componentSizes,
    default: "",
    validator: (val) => typeof val === "number"
  },
  shape: {
    type: String,
    values: ["circle", "square"],
    default: "circle"
  },
  icon: {
    type: iconPropType
  },
  src: {
    type: String,
    default: ""
  },
  alt: String,
  srcSet: String,
  fit: {
    type: definePropType(String),
    default: "cover"
  }
});
const avatarEmits = {
  error: (evt) => evt instanceof Event
};

export { avatarEmits, avatarProps };
//# sourceMappingURL=avatar.mjs.map
