import type { UploadFile, UploadRawFile } from './upload';
declare const _default: import("vue").DefineComponent<{
    readonly fileList: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("./upload").UploadUserFile[]>, () => [], unknown, unknown, unknown>;
    readonly beforeUpload: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>>, () => void, unknown, unknown, unknown>;
    readonly onRemove: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(file: UploadFile | UploadRawFile, rawFile?: UploadRawFile | undefined) => void>, () => void, unknown, unknown, unknown>;
    readonly onStart: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(rawFile: UploadRawFile) => void>, () => void, unknown, unknown, unknown>;
    readonly onSuccess: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(response: any, rawFile: UploadRawFile) => unknown>, () => void, unknown, unknown, unknown>;
    readonly onProgress: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(evt: import("./upload").UploadProgressEvent, rawFile: UploadRawFile) => void>, () => void, unknown, unknown, unknown>;
    readonly onError: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(err: import("./ajax").UploadAjaxError, rawFile: UploadRawFile) => void>, () => void, unknown, unknown, unknown>;
    readonly onExceed: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(files: File[], uploadFiles: import("./upload").UploadUserFile[]) => void>, () => void, unknown, unknown, unknown>;
    readonly action: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "#", unknown, unknown, unknown>;
    readonly headers: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<Record<string, any> | Headers>, unknown, unknown, unknown, unknown>;
    readonly method: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "post", unknown, unknown, unknown>;
    readonly data: import("element-plus/es/utils").BuildPropReturn<ObjectConstructor, () => import("element-plus/es/utils").Mutable<{}>, unknown, unknown, unknown>;
    readonly multiple: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    readonly name: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "file", unknown, unknown, unknown>;
    readonly drag: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    readonly withCredentials: BooleanConstructor;
    readonly showFileList: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
    readonly accept: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
    readonly type: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "select", unknown, unknown, unknown>;
    readonly autoUpload: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
    readonly listType: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "text", unknown, "text" | "picture" | "picture-card", unknown>;
    readonly httpRequest: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("./upload").UploadRequestHandler>, import("./upload").UploadRequestHandler, unknown, unknown, unknown>;
    readonly disabled: BooleanConstructor;
    readonly limit: NumberConstructor;
}, {
    props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
        readonly fileList: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("./upload").UploadUserFile[]>, () => [], unknown, unknown, unknown>;
        readonly beforeUpload: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>>, () => void, unknown, unknown, unknown>;
        readonly onRemove: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(file: UploadFile | UploadRawFile, rawFile?: UploadRawFile | undefined) => void>, () => void, unknown, unknown, unknown>;
        readonly onStart: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(rawFile: UploadRawFile) => void>, () => void, unknown, unknown, unknown>;
        readonly onSuccess: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(response: any, rawFile: UploadRawFile) => unknown>, () => void, unknown, unknown, unknown>;
        readonly onProgress: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(evt: import("./upload").UploadProgressEvent, rawFile: UploadRawFile) => void>, () => void, unknown, unknown, unknown>;
        readonly onError: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(err: import("./ajax").UploadAjaxError, rawFile: UploadRawFile) => void>, () => void, unknown, unknown, unknown>;
        readonly onExceed: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(files: File[], uploadFiles: import("./upload").UploadUserFile[]) => void>, () => void, unknown, unknown, unknown>;
        readonly action: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "#", unknown, unknown, unknown>;
        readonly headers: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<Record<string, any> | Headers>, unknown, unknown, unknown, unknown>;
        readonly method: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "post", unknown, unknown, unknown>;
        readonly data: import("element-plus/es/utils").BuildPropReturn<ObjectConstructor, () => import("element-plus/es/utils").Mutable<{}>, unknown, unknown, unknown>;
        readonly multiple: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
        readonly name: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "file", unknown, unknown, unknown>;
        readonly drag: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
        readonly withCredentials: BooleanConstructor;
        readonly showFileList: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
        readonly accept: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
        readonly type: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "select", unknown, unknown, unknown>;
        readonly autoUpload: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
        readonly listType: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "text", unknown, "text" | "picture" | "picture-card", unknown>;
        readonly httpRequest: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("./upload").UploadRequestHandler>, import("./upload").UploadRequestHandler, unknown, unknown, unknown>;
        readonly disabled: BooleanConstructor;
        readonly limit: NumberConstructor;
    }>> & {
        [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
    }>>;
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
    requests: import("vue").ShallowRef<Record<string, XMLHttpRequest | Promise<unknown>>>;
    inputRef: import("vue").ShallowRef<HTMLInputElement | undefined>;
    uploadFiles: (files: File[]) => void;
    upload: (rawFile: UploadRawFile) => Promise<void>;
    doUpload: (rawFile: UploadRawFile) => void;
    handleChange: (e: Event) => void;
    handleClick: () => void;
    handleKeydown: () => void;
    abort: (file?: UploadFile | undefined) => void;
    UploadDragger: import("vue").DefineComponent<{
        readonly disabled: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    }, {
        COMPONENT_NAME: string;
        props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
            readonly disabled: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
        }>> & {
            onFile?: ((file: File[]) => any) | undefined;
        }>>;
        emit: (event: "file", file: File[]) => void;
        uploaderContext: import("../../..").UploadContext;
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
        dragover: import("vue").Ref<boolean>;
        onDrop: (e: DragEvent) => void;
        onDragover: () => void;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        file: (file: File[]) => boolean;
    }, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        readonly disabled: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    }>> & {
        onFile?: ((file: File[]) => any) | undefined;
    }, {
        disabled: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly fileList: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("./upload").UploadUserFile[]>, () => [], unknown, unknown, unknown>;
    readonly beforeUpload: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>>, () => void, unknown, unknown, unknown>;
    readonly onRemove: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(file: UploadFile | UploadRawFile, rawFile?: UploadRawFile | undefined) => void>, () => void, unknown, unknown, unknown>;
    readonly onStart: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(rawFile: UploadRawFile) => void>, () => void, unknown, unknown, unknown>;
    readonly onSuccess: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(response: any, rawFile: UploadRawFile) => unknown>, () => void, unknown, unknown, unknown>;
    readonly onProgress: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(evt: import("./upload").UploadProgressEvent, rawFile: UploadRawFile) => void>, () => void, unknown, unknown, unknown>;
    readonly onError: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(err: import("./ajax").UploadAjaxError, rawFile: UploadRawFile) => void>, () => void, unknown, unknown, unknown>;
    readonly onExceed: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(files: File[], uploadFiles: import("./upload").UploadUserFile[]) => void>, () => void, unknown, unknown, unknown>;
    readonly action: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "#", unknown, unknown, unknown>;
    readonly headers: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<Record<string, any> | Headers>, unknown, unknown, unknown, unknown>;
    readonly method: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "post", unknown, unknown, unknown>;
    readonly data: import("element-plus/es/utils").BuildPropReturn<ObjectConstructor, () => import("element-plus/es/utils").Mutable<{}>, unknown, unknown, unknown>;
    readonly multiple: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    readonly name: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "file", unknown, unknown, unknown>;
    readonly drag: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    readonly withCredentials: BooleanConstructor;
    readonly showFileList: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
    readonly accept: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
    readonly type: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "select", unknown, unknown, unknown>;
    readonly autoUpload: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
    readonly listType: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "text", unknown, "text" | "picture" | "picture-card", unknown>;
    readonly httpRequest: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("./upload").UploadRequestHandler>, import("./upload").UploadRequestHandler, unknown, unknown, unknown>;
    readonly disabled: BooleanConstructor;
    readonly limit: NumberConstructor;
}>>, {
    type: string;
    disabled: boolean;
    name: string;
    data: Record<string, any>;
    drag: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
    multiple: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
    onError: (err: import("./ajax").UploadAjaxError, rawFile: UploadRawFile) => void;
    onProgress: (evt: import("./upload").UploadProgressEvent, rawFile: UploadRawFile) => void;
    action: string;
    headers: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<Record<string, any> | Headers>, unknown, unknown>;
    method: string;
    showFileList: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
    accept: string;
    fileList: import("./upload").UploadUserFile[];
    autoUpload: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
    listType: import("element-plus/es/utils").BuildPropType<StringConstructor, "text" | "picture" | "picture-card", unknown>;
    httpRequest: import("./upload").UploadRequestHandler;
    withCredentials: boolean;
    beforeUpload: (rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>;
    onRemove: (file: UploadFile | UploadRawFile, rawFile?: UploadRawFile | undefined) => void;
    onSuccess: (response: any, rawFile: UploadRawFile) => unknown;
    onExceed: (files: File[], uploadFiles: import("./upload").UploadUserFile[]) => void;
    onStart: (rawFile: UploadRawFile) => void;
}>;
export default _default;
