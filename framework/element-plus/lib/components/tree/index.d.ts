import type { SFCWithInstall } from 'element-plus/es/utils';
declare const _Tree: SFCWithInstall<import("vue").DefineComponent<{
    data: {
        type: ArrayConstructor;
        default: () => never[];
    };
    emptyText: {
        type: StringConstructor;
    };
    renderAfterExpand: {
        type: BooleanConstructor;
        default: boolean;
    };
    nodeKey: StringConstructor;
    checkStrictly: BooleanConstructor;
    defaultExpandAll: BooleanConstructor;
    expandOnClickNode: {
        type: BooleanConstructor;
        default: boolean;
    };
    checkOnClickNode: BooleanConstructor;
    checkDescendants: {
        type: BooleanConstructor;
        default: boolean;
    };
    autoExpandParent: {
        type: BooleanConstructor;
        default: boolean;
    };
    defaultCheckedKeys: import("vue").PropType<import("./src/tree.type").TreeKey[]>;
    defaultExpandedKeys: import("vue").PropType<import("./src/tree.type").TreeKey[]>;
    currentNodeKey: import("vue").PropType<string | number>;
    renderContent: FunctionConstructor;
    showCheckbox: {
        type: BooleanConstructor;
        default: boolean;
    };
    draggable: {
        type: BooleanConstructor;
        default: boolean;
    };
    allowDrag: FunctionConstructor;
    allowDrop: FunctionConstructor;
    props: {
        type: import("vue").PropType<import("./src/tree.type").TreeOptionProps>;
        default: () => {
            children: string;
            label: string;
            disabled: string;
        };
    };
    lazy: {
        type: BooleanConstructor;
        default: boolean;
    };
    highlightCurrent: BooleanConstructor;
    load: import("vue").PropType<import("./src/tree.type").LoadFunction>;
    filterNodeMethod: import("vue").PropType<import("./src/tree.type").FilterNodeMethodFunction>;
    accordion: BooleanConstructor;
    indent: {
        type: NumberConstructor;
        default: number;
    };
    icon: import("vue").PropType<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>;
}, {
    ns: {
        namespace: import("vue").ComputedRef<string>;
        b: (blockSuffix?: string) => string;
        e: (element?: string | undefined) => string;
        m: (modifier?: string | undefined) => string;
        be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
        em: (element?: string | undefined, modifier?: string | undefined) => string;
        bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
        bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
        is: {
            (name: string, state: boolean | undefined): string;
            (name: string): string;
        };
    };
    store: import("vue").Ref<{
        currentNode: {
            id: number;
            text: string;
            checked: boolean;
            indeterminate: boolean;
            data: {
                [x: string]: any;
            };
            expanded: boolean;
            parent: any;
            visible: boolean;
            isCurrent: boolean;
            store: any;
            isLeafByUser: boolean;
            isLeaf: boolean;
            canFocus: boolean;
            level: number;
            loaded: boolean;
            childNodes: any[];
            loading: boolean;
            initialize: () => void;
            setData: (data: import("./src/tree.type").TreeNodeData) => void;
            readonly label: string;
            readonly key: import("./src/tree.type").TreeKey;
            readonly disabled: boolean;
            readonly nextSibling: any | null;
            readonly previousSibling: any | null;
            contains: (target: import("./src/model/node").default, deep?: boolean) => boolean;
            remove: () => void;
            insertChild: (child?: import("./src/model/node").default | import("./src/tree.type").FakeNode | undefined, index?: number | undefined, batch?: boolean | undefined) => void;
            insertBefore: (child: import("./src/model/node").default | import("./src/tree.type").FakeNode, ref: import("./src/model/node").default) => void;
            insertAfter: (child: import("./src/model/node").default | import("./src/tree.type").FakeNode, ref: import("./src/model/node").default) => void;
            removeChild: (child: import("./src/model/node").default) => void;
            removeChildByData: (data: import("./src/tree.type").TreeNodeData) => void;
            expand: (callback?: (() => void) | undefined, expandParent?: boolean | undefined) => void;
            doCreateChildren: (array: import("./src/tree.type").TreeNodeData[], defaultProps?: import("./src/tree.type").TreeNodeLoadedDefaultProps) => void;
            collapse: () => void;
            shouldLoadData: () => boolean;
            updateLeafState: () => void;
            setChecked: (value?: string | boolean | undefined, deep?: boolean | undefined, recursion?: boolean | undefined, passValue?: boolean | undefined) => void;
            getChildren: (forceInit?: boolean) => import("./src/tree.type").TreeNodeData | import("./src/tree.type").TreeNodeData[];
            updateChildren: () => void;
            loadData: (callback: (node: import("./src/model/node").default) => void, defaultProps?: import("./src/tree.type").TreeNodeLoadedDefaultProps) => void;
        };
        currentNodeKey: import("./src/tree.type").TreeKey;
        nodesMap: {
            [x: string]: {
                id: number;
                text: string;
                checked: boolean;
                indeterminate: boolean;
                data: {
                    [x: string]: any;
                };
                expanded: boolean;
                parent: any;
                visible: boolean;
                isCurrent: boolean;
                store: any;
                isLeafByUser: boolean;
                isLeaf: boolean;
                canFocus: boolean;
                level: number;
                loaded: boolean;
                childNodes: any[];
                loading: boolean;
                initialize: () => void;
                setData: (data: import("./src/tree.type").TreeNodeData) => void;
                readonly label: string;
                readonly key: import("./src/tree.type").TreeKey;
                readonly disabled: boolean;
                readonly nextSibling: any | null;
                readonly previousSibling: any | null;
                contains: (target: import("./src/model/node").default, deep?: boolean) => boolean;
                remove: () => void;
                insertChild: (child?: import("./src/model/node").default | import("./src/tree.type").FakeNode | undefined, index?: number | undefined, batch?: boolean | undefined) => void;
                insertBefore: (child: import("./src/model/node").default | import("./src/tree.type").FakeNode, ref: import("./src/model/node").default) => void;
                insertAfter: (child: import("./src/model/node").default | import("./src/tree.type").FakeNode, ref: import("./src/model/node").default) => void;
                removeChild: (child: import("./src/model/node").default) => void;
                removeChildByData: (data: import("./src/tree.type").TreeNodeData) => void;
                expand: (callback?: (() => void) | undefined, expandParent?: boolean | undefined) => void;
                doCreateChildren: (array: import("./src/tree.type").TreeNodeData[], defaultProps?: import("./src/tree.type").TreeNodeLoadedDefaultProps) => void;
                collapse: () => void;
                shouldLoadData: () => boolean;
                updateLeafState: () => void;
                setChecked: (value?: string | boolean | undefined, deep?: boolean | undefined, recursion?: boolean | undefined, passValue?: boolean | undefined) => void;
                getChildren: (forceInit?: boolean) => import("./src/tree.type").TreeNodeData | import("./src/tree.type").TreeNodeData[];
                updateChildren: () => void;
                loadData: (callback: (node: import("./src/model/node").default) => void, defaultProps?: import("./src/tree.type").TreeNodeLoadedDefaultProps) => void;
            };
        };
        root: {
            id: number;
            text: string;
            checked: boolean;
            indeterminate: boolean;
            data: {
                [x: string]: any;
            };
            expanded: boolean;
            parent: any;
            visible: boolean;
            isCurrent: boolean;
            store: any;
            isLeafByUser: boolean;
            isLeaf: boolean;
            canFocus: boolean;
            level: number;
            loaded: boolean;
            childNodes: any[];
            loading: boolean;
            initialize: () => void;
            setData: (data: import("./src/tree.type").TreeNodeData) => void;
            readonly label: string;
            readonly key: import("./src/tree.type").TreeKey;
            readonly disabled: boolean;
            readonly nextSibling: any | null;
            readonly previousSibling: any | null;
            contains: (target: import("./src/model/node").default, deep?: boolean) => boolean;
            remove: () => void;
            insertChild: (child?: import("./src/model/node").default | import("./src/tree.type").FakeNode | undefined, index?: number | undefined, batch?: boolean | undefined) => void;
            insertBefore: (child: import("./src/model/node").default | import("./src/tree.type").FakeNode, ref: import("./src/model/node").default) => void;
            insertAfter: (child: import("./src/model/node").default | import("./src/tree.type").FakeNode, ref: import("./src/model/node").default) => void;
            removeChild: (child: import("./src/model/node").default) => void;
            removeChildByData: (data: import("./src/tree.type").TreeNodeData) => void;
            expand: (callback?: (() => void) | undefined, expandParent?: boolean | undefined) => void;
            doCreateChildren: (array: import("./src/tree.type").TreeNodeData[], defaultProps?: import("./src/tree.type").TreeNodeLoadedDefaultProps) => void;
            collapse: () => void;
            shouldLoadData: () => boolean;
            updateLeafState: () => void;
            setChecked: (value?: string | boolean | undefined, deep?: boolean | undefined, recursion?: boolean | undefined, passValue?: boolean | undefined) => void;
            getChildren: (forceInit?: boolean) => import("./src/tree.type").TreeNodeData | import("./src/tree.type").TreeNodeData[];
            updateChildren: () => void;
            loadData: (callback: (node: import("./src/model/node").default) => void, defaultProps?: import("./src/tree.type").TreeNodeLoadedDefaultProps) => void;
        };
        data: {
            [x: string]: any;
        }[];
        lazy: boolean;
        load: import("./src/tree.type").LoadFunction;
        filterNodeMethod: import("./src/tree.type").FilterNodeMethodFunction;
        key: import("./src/tree.type").TreeKey;
        defaultCheckedKeys: import("./src/tree.type").TreeKey[];
        checkStrictly: boolean;
        defaultExpandedKeys: import("./src/tree.type").TreeKey[];
        autoExpandParent: boolean;
        defaultExpandAll: boolean;
        checkDescendants: boolean;
        props: {
            children?: string | undefined;
            label?: string | ((data: import("./src/tree.type").TreeNodeData, node: import("./src/model/node").default) => string) | undefined;
            disabled?: string | ((data: import("./src/tree.type").TreeNodeData, node: import("./src/model/node").default) => string) | undefined;
            isLeaf?: string | ((data: import("./src/tree.type").TreeNodeData, node: import("./src/model/node").default) => boolean) | undefined;
            class?: ((data: import("./src/tree.type").TreeNodeData, node: import("./src/model/node").default) => string | {
                [key: string]: boolean;
            }) | undefined;
        };
        initialize: () => void;
        filter: (value: any) => void;
        setData: (newVal: import("./src/tree.type").TreeData) => void;
        getNode: (data: import("./src/tree.type").TreeNodeData | import("./src/tree.type").TreeKey) => import("./src/model/node").default;
        insertBefore: (data: import("./src/tree.type").TreeNodeData, refData: import("./src/tree.type").TreeNodeData | import("./src/tree.type").TreeKey) => void;
        insertAfter: (data: import("./src/tree.type").TreeNodeData, refData: import("./src/tree.type").TreeNodeData | import("./src/tree.type").TreeKey) => void;
        remove: (data: import("./src/model/node").default | import("./src/tree.type").TreeNodeData) => void;
        append: (data: import("./src/tree.type").TreeNodeData, parentData: import("./src/model/node").default | import("./src/tree.type").TreeNodeData | import("./src/tree.type").TreeKey) => void;
        _initDefaultCheckedNodes: () => void;
        _initDefaultCheckedNode: (node: import("./src/model/node").default) => void;
        setDefaultCheckedKey: (newVal: import("./src/tree.type").TreeKey[]) => void;
        registerNode: (node: import("./src/model/node").default) => void;
        deregisterNode: (node: import("./src/model/node").default) => void;
        getCheckedNodes: (leafOnly?: boolean, includeHalfChecked?: boolean) => import("./src/tree.type").TreeNodeData[];
        getCheckedKeys: (leafOnly?: boolean) => import("./src/tree.type").TreeKey[];
        getHalfCheckedNodes: () => import("./src/tree.type").TreeNodeData[];
        getHalfCheckedKeys: () => import("./src/tree.type").TreeKey[];
        _getAllNodes: () => import("./src/model/node").default[];
        updateChildren: (key: import("./src/tree.type").TreeKey, data: import("./src/tree.type").TreeData) => void;
        _setCheckedKeys: (key: import("./src/tree.type").TreeKey, leafOnly: boolean | undefined, checkedKeys: {
            [key: string]: boolean;
        }) => void;
        setCheckedNodes: (array: import("./src/model/node").default[], leafOnly?: boolean) => void;
        setCheckedKeys: (keys: import("./src/tree.type").TreeKey[], leafOnly?: boolean) => void;
        setDefaultExpandedKeys: (keys: import("./src/tree.type").TreeKey[]) => void;
        setChecked: (data: import("./src/tree.type").TreeNodeData | import("./src/tree.type").TreeKey, checked: boolean, deep: boolean) => void;
        getCurrentNode: () => import("./src/model/node").default;
        setCurrentNode: (currentNode: import("./src/model/node").default) => void;
        setUserCurrentNode: (node: import("./src/model/node").default, shouldAutoExpandParent?: boolean) => void;
        setCurrentNodeKey: (key: import("./src/tree.type").TreeKey, shouldAutoExpandParent?: boolean) => void;
    }>;
    root: import("vue").Ref<{
        id: number;
        text: string;
        checked: boolean;
        indeterminate: boolean;
        data: {
            [x: string]: any;
        };
        expanded: boolean;
        parent: any;
        visible: boolean;
        isCurrent: boolean;
        store: any;
        isLeafByUser: boolean;
        isLeaf: boolean;
        canFocus: boolean;
        level: number;
        loaded: boolean;
        childNodes: any[];
        loading: boolean;
        initialize: () => void;
        setData: (data: import("./src/tree.type").TreeNodeData) => void;
        readonly label: string;
        readonly key: import("./src/tree.type").TreeKey;
        readonly disabled: boolean;
        readonly nextSibling: any | null;
        readonly previousSibling: any | null;
        contains: (target: import("./src/model/node").default, deep?: boolean) => boolean;
        remove: () => void;
        insertChild: (child?: import("./src/model/node").default | import("./src/tree.type").FakeNode | undefined, index?: number | undefined, batch?: boolean | undefined) => void;
        insertBefore: (child: import("./src/model/node").default | import("./src/tree.type").FakeNode, ref: import("./src/model/node").default) => void;
        insertAfter: (child: import("./src/model/node").default | import("./src/tree.type").FakeNode, ref: import("./src/model/node").default) => void;
        removeChild: (child: import("./src/model/node").default) => void;
        removeChildByData: (data: import("./src/tree.type").TreeNodeData) => void;
        expand: (callback?: (() => void) | undefined, expandParent?: boolean | undefined) => void;
        doCreateChildren: (array: import("./src/tree.type").TreeNodeData[], defaultProps?: import("./src/tree.type").TreeNodeLoadedDefaultProps) => void;
        collapse: () => void;
        shouldLoadData: () => boolean;
        updateLeafState: () => void;
        setChecked: (value?: string | boolean | undefined, deep?: boolean | undefined, recursion?: boolean | undefined, passValue?: boolean | undefined) => void;
        getChildren: (forceInit?: boolean) => import("./src/tree.type").TreeNodeData | import("./src/tree.type").TreeNodeData[];
        updateChildren: () => void;
        loadData: (callback: (node: import("./src/model/node").default) => void, defaultProps?: import("./src/tree.type").TreeNodeLoadedDefaultProps) => void;
    }>;
    currentNode: import("vue").Ref<{
        id: number;
        text: string;
        checked: boolean;
        indeterminate: boolean;
        data: {
            [x: string]: any;
        };
        expanded: boolean;
        parent: any;
        visible: boolean;
        isCurrent: boolean;
        store: any;
        isLeafByUser: boolean;
        isLeaf: boolean;
        canFocus: boolean;
        level: number;
        loaded: boolean;
        childNodes: any[];
        loading: boolean;
        initialize: () => void;
        setData: (data: import("./src/tree.type").TreeNodeData) => void;
        readonly label: string;
        readonly key: import("./src/tree.type").TreeKey;
        readonly disabled: boolean;
        readonly nextSibling: any | null;
        readonly previousSibling: any | null;
        contains: (target: import("./src/model/node").default, deep?: boolean) => boolean;
        remove: () => void;
        insertChild: (child?: import("./src/model/node").default | import("./src/tree.type").FakeNode | undefined, index?: number | undefined, batch?: boolean | undefined) => void;
        insertBefore: (child: import("./src/model/node").default | import("./src/tree.type").FakeNode, ref: import("./src/model/node").default) => void;
        insertAfter: (child: import("./src/model/node").default | import("./src/tree.type").FakeNode, ref: import("./src/model/node").default) => void;
        removeChild: (child: import("./src/model/node").default) => void;
        removeChildByData: (data: import("./src/tree.type").TreeNodeData) => void;
        expand: (callback?: (() => void) | undefined, expandParent?: boolean | undefined) => void;
        doCreateChildren: (array: import("./src/tree.type").TreeNodeData[], defaultProps?: import("./src/tree.type").TreeNodeLoadedDefaultProps) => void;
        collapse: () => void;
        shouldLoadData: () => boolean;
        updateLeafState: () => void;
        setChecked: (value?: string | boolean | undefined, deep?: boolean | undefined, recursion?: boolean | undefined, passValue?: boolean | undefined) => void;
        getChildren: (forceInit?: boolean) => import("./src/tree.type").TreeNodeData | import("./src/tree.type").TreeNodeData[];
        updateChildren: () => void;
        loadData: (callback: (node: import("./src/model/node").default) => void, defaultProps?: import("./src/tree.type").TreeNodeLoadedDefaultProps) => void;
    }>;
    dragState: import("vue").Ref<{
        showDropIndicator: boolean;
        draggingNode: null;
        dropNode: null;
        allowDrop: boolean;
        dropType: null;
    }>;
    el$: import("vue").Ref<import("element-plus/es/utils").Nullable<HTMLElement>>;
    dropIndicator$: import("vue").Ref<import("element-plus/es/utils").Nullable<HTMLElement>>;
    isEmpty: import("vue").ComputedRef<boolean>;
    filter: (value: any) => void;
    getNodeKey: (node: import("./src/model/node").default) => any;
    getNodePath: (data: import("./src/tree.type").TreeNodeData | import("./src/tree.type").TreeKey) => import("./src/tree.type").TreeNodeData[];
    getCheckedNodes: (leafOnly?: boolean | undefined, includeHalfChecked?: boolean | undefined) => import("./src/tree.type").TreeNodeData[];
    getCheckedKeys: (leafOnly?: boolean | undefined) => import("./src/tree.type").TreeKey[];
    getCurrentNode: () => import("./src/tree.type").TreeNodeData;
    getCurrentKey: () => any;
    setCheckedNodes: (nodes: import("./src/model/node").default[], leafOnly?: boolean | undefined) => void;
    setCheckedKeys: (keys: any, leafOnly?: boolean | undefined) => void;
    setChecked: (data: import("./src/tree.type").TreeNodeData | import("./src/tree.type").TreeKey, checked: boolean, deep: boolean) => void;
    getHalfCheckedNodes: () => import("./src/tree.type").TreeNodeData[];
    getHalfCheckedKeys: () => import("./src/tree.type").TreeKey[];
    setCurrentNode: (node: import("./src/model/node").default, shouldAutoExpandParent?: boolean) => void;
    setCurrentKey: (key: import("./src/tree.type").TreeKey, shouldAutoExpandParent?: boolean) => void;
    t: import("../..").Translator;
    getNode: (data: import("./src/tree.type").TreeNodeData | import("./src/tree.type").TreeKey) => import("./src/model/node").default;
    remove: (data: import("./src/model/node").default | import("./src/tree.type").TreeNodeData) => void;
    append: (data: import("./src/tree.type").TreeNodeData, parentNode: import("./src/model/node").default | import("./src/tree.type").TreeNodeData | import("./src/tree.type").TreeKey) => void;
    insertBefore: (data: import("./src/tree.type").TreeNodeData, refNode: import("./src/tree.type").TreeNodeData | import("./src/tree.type").TreeKey) => void;
    insertAfter: (data: import("./src/tree.type").TreeNodeData, refNode: import("./src/tree.type").TreeNodeData | import("./src/tree.type").TreeKey) => void;
    handleNodeExpand: (nodeData: import("./src/tree.type").TreeNodeData, node: import("./src/model/node").default, instance: import("vue").ComponentInternalInstance) => void;
    updateKeyChildren: (key: import("./src/tree.type").TreeKey, data: import("./src/tree.type").TreeData) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("current-change" | "node-expand" | "check-change" | "node-click" | "node-contextmenu" | "node-collapse" | "check" | "node-drag-start" | "node-drag-end" | "node-drop" | "node-drag-leave" | "node-drag-enter" | "node-drag-over")[], "current-change" | "node-expand" | "check-change" | "node-click" | "node-contextmenu" | "node-collapse" | "check" | "node-drag-start" | "node-drag-end" | "node-drop" | "node-drag-leave" | "node-drag-enter" | "node-drag-over", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    data: {
        type: ArrayConstructor;
        default: () => never[];
    };
    emptyText: {
        type: StringConstructor;
    };
    renderAfterExpand: {
        type: BooleanConstructor;
        default: boolean;
    };
    nodeKey: StringConstructor;
    checkStrictly: BooleanConstructor;
    defaultExpandAll: BooleanConstructor;
    expandOnClickNode: {
        type: BooleanConstructor;
        default: boolean;
    };
    checkOnClickNode: BooleanConstructor;
    checkDescendants: {
        type: BooleanConstructor;
        default: boolean;
    };
    autoExpandParent: {
        type: BooleanConstructor;
        default: boolean;
    };
    defaultCheckedKeys: import("vue").PropType<import("./src/tree.type").TreeKey[]>;
    defaultExpandedKeys: import("vue").PropType<import("./src/tree.type").TreeKey[]>;
    currentNodeKey: import("vue").PropType<string | number>;
    renderContent: FunctionConstructor;
    showCheckbox: {
        type: BooleanConstructor;
        default: boolean;
    };
    draggable: {
        type: BooleanConstructor;
        default: boolean;
    };
    allowDrag: FunctionConstructor;
    allowDrop: FunctionConstructor;
    props: {
        type: import("vue").PropType<import("./src/tree.type").TreeOptionProps>;
        default: () => {
            children: string;
            label: string;
            disabled: string;
        };
    };
    lazy: {
        type: BooleanConstructor;
        default: boolean;
    };
    highlightCurrent: BooleanConstructor;
    load: import("vue").PropType<import("./src/tree.type").LoadFunction>;
    filterNodeMethod: import("vue").PropType<import("./src/tree.type").FilterNodeMethodFunction>;
    accordion: BooleanConstructor;
    indent: {
        type: NumberConstructor;
        default: number;
    };
    icon: import("vue").PropType<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>;
}>> & {
    "onCurrent-change"?: ((...args: any[]) => any) | undefined;
    "onNode-expand"?: ((...args: any[]) => any) | undefined;
    onCheck?: ((...args: any[]) => any) | undefined;
    "onCheck-change"?: ((...args: any[]) => any) | undefined;
    "onNode-click"?: ((...args: any[]) => any) | undefined;
    "onNode-contextmenu"?: ((...args: any[]) => any) | undefined;
    "onNode-collapse"?: ((...args: any[]) => any) | undefined;
    "onNode-drag-start"?: ((...args: any[]) => any) | undefined;
    "onNode-drag-end"?: ((...args: any[]) => any) | undefined;
    "onNode-drop"?: ((...args: any[]) => any) | undefined;
    "onNode-drag-leave"?: ((...args: any[]) => any) | undefined;
    "onNode-drag-enter"?: ((...args: any[]) => any) | undefined;
    "onNode-drag-over"?: ((...args: any[]) => any) | undefined;
}, {
    data: unknown[];
    lazy: boolean;
    props: import("./src/tree.type").TreeOptionProps;
    draggable: boolean;
    checkStrictly: boolean;
    accordion: boolean;
    defaultExpandAll: boolean;
    indent: number;
    renderAfterExpand: boolean;
    showCheckbox: boolean;
    expandOnClickNode: boolean;
    checkOnClickNode: boolean;
    checkDescendants: boolean;
    autoExpandParent: boolean;
    highlightCurrent: boolean;
}>>;
export default _Tree;
export declare const ElTree: SFCWithInstall<import("vue").DefineComponent<{
    data: {
        type: ArrayConstructor;
        default: () => never[];
    };
    emptyText: {
        type: StringConstructor;
    };
    renderAfterExpand: {
        type: BooleanConstructor;
        default: boolean;
    };
    nodeKey: StringConstructor;
    checkStrictly: BooleanConstructor;
    defaultExpandAll: BooleanConstructor;
    expandOnClickNode: {
        type: BooleanConstructor;
        default: boolean;
    };
    checkOnClickNode: BooleanConstructor;
    checkDescendants: {
        type: BooleanConstructor;
        default: boolean;
    };
    autoExpandParent: {
        type: BooleanConstructor;
        default: boolean;
    };
    defaultCheckedKeys: import("vue").PropType<import("./src/tree.type").TreeKey[]>;
    defaultExpandedKeys: import("vue").PropType<import("./src/tree.type").TreeKey[]>;
    currentNodeKey: import("vue").PropType<string | number>;
    renderContent: FunctionConstructor;
    showCheckbox: {
        type: BooleanConstructor;
        default: boolean;
    };
    draggable: {
        type: BooleanConstructor;
        default: boolean;
    };
    allowDrag: FunctionConstructor;
    allowDrop: FunctionConstructor;
    props: {
        type: import("vue").PropType<import("./src/tree.type").TreeOptionProps>;
        default: () => {
            children: string;
            label: string;
            disabled: string;
        };
    };
    lazy: {
        type: BooleanConstructor;
        default: boolean;
    };
    highlightCurrent: BooleanConstructor;
    load: import("vue").PropType<import("./src/tree.type").LoadFunction>;
    filterNodeMethod: import("vue").PropType<import("./src/tree.type").FilterNodeMethodFunction>;
    accordion: BooleanConstructor;
    indent: {
        type: NumberConstructor;
        default: number;
    };
    icon: import("vue").PropType<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>;
}, {
    ns: {
        namespace: import("vue").ComputedRef<string>;
        b: (blockSuffix?: string) => string;
        e: (element?: string | undefined) => string;
        m: (modifier?: string | undefined) => string;
        be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
        em: (element?: string | undefined, modifier?: string | undefined) => string;
        bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
        bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
        is: {
            (name: string, state: boolean | undefined): string;
            (name: string): string;
        };
    };
    store: import("vue").Ref<{
        currentNode: {
            id: number;
            text: string;
            checked: boolean;
            indeterminate: boolean;
            data: {
                [x: string]: any;
            };
            expanded: boolean;
            parent: any;
            visible: boolean;
            isCurrent: boolean;
            store: any;
            isLeafByUser: boolean;
            isLeaf: boolean;
            canFocus: boolean;
            level: number;
            loaded: boolean;
            childNodes: any[];
            loading: boolean;
            initialize: () => void;
            setData: (data: import("./src/tree.type").TreeNodeData) => void;
            readonly label: string;
            readonly key: import("./src/tree.type").TreeKey;
            readonly disabled: boolean;
            readonly nextSibling: any | null;
            readonly previousSibling: any | null;
            contains: (target: import("./src/model/node").default, deep?: boolean) => boolean;
            remove: () => void;
            insertChild: (child?: import("./src/model/node").default | import("./src/tree.type").FakeNode | undefined, index?: number | undefined, batch?: boolean | undefined) => void;
            insertBefore: (child: import("./src/model/node").default | import("./src/tree.type").FakeNode, ref: import("./src/model/node").default) => void;
            insertAfter: (child: import("./src/model/node").default | import("./src/tree.type").FakeNode, ref: import("./src/model/node").default) => void;
            removeChild: (child: import("./src/model/node").default) => void;
            removeChildByData: (data: import("./src/tree.type").TreeNodeData) => void;
            expand: (callback?: (() => void) | undefined, expandParent?: boolean | undefined) => void;
            doCreateChildren: (array: import("./src/tree.type").TreeNodeData[], defaultProps?: import("./src/tree.type").TreeNodeLoadedDefaultProps) => void;
            collapse: () => void;
            shouldLoadData: () => boolean;
            updateLeafState: () => void;
            setChecked: (value?: string | boolean | undefined, deep?: boolean | undefined, recursion?: boolean | undefined, passValue?: boolean | undefined) => void;
            getChildren: (forceInit?: boolean) => import("./src/tree.type").TreeNodeData | import("./src/tree.type").TreeNodeData[];
            updateChildren: () => void;
            loadData: (callback: (node: import("./src/model/node").default) => void, defaultProps?: import("./src/tree.type").TreeNodeLoadedDefaultProps) => void;
        };
        currentNodeKey: import("./src/tree.type").TreeKey;
        nodesMap: {
            [x: string]: {
                id: number;
                text: string;
                checked: boolean;
                indeterminate: boolean;
                data: {
                    [x: string]: any;
                };
                expanded: boolean;
                parent: any;
                visible: boolean;
                isCurrent: boolean;
                store: any;
                isLeafByUser: boolean;
                isLeaf: boolean;
                canFocus: boolean;
                level: number;
                loaded: boolean;
                childNodes: any[];
                loading: boolean;
                initialize: () => void;
                setData: (data: import("./src/tree.type").TreeNodeData) => void;
                readonly label: string;
                readonly key: import("./src/tree.type").TreeKey;
                readonly disabled: boolean;
                readonly nextSibling: any | null;
                readonly previousSibling: any | null;
                contains: (target: import("./src/model/node").default, deep?: boolean) => boolean;
                remove: () => void;
                insertChild: (child?: import("./src/model/node").default | import("./src/tree.type").FakeNode | undefined, index?: number | undefined, batch?: boolean | undefined) => void;
                insertBefore: (child: import("./src/model/node").default | import("./src/tree.type").FakeNode, ref: import("./src/model/node").default) => void;
                insertAfter: (child: import("./src/model/node").default | import("./src/tree.type").FakeNode, ref: import("./src/model/node").default) => void;
                removeChild: (child: import("./src/model/node").default) => void;
                removeChildByData: (data: import("./src/tree.type").TreeNodeData) => void;
                expand: (callback?: (() => void) | undefined, expandParent?: boolean | undefined) => void;
                doCreateChildren: (array: import("./src/tree.type").TreeNodeData[], defaultProps?: import("./src/tree.type").TreeNodeLoadedDefaultProps) => void;
                collapse: () => void;
                shouldLoadData: () => boolean;
                updateLeafState: () => void;
                setChecked: (value?: string | boolean | undefined, deep?: boolean | undefined, recursion?: boolean | undefined, passValue?: boolean | undefined) => void;
                getChildren: (forceInit?: boolean) => import("./src/tree.type").TreeNodeData | import("./src/tree.type").TreeNodeData[];
                updateChildren: () => void;
                loadData: (callback: (node: import("./src/model/node").default) => void, defaultProps?: import("./src/tree.type").TreeNodeLoadedDefaultProps) => void;
            };
        };
        root: {
            id: number;
            text: string;
            checked: boolean;
            indeterminate: boolean;
            data: {
                [x: string]: any;
            };
            expanded: boolean;
            parent: any;
            visible: boolean;
            isCurrent: boolean;
            store: any;
            isLeafByUser: boolean;
            isLeaf: boolean;
            canFocus: boolean;
            level: number;
            loaded: boolean;
            childNodes: any[];
            loading: boolean;
            initialize: () => void;
            setData: (data: import("./src/tree.type").TreeNodeData) => void;
            readonly label: string;
            readonly key: import("./src/tree.type").TreeKey;
            readonly disabled: boolean;
            readonly nextSibling: any | null;
            readonly previousSibling: any | null;
            contains: (target: import("./src/model/node").default, deep?: boolean) => boolean;
            remove: () => void;
            insertChild: (child?: import("./src/model/node").default | import("./src/tree.type").FakeNode | undefined, index?: number | undefined, batch?: boolean | undefined) => void;
            insertBefore: (child: import("./src/model/node").default | import("./src/tree.type").FakeNode, ref: import("./src/model/node").default) => void;
            insertAfter: (child: import("./src/model/node").default | import("./src/tree.type").FakeNode, ref: import("./src/model/node").default) => void;
            removeChild: (child: import("./src/model/node").default) => void;
            removeChildByData: (data: import("./src/tree.type").TreeNodeData) => void;
            expand: (callback?: (() => void) | undefined, expandParent?: boolean | undefined) => void;
            doCreateChildren: (array: import("./src/tree.type").TreeNodeData[], defaultProps?: import("./src/tree.type").TreeNodeLoadedDefaultProps) => void;
            collapse: () => void;
            shouldLoadData: () => boolean;
            updateLeafState: () => void;
            setChecked: (value?: string | boolean | undefined, deep?: boolean | undefined, recursion?: boolean | undefined, passValue?: boolean | undefined) => void;
            getChildren: (forceInit?: boolean) => import("./src/tree.type").TreeNodeData | import("./src/tree.type").TreeNodeData[];
            updateChildren: () => void;
            loadData: (callback: (node: import("./src/model/node").default) => void, defaultProps?: import("./src/tree.type").TreeNodeLoadedDefaultProps) => void;
        };
        data: {
            [x: string]: any;
        }[];
        lazy: boolean;
        load: import("./src/tree.type").LoadFunction;
        filterNodeMethod: import("./src/tree.type").FilterNodeMethodFunction;
        key: import("./src/tree.type").TreeKey;
        defaultCheckedKeys: import("./src/tree.type").TreeKey[];
        checkStrictly: boolean;
        defaultExpandedKeys: import("./src/tree.type").TreeKey[];
        autoExpandParent: boolean;
        defaultExpandAll: boolean;
        checkDescendants: boolean;
        props: {
            children?: string | undefined;
            label?: string | ((data: import("./src/tree.type").TreeNodeData, node: import("./src/model/node").default) => string) | undefined;
            disabled?: string | ((data: import("./src/tree.type").TreeNodeData, node: import("./src/model/node").default) => string) | undefined;
            isLeaf?: string | ((data: import("./src/tree.type").TreeNodeData, node: import("./src/model/node").default) => boolean) | undefined;
            class?: ((data: import("./src/tree.type").TreeNodeData, node: import("./src/model/node").default) => string | {
                [key: string]: boolean;
            }) | undefined;
        };
        initialize: () => void;
        filter: (value: any) => void;
        setData: (newVal: import("./src/tree.type").TreeData) => void;
        getNode: (data: import("./src/tree.type").TreeNodeData | import("./src/tree.type").TreeKey) => import("./src/model/node").default;
        insertBefore: (data: import("./src/tree.type").TreeNodeData, refData: import("./src/tree.type").TreeNodeData | import("./src/tree.type").TreeKey) => void;
        insertAfter: (data: import("./src/tree.type").TreeNodeData, refData: import("./src/tree.type").TreeNodeData | import("./src/tree.type").TreeKey) => void;
        remove: (data: import("./src/model/node").default | import("./src/tree.type").TreeNodeData) => void;
        append: (data: import("./src/tree.type").TreeNodeData, parentData: import("./src/model/node").default | import("./src/tree.type").TreeNodeData | import("./src/tree.type").TreeKey) => void;
        _initDefaultCheckedNodes: () => void;
        _initDefaultCheckedNode: (node: import("./src/model/node").default) => void;
        setDefaultCheckedKey: (newVal: import("./src/tree.type").TreeKey[]) => void;
        registerNode: (node: import("./src/model/node").default) => void;
        deregisterNode: (node: import("./src/model/node").default) => void;
        getCheckedNodes: (leafOnly?: boolean, includeHalfChecked?: boolean) => import("./src/tree.type").TreeNodeData[];
        getCheckedKeys: (leafOnly?: boolean) => import("./src/tree.type").TreeKey[];
        getHalfCheckedNodes: () => import("./src/tree.type").TreeNodeData[];
        getHalfCheckedKeys: () => import("./src/tree.type").TreeKey[];
        _getAllNodes: () => import("./src/model/node").default[];
        updateChildren: (key: import("./src/tree.type").TreeKey, data: import("./src/tree.type").TreeData) => void;
        _setCheckedKeys: (key: import("./src/tree.type").TreeKey, leafOnly: boolean | undefined, checkedKeys: {
            [key: string]: boolean;
        }) => void;
        setCheckedNodes: (array: import("./src/model/node").default[], leafOnly?: boolean) => void;
        setCheckedKeys: (keys: import("./src/tree.type").TreeKey[], leafOnly?: boolean) => void;
        setDefaultExpandedKeys: (keys: import("./src/tree.type").TreeKey[]) => void;
        setChecked: (data: import("./src/tree.type").TreeNodeData | import("./src/tree.type").TreeKey, checked: boolean, deep: boolean) => void;
        getCurrentNode: () => import("./src/model/node").default;
        setCurrentNode: (currentNode: import("./src/model/node").default) => void;
        setUserCurrentNode: (node: import("./src/model/node").default, shouldAutoExpandParent?: boolean) => void;
        setCurrentNodeKey: (key: import("./src/tree.type").TreeKey, shouldAutoExpandParent?: boolean) => void;
    }>;
    root: import("vue").Ref<{
        id: number;
        text: string;
        checked: boolean;
        indeterminate: boolean;
        data: {
            [x: string]: any;
        };
        expanded: boolean;
        parent: any;
        visible: boolean;
        isCurrent: boolean;
        store: any;
        isLeafByUser: boolean;
        isLeaf: boolean;
        canFocus: boolean;
        level: number;
        loaded: boolean;
        childNodes: any[];
        loading: boolean;
        initialize: () => void;
        setData: (data: import("./src/tree.type").TreeNodeData) => void;
        readonly label: string;
        readonly key: import("./src/tree.type").TreeKey;
        readonly disabled: boolean;
        readonly nextSibling: any | null;
        readonly previousSibling: any | null;
        contains: (target: import("./src/model/node").default, deep?: boolean) => boolean;
        remove: () => void;
        insertChild: (child?: import("./src/model/node").default | import("./src/tree.type").FakeNode | undefined, index?: number | undefined, batch?: boolean | undefined) => void;
        insertBefore: (child: import("./src/model/node").default | import("./src/tree.type").FakeNode, ref: import("./src/model/node").default) => void;
        insertAfter: (child: import("./src/model/node").default | import("./src/tree.type").FakeNode, ref: import("./src/model/node").default) => void;
        removeChild: (child: import("./src/model/node").default) => void;
        removeChildByData: (data: import("./src/tree.type").TreeNodeData) => void;
        expand: (callback?: (() => void) | undefined, expandParent?: boolean | undefined) => void;
        doCreateChildren: (array: import("./src/tree.type").TreeNodeData[], defaultProps?: import("./src/tree.type").TreeNodeLoadedDefaultProps) => void;
        collapse: () => void;
        shouldLoadData: () => boolean;
        updateLeafState: () => void;
        setChecked: (value?: string | boolean | undefined, deep?: boolean | undefined, recursion?: boolean | undefined, passValue?: boolean | undefined) => void;
        getChildren: (forceInit?: boolean) => import("./src/tree.type").TreeNodeData | import("./src/tree.type").TreeNodeData[];
        updateChildren: () => void;
        loadData: (callback: (node: import("./src/model/node").default) => void, defaultProps?: import("./src/tree.type").TreeNodeLoadedDefaultProps) => void;
    }>;
    currentNode: import("vue").Ref<{
        id: number;
        text: string;
        checked: boolean;
        indeterminate: boolean;
        data: {
            [x: string]: any;
        };
        expanded: boolean;
        parent: any;
        visible: boolean;
        isCurrent: boolean;
        store: any;
        isLeafByUser: boolean;
        isLeaf: boolean;
        canFocus: boolean;
        level: number;
        loaded: boolean;
        childNodes: any[];
        loading: boolean;
        initialize: () => void;
        setData: (data: import("./src/tree.type").TreeNodeData) => void;
        readonly label: string;
        readonly key: import("./src/tree.type").TreeKey;
        readonly disabled: boolean;
        readonly nextSibling: any | null;
        readonly previousSibling: any | null;
        contains: (target: import("./src/model/node").default, deep?: boolean) => boolean;
        remove: () => void;
        insertChild: (child?: import("./src/model/node").default | import("./src/tree.type").FakeNode | undefined, index?: number | undefined, batch?: boolean | undefined) => void;
        insertBefore: (child: import("./src/model/node").default | import("./src/tree.type").FakeNode, ref: import("./src/model/node").default) => void;
        insertAfter: (child: import("./src/model/node").default | import("./src/tree.type").FakeNode, ref: import("./src/model/node").default) => void;
        removeChild: (child: import("./src/model/node").default) => void;
        removeChildByData: (data: import("./src/tree.type").TreeNodeData) => void;
        expand: (callback?: (() => void) | undefined, expandParent?: boolean | undefined) => void;
        doCreateChildren: (array: import("./src/tree.type").TreeNodeData[], defaultProps?: import("./src/tree.type").TreeNodeLoadedDefaultProps) => void;
        collapse: () => void;
        shouldLoadData: () => boolean;
        updateLeafState: () => void;
        setChecked: (value?: string | boolean | undefined, deep?: boolean | undefined, recursion?: boolean | undefined, passValue?: boolean | undefined) => void;
        getChildren: (forceInit?: boolean) => import("./src/tree.type").TreeNodeData | import("./src/tree.type").TreeNodeData[];
        updateChildren: () => void;
        loadData: (callback: (node: import("./src/model/node").default) => void, defaultProps?: import("./src/tree.type").TreeNodeLoadedDefaultProps) => void;
    }>;
    dragState: import("vue").Ref<{
        showDropIndicator: boolean;
        draggingNode: null;
        dropNode: null;
        allowDrop: boolean;
        dropType: null;
    }>;
    el$: import("vue").Ref<import("element-plus/es/utils").Nullable<HTMLElement>>;
    dropIndicator$: import("vue").Ref<import("element-plus/es/utils").Nullable<HTMLElement>>;
    isEmpty: import("vue").ComputedRef<boolean>;
    filter: (value: any) => void;
    getNodeKey: (node: import("./src/model/node").default) => any;
    getNodePath: (data: import("./src/tree.type").TreeNodeData | import("./src/tree.type").TreeKey) => import("./src/tree.type").TreeNodeData[];
    getCheckedNodes: (leafOnly?: boolean | undefined, includeHalfChecked?: boolean | undefined) => import("./src/tree.type").TreeNodeData[];
    getCheckedKeys: (leafOnly?: boolean | undefined) => import("./src/tree.type").TreeKey[];
    getCurrentNode: () => import("./src/tree.type").TreeNodeData;
    getCurrentKey: () => any;
    setCheckedNodes: (nodes: import("./src/model/node").default[], leafOnly?: boolean | undefined) => void;
    setCheckedKeys: (keys: any, leafOnly?: boolean | undefined) => void;
    setChecked: (data: import("./src/tree.type").TreeNodeData | import("./src/tree.type").TreeKey, checked: boolean, deep: boolean) => void;
    getHalfCheckedNodes: () => import("./src/tree.type").TreeNodeData[];
    getHalfCheckedKeys: () => import("./src/tree.type").TreeKey[];
    setCurrentNode: (node: import("./src/model/node").default, shouldAutoExpandParent?: boolean) => void;
    setCurrentKey: (key: import("./src/tree.type").TreeKey, shouldAutoExpandParent?: boolean) => void;
    t: import("../..").Translator;
    getNode: (data: import("./src/tree.type").TreeNodeData | import("./src/tree.type").TreeKey) => import("./src/model/node").default;
    remove: (data: import("./src/model/node").default | import("./src/tree.type").TreeNodeData) => void;
    append: (data: import("./src/tree.type").TreeNodeData, parentNode: import("./src/model/node").default | import("./src/tree.type").TreeNodeData | import("./src/tree.type").TreeKey) => void;
    insertBefore: (data: import("./src/tree.type").TreeNodeData, refNode: import("./src/tree.type").TreeNodeData | import("./src/tree.type").TreeKey) => void;
    insertAfter: (data: import("./src/tree.type").TreeNodeData, refNode: import("./src/tree.type").TreeNodeData | import("./src/tree.type").TreeKey) => void;
    handleNodeExpand: (nodeData: import("./src/tree.type").TreeNodeData, node: import("./src/model/node").default, instance: import("vue").ComponentInternalInstance) => void;
    updateKeyChildren: (key: import("./src/tree.type").TreeKey, data: import("./src/tree.type").TreeData) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("current-change" | "node-expand" | "check-change" | "node-click" | "node-contextmenu" | "node-collapse" | "check" | "node-drag-start" | "node-drag-end" | "node-drop" | "node-drag-leave" | "node-drag-enter" | "node-drag-over")[], "current-change" | "node-expand" | "check-change" | "node-click" | "node-contextmenu" | "node-collapse" | "check" | "node-drag-start" | "node-drag-end" | "node-drop" | "node-drag-leave" | "node-drag-enter" | "node-drag-over", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    data: {
        type: ArrayConstructor;
        default: () => never[];
    };
    emptyText: {
        type: StringConstructor;
    };
    renderAfterExpand: {
        type: BooleanConstructor;
        default: boolean;
    };
    nodeKey: StringConstructor;
    checkStrictly: BooleanConstructor;
    defaultExpandAll: BooleanConstructor;
    expandOnClickNode: {
        type: BooleanConstructor;
        default: boolean;
    };
    checkOnClickNode: BooleanConstructor;
    checkDescendants: {
        type: BooleanConstructor;
        default: boolean;
    };
    autoExpandParent: {
        type: BooleanConstructor;
        default: boolean;
    };
    defaultCheckedKeys: import("vue").PropType<import("./src/tree.type").TreeKey[]>;
    defaultExpandedKeys: import("vue").PropType<import("./src/tree.type").TreeKey[]>;
    currentNodeKey: import("vue").PropType<string | number>;
    renderContent: FunctionConstructor;
    showCheckbox: {
        type: BooleanConstructor;
        default: boolean;
    };
    draggable: {
        type: BooleanConstructor;
        default: boolean;
    };
    allowDrag: FunctionConstructor;
    allowDrop: FunctionConstructor;
    props: {
        type: import("vue").PropType<import("./src/tree.type").TreeOptionProps>;
        default: () => {
            children: string;
            label: string;
            disabled: string;
        };
    };
    lazy: {
        type: BooleanConstructor;
        default: boolean;
    };
    highlightCurrent: BooleanConstructor;
    load: import("vue").PropType<import("./src/tree.type").LoadFunction>;
    filterNodeMethod: import("vue").PropType<import("./src/tree.type").FilterNodeMethodFunction>;
    accordion: BooleanConstructor;
    indent: {
        type: NumberConstructor;
        default: number;
    };
    icon: import("vue").PropType<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>;
}>> & {
    "onCurrent-change"?: ((...args: any[]) => any) | undefined;
    "onNode-expand"?: ((...args: any[]) => any) | undefined;
    onCheck?: ((...args: any[]) => any) | undefined;
    "onCheck-change"?: ((...args: any[]) => any) | undefined;
    "onNode-click"?: ((...args: any[]) => any) | undefined;
    "onNode-contextmenu"?: ((...args: any[]) => any) | undefined;
    "onNode-collapse"?: ((...args: any[]) => any) | undefined;
    "onNode-drag-start"?: ((...args: any[]) => any) | undefined;
    "onNode-drag-end"?: ((...args: any[]) => any) | undefined;
    "onNode-drop"?: ((...args: any[]) => any) | undefined;
    "onNode-drag-leave"?: ((...args: any[]) => any) | undefined;
    "onNode-drag-enter"?: ((...args: any[]) => any) | undefined;
    "onNode-drag-over"?: ((...args: any[]) => any) | undefined;
}, {
    data: unknown[];
    lazy: boolean;
    props: import("./src/tree.type").TreeOptionProps;
    draggable: boolean;
    checkStrictly: boolean;
    accordion: boolean;
    defaultExpandAll: boolean;
    indent: number;
    renderAfterExpand: boolean;
    showCheckbox: boolean;
    expandOnClickNode: boolean;
    checkOnClickNode: boolean;
    checkDescendants: boolean;
    autoExpandParent: boolean;
    highlightCurrent: boolean;
}>>;
