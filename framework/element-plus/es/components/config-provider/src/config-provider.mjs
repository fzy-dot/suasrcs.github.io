import { defineComponent, watch, renderSlot } from 'vue';
import '../../../utils/index.mjs';
import '../../../hooks/index.mjs';
import '../../../constants/index.mjs';
import { buildProps, definePropType } from '../../../utils/vue/props.mjs';
import { componentSizes } from '../../../constants/size.mjs';
import { provideGlobalConfig } from '../../../hooks/use-global-config/index.mjs';

const messageConfig = {};
const configProviderProps = buildProps({
  a11y: {
    type: Boolean,
    default: true
  },
  locale: {
    type: definePropType(Object)
  },
  size: {
    type: String,
    values: componentSizes,
    default: ""
  },
  button: {
    type: definePropType(Object)
  },
  experimentalFeatures: {
    type: definePropType(Object)
  },
  keyboardNavigation: {
    type: Boolean,
    default: true
  },
  message: {
    type: definePropType(Object)
  },
  zIndex: {
    type: Number
  },
  namespace: {
    type: String,
    default: "el"
  }
});
var ConfigProvider = defineComponent({
  name: "ElConfigProvider",
  props: configProviderProps,
  setup(props, { slots }) {
    watch(() => props.message, (val) => {
      Object.assign(messageConfig, val != null ? val : {});
    }, { immediate: true, deep: true });
    const config = provideGlobalConfig(props);
    return () => renderSlot(slots, "default", { config: config == null ? void 0 : config.value });
  }
});

export { configProviderProps, ConfigProvider as default, messageConfig };
//# sourceMappingURL=config-provider.mjs.map
