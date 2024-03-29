/// <reference types="node" />
export declare const ElUpload: import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{
    readonly beforeUpload: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(rawFile: import("./src/upload").UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>>, () => void, unknown, unknown, unknown>;
    readonly beforeRemove: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(uploadFile: import("./src/upload").UploadFile, uploadFiles: import("./src/upload").UploadFiles) => import("element-plus/es/utils").Awaitable<boolean>>, unknown, unknown, unknown, unknown>;
    readonly onRemove: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(uploadFile: import("./src/upload").UploadFile, uploadFiles: import("./src/upload").UploadFiles) => void>, () => void, unknown, unknown, unknown>;
    readonly onChange: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(uploadFile: import("./src/upload").UploadFile, uploadFiles: import("./src/upload").UploadFiles) => void>, () => void, unknown, unknown, unknown>;
    readonly onPreview: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(uploadFile: import("./src/upload").UploadFile) => void>, () => void, unknown, unknown, unknown>;
    readonly onSuccess: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(response: any, uploadFile: import("./src/upload").UploadFile, uploadFiles: import("./src/upload").UploadFiles) => void>, () => void, unknown, unknown, unknown>;
    readonly onProgress: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(evt: import("./src/upload").UploadProgressEvent, uploadFile: import("./src/upload").UploadFile, uploadFiles: import("./src/upload").UploadFiles) => void>, () => void, unknown, unknown, unknown>;
    readonly onError: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(error: Error, uploadFile: import("./src/upload").UploadFile, uploadFiles: import("./src/upload").UploadFiles) => void>, () => void, unknown, unknown, unknown>;
    readonly onExceed: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(files: File[], uploadFiles: import("./src/upload").UploadUserFile[]) => void>, () => void, unknown, unknown, unknown>;
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
    readonly fileList: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("./src/upload").UploadUserFile[]>, () => [], unknown, unknown, unknown>;
    readonly autoUpload: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
    readonly listType: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "text", unknown, "text" | "picture" | "picture-card", unknown>;
    readonly httpRequest: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("./src/upload").UploadRequestHandler>, import("./src/upload").UploadRequestHandler, unknown, unknown, unknown>;
    readonly disabled: BooleanConstructor;
    readonly limit: NumberConstructor;
}, {
    props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
        readonly beforeUpload: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(rawFile: import("./src/upload").UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>>, () => void, unknown, unknown, unknown>;
        readonly beforeRemove: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(uploadFile: import("./src/upload").UploadFile, uploadFiles: import("./src/upload").UploadFiles) => import("element-plus/es/utils").Awaitable<boolean>>, unknown, unknown, unknown, unknown>;
        readonly onRemove: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(uploadFile: import("./src/upload").UploadFile, uploadFiles: import("./src/upload").UploadFiles) => void>, () => void, unknown, unknown, unknown>;
        readonly onChange: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(uploadFile: import("./src/upload").UploadFile, uploadFiles: import("./src/upload").UploadFiles) => void>, () => void, unknown, unknown, unknown>;
        readonly onPreview: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(uploadFile: import("./src/upload").UploadFile) => void>, () => void, unknown, unknown, unknown>;
        readonly onSuccess: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(response: any, uploadFile: import("./src/upload").UploadFile, uploadFiles: import("./src/upload").UploadFiles) => void>, () => void, unknown, unknown, unknown>;
        readonly onProgress: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(evt: import("./src/upload").UploadProgressEvent, uploadFile: import("./src/upload").UploadFile, uploadFiles: import("./src/upload").UploadFiles) => void>, () => void, unknown, unknown, unknown>;
        readonly onError: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(error: Error, uploadFile: import("./src/upload").UploadFile, uploadFiles: import("./src/upload").UploadFiles) => void>, () => void, unknown, unknown, unknown>;
        readonly onExceed: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(files: File[], uploadFiles: import("./src/upload").UploadUserFile[]) => void>, () => void, unknown, unknown, unknown>;
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
        readonly fileList: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("./src/upload").UploadUserFile[]>, () => [], unknown, unknown, unknown>;
        readonly autoUpload: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
        readonly listType: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "text", unknown, "text" | "picture" | "picture-card", unknown>;
        readonly httpRequest: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("./src/upload").UploadRequestHandler>, import("./src/upload").UploadRequestHandler, unknown, unknown, unknown>;
        readonly disabled: BooleanConstructor;
        readonly limit: NumberConstructor;
    }>> & {
        [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
    }>>;
    slots: Readonly<{
        [name: string]: import("vue").Slot | undefined;
    }>;
    disabled: import("vue").ComputedRef<boolean>;
    uploadRef: import("vue").ShallowRef<({
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            type: string;
            disabled: boolean;
            name: string;
            data: Record<string, any>;
            drag: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
            multiple: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
            onError: (err: import("./src/ajax").UploadAjaxError, rawFile: import("./src/upload").UploadRawFile) => void;
            onProgress: (evt: import("./src/upload").UploadProgressEvent, rawFile: import("./src/upload").UploadRawFile) => void;
            action: string;
            headers: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<Record<string, any> | Headers>, unknown, unknown>;
            method: string;
            showFileList: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
            accept: string;
            fileList: import("./src/upload").UploadUserFile[];
            autoUpload: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
            listType: import("element-plus/es/utils").BuildPropType<StringConstructor, "text" | "picture" | "picture-card", unknown>;
            httpRequest: import("./src/upload").UploadRequestHandler;
            withCredentials: boolean;
            beforeUpload: (rawFile: import("./src/upload").UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>;
            onRemove: (file: import("./src/upload").UploadFile | import("./src/upload").UploadRawFile, rawFile?: import("./src/upload").UploadRawFile | undefined) => void;
            onSuccess: (response: any, rawFile: import("./src/upload").UploadRawFile) => unknown;
            onExceed: (files: File[], uploadFiles: import("./src/upload").UploadUserFile[]) => void;
            onStart: (rawFile: import("./src/upload").UploadRawFile) => void;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            readonly fileList: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("./src/upload").UploadUserFile[]>, () => [], unknown, unknown, unknown>;
            readonly beforeUpload: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(rawFile: import("./src/upload").UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>>, () => void, unknown, unknown, unknown>;
            readonly onRemove: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(file: import("./src/upload").UploadFile | import("./src/upload").UploadRawFile, rawFile?: import("./src/upload").UploadRawFile | undefined) => void>, () => void, unknown, unknown, unknown>;
            readonly onStart: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(rawFile: import("./src/upload").UploadRawFile) => void>, () => void, unknown, unknown, unknown>;
            readonly onSuccess: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(response: any, rawFile: import("./src/upload").UploadRawFile) => unknown>, () => void, unknown, unknown, unknown>;
            readonly onProgress: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(evt: import("./src/upload").UploadProgressEvent, rawFile: import("./src/upload").UploadRawFile) => void>, () => void, unknown, unknown, unknown>;
            readonly onError: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(err: import("./src/ajax").UploadAjaxError, rawFile: import("./src/upload").UploadRawFile) => void>, () => void, unknown, unknown, unknown>;
            readonly onExceed: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(files: File[], uploadFiles: import("./src/upload").UploadUserFile[]) => void>, () => void, unknown, unknown, unknown>;
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
            readonly httpRequest: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("./src/upload").UploadRequestHandler>, import("./src/upload").UploadRequestHandler, unknown, unknown, unknown>;
            readonly disabled: BooleanConstructor;
            readonly limit: NumberConstructor;
        }>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "type" | "disabled" | "name" | "data" | "drag" | "multiple" | "onError" | "onProgress" | "action" | "headers" | "method" | "showFileList" | "accept" | "fileList" | "autoUpload" | "listType" | "httpRequest" | "withCredentials" | "beforeUpload" | "onRemove" | "onSuccess" | "onExceed" | "onStart">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import("vue").Slot | undefined;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            readonly fileList: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("./src/upload").UploadUserFile[]>, () => [], unknown, unknown, unknown>;
            readonly beforeUpload: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(rawFile: import("./src/upload").UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>>, () => void, unknown, unknown, unknown>;
            readonly onRemove: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(file: import("./src/upload").UploadFile | import("./src/upload").UploadRawFile, rawFile?: import("./src/upload").UploadRawFile | undefined) => void>, () => void, unknown, unknown, unknown>;
            readonly onStart: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(rawFile: import("./src/upload").UploadRawFile) => void>, () => void, unknown, unknown, unknown>;
            readonly onSuccess: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(response: any, rawFile: import("./src/upload").UploadRawFile) => unknown>, () => void, unknown, unknown, unknown>;
            readonly onProgress: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(evt: import("./src/upload").UploadProgressEvent, rawFile: import("./src/upload").UploadRawFile) => void>, () => void, unknown, unknown, unknown>;
            readonly onError: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(err: import("./src/ajax").UploadAjaxError, rawFile: import("./src/upload").UploadRawFile) => void>, () => void, unknown, unknown, unknown>;
            readonly onExceed: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(files: File[], uploadFiles: import("./src/upload").UploadUserFile[]) => void>, () => void, unknown, unknown, unknown>;
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
            readonly httpRequest: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("./src/upload").UploadRequestHandler>, import("./src/upload").UploadRequestHandler, unknown, unknown, unknown>;
            readonly disabled: BooleanConstructor;
            readonly limit: NumberConstructor;
        }>>, {
            props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                readonly fileList: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("./src/upload").UploadUserFile[]>, () => [], unknown, unknown, unknown>;
                readonly beforeUpload: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(rawFile: import("./src/upload").UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>>, () => void, unknown, unknown, unknown>;
                readonly onRemove: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(file: import("./src/upload").UploadFile | import("./src/upload").UploadRawFile, rawFile?: import("./src/upload").UploadRawFile | undefined) => void>, () => void, unknown, unknown, unknown>;
                readonly onStart: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(rawFile: import("./src/upload").UploadRawFile) => void>, () => void, unknown, unknown, unknown>;
                readonly onSuccess: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(response: any, rawFile: import("./src/upload").UploadRawFile) => unknown>, () => void, unknown, unknown, unknown>;
                readonly onProgress: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(evt: import("./src/upload").UploadProgressEvent, rawFile: import("./src/upload").UploadRawFile) => void>, () => void, unknown, unknown, unknown>;
                readonly onError: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(err: import("./src/ajax").UploadAjaxError, rawFile: import("./src/upload").UploadRawFile) => void>, () => void, unknown, unknown, unknown>;
                readonly onExceed: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(files: File[], uploadFiles: import("./src/upload").UploadUserFile[]) => void>, () => void, unknown, unknown, unknown>;
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
                readonly httpRequest: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("./src/upload").UploadRequestHandler>, import("./src/upload").UploadRequestHandler, unknown, unknown, unknown>;
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
            upload: (rawFile: import("./src/upload").UploadRawFile) => Promise<void>;
            doUpload: (rawFile: import("./src/upload").UploadRawFile) => void;
            handleChange: (e: Event) => void;
            handleClick: () => void;
            handleKeydown: () => void;
            abort: (file?: import("./src/upload").UploadFile | undefined) => void;
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
                uploaderContext: import("../..").UploadContext;
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
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
            type: string;
            disabled: boolean;
            name: string;
            data: Record<string, any>;
            drag: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
            multiple: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
            onError: (err: import("./src/ajax").UploadAjaxError, rawFile: import("./src/upload").UploadRawFile) => void;
            onProgress: (evt: import("./src/upload").UploadProgressEvent, rawFile: import("./src/upload").UploadRawFile) => void;
            action: string;
            headers: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<Record<string, any> | Headers>, unknown, unknown>;
            method: string;
            showFileList: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
            accept: string;
            fileList: import("./src/upload").UploadUserFile[];
            autoUpload: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
            listType: import("element-plus/es/utils").BuildPropType<StringConstructor, "text" | "picture" | "picture-card", unknown>;
            httpRequest: import("./src/upload").UploadRequestHandler;
            withCredentials: boolean;
            beforeUpload: (rawFile: import("./src/upload").UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>;
            onRemove: (file: import("./src/upload").UploadFile | import("./src/upload").UploadRawFile, rawFile?: import("./src/upload").UploadRawFile | undefined) => void;
            onSuccess: (response: any, rawFile: import("./src/upload").UploadRawFile) => unknown;
            onExceed: (files: File[], uploadFiles: import("./src/upload").UploadUserFile[]) => void;
            onStart: (rawFile: import("./src/upload").UploadRawFile) => void;
        }> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
    } & Readonly<import("vue").ExtractPropTypes<{
        readonly fileList: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("./src/upload").UploadUserFile[]>, () => [], unknown, unknown, unknown>;
        readonly beforeUpload: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(rawFile: import("./src/upload").UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>>, () => void, unknown, unknown, unknown>;
        readonly onRemove: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(file: import("./src/upload").UploadFile | import("./src/upload").UploadRawFile, rawFile?: import("./src/upload").UploadRawFile | undefined) => void>, () => void, unknown, unknown, unknown>;
        readonly onStart: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(rawFile: import("./src/upload").UploadRawFile) => void>, () => void, unknown, unknown, unknown>;
        readonly onSuccess: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(response: any, rawFile: import("./src/upload").UploadRawFile) => unknown>, () => void, unknown, unknown, unknown>;
        readonly onProgress: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(evt: import("./src/upload").UploadProgressEvent, rawFile: import("./src/upload").UploadRawFile) => void>, () => void, unknown, unknown, unknown>;
        readonly onError: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(err: import("./src/ajax").UploadAjaxError, rawFile: import("./src/upload").UploadRawFile) => void>, () => void, unknown, unknown, unknown>;
        readonly onExceed: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(files: File[], uploadFiles: import("./src/upload").UploadUserFile[]) => void>, () => void, unknown, unknown, unknown>;
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
        readonly httpRequest: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("./src/upload").UploadRequestHandler>, import("./src/upload").UploadRequestHandler, unknown, unknown, unknown>;
        readonly disabled: BooleanConstructor;
        readonly limit: NumberConstructor;
    }>> & import("vue").ShallowUnwrapRef<{
        props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
            readonly fileList: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("./src/upload").UploadUserFile[]>, () => [], unknown, unknown, unknown>;
            readonly beforeUpload: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(rawFile: import("./src/upload").UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>>, () => void, unknown, unknown, unknown>;
            readonly onRemove: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(file: import("./src/upload").UploadFile | import("./src/upload").UploadRawFile, rawFile?: import("./src/upload").UploadRawFile | undefined) => void>, () => void, unknown, unknown, unknown>;
            readonly onStart: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(rawFile: import("./src/upload").UploadRawFile) => void>, () => void, unknown, unknown, unknown>;
            readonly onSuccess: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(response: any, rawFile: import("./src/upload").UploadRawFile) => unknown>, () => void, unknown, unknown, unknown>;
            readonly onProgress: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(evt: import("./src/upload").UploadProgressEvent, rawFile: import("./src/upload").UploadRawFile) => void>, () => void, unknown, unknown, unknown>;
            readonly onError: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(err: import("./src/ajax").UploadAjaxError, rawFile: import("./src/upload").UploadRawFile) => void>, () => void, unknown, unknown, unknown>;
            readonly onExceed: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(files: File[], uploadFiles: import("./src/upload").UploadUserFile[]) => void>, () => void, unknown, unknown, unknown>;
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
            readonly httpRequest: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("./src/upload").UploadRequestHandler>, import("./src/upload").UploadRequestHandler, unknown, unknown, unknown>;
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
        upload: (rawFile: import("./src/upload").UploadRawFile) => Promise<void>;
        doUpload: (rawFile: import("./src/upload").UploadRawFile) => void;
        handleChange: (e: Event) => void;
        handleClick: () => void;
        handleKeydown: () => void;
        abort: (file?: import("./src/upload").UploadFile | undefined) => void;
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
            uploaderContext: import("../..").UploadContext;
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
    }> & {} & {} & import("vue").ComponentCustomProperties) | undefined>;
    abort: (file: import("./src/upload").UploadFile) => void;
    submit: () => void;
    clearFiles: (states?: import("./src/upload").UploadStatus[]) => void;
    uploadFiles: import("vue").Ref<{
        name: string;
        percentage?: number | undefined;
        status: import("./src/upload").UploadStatus;
        size?: number | undefined;
        response?: unknown;
        uid: number;
        url?: string | undefined;
        raw?: {
            uid: number;
            readonly lastModified: number;
            readonly name: string;
            readonly webkitRelativePath: string;
            readonly size: number;
            readonly type: string;
            arrayBuffer: {
                (): Promise<ArrayBuffer>;
                (): Promise<ArrayBuffer>;
            };
            slice: {
                (start?: number | undefined, end?: number | undefined, contentType?: string | undefined): Blob;
                (start?: number | undefined, end?: number | undefined, contentType?: string | undefined): Blob;
            };
            stream: {
                (): ReadableStream<any>;
                (): NodeJS.ReadableStream;
            };
            text: {
                (): Promise<string>;
                (): Promise<string>;
            };
        } | undefined;
    }[]>;
    handleStart: (rawFile: import("./src/upload").UploadRawFile) => void;
    handleError: (err: import("./src/ajax").UploadAjaxError, rawFile: import("./src/upload").UploadRawFile) => void;
    handleRemove: (file: import("./src/upload").UploadFile | import("./src/upload").UploadRawFile, rawFile?: import("./src/upload").UploadRawFile | undefined) => void;
    handleSuccess: (response: any, rawFile: import("./src/upload").UploadRawFile) => unknown;
    handleProgress: (evt: import("./src/upload").UploadProgressEvent, rawFile: import("./src/upload").UploadRawFile) => void;
    isPictureCard: import("vue").ComputedRef<boolean>;
    uploadContentProps: import("vue").ComputedRef<import("./src/upload-content").UploadContentProps>;
    UploadList: import("vue").DefineComponent<{
        readonly files: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("./src/upload").UploadFiles>, () => never[], unknown, unknown, unknown>;
        readonly disabled: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
        readonly handlePreview: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(uploadFile: import("./src/upload").UploadFile) => void>, () => void, unknown, unknown, unknown>;
        readonly listType: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "text", unknown, "text" | "picture" | "picture-card", unknown>;
    }, {
        props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
            readonly files: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("./src/upload").UploadFiles>, () => never[], unknown, unknown, unknown>;
            readonly disabled: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
            readonly handlePreview: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(uploadFile: import("./src/upload").UploadFile) => void>, () => void, unknown, unknown, unknown>;
            readonly listType: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "text", unknown, "text" | "picture" | "picture-card", unknown>;
        }>> & {
            onRemove?: ((file: import("./src/upload").UploadFile) => any) | undefined;
        }>>;
        emit: (event: "remove", file: import("./src/upload").UploadFile) => void;
        t: import("../..").Translator;
        nsUpload: {
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
        nsIcon: {
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
        nsList: {
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
        focusing: import("vue").Ref<boolean>;
        handleClick: (file: import("./src/upload").UploadFile) => void;
        onFileClicked: (e: Event) => void;
        handleRemove: (file: import("./src/upload").UploadFile) => void;
        ElIcon: import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{
            readonly size: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | number>, unknown, unknown, unknown, unknown>;
            readonly color: import("element-plus/es/utils").BuildPropReturn<StringConstructor, unknown, unknown, unknown, unknown>;
        }, {
            props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                readonly size: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | number>, unknown, unknown, unknown, unknown>;
                readonly color: import("element-plus/es/utils").BuildPropReturn<StringConstructor, unknown, unknown, unknown, unknown>;
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
            style: import("vue").ComputedRef<import("vue").CSSProperties>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            readonly size: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | number>, unknown, unknown, unknown, unknown>;
            readonly color: import("element-plus/es/utils").BuildPropReturn<StringConstructor, unknown, unknown, unknown, unknown>;
        }>>, {
            size: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<string | number>, unknown, unknown>;
            color: string;
        }>> & Record<string, any>;
        Check: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
        CircleCheck: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
        Close: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
        Delete: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
        Document: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
        ZoomIn: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
        ElProgress: import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{
            readonly type: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "line", unknown, "circle" | "line" | "dashboard", unknown>;
            readonly percentage: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
            readonly status: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, "" | "success" | "warning" | "exception", unknown>;
            readonly indeterminate: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
            readonly duration: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 3, unknown, unknown, unknown>;
            readonly strokeWidth: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 6, unknown, unknown, unknown>;
            readonly strokeLinecap: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<"round" | "inherit" | "butt" | "square">, "round", unknown, unknown, unknown>;
            readonly textInside: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
            readonly width: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 126, unknown, unknown, unknown>;
            readonly showText: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
            readonly color: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | ((percentage: number) => string) | {
                color: string;
                percentage: number;
            }[]>, "", unknown, unknown, unknown>;
            readonly format: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(percentage: number) => string>, (percentage: number) => string, unknown, unknown, unknown>;
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
            barStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
            relativeStrokeWidth: import("vue").ComputedRef<string>;
            radius: import("vue").ComputedRef<number>;
            trackPath: import("vue").ComputedRef<string>;
            perimeter: import("vue").ComputedRef<number>;
            rate: import("vue").ComputedRef<1 | 0.75>;
            strokeDashoffset: import("vue").ComputedRef<string>;
            trailPathStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
            circlePathStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
            stroke: import("vue").ComputedRef<string>;
            statusIcon: import("vue").ComputedRef<import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>>;
            progressTextSize: import("vue").ComputedRef<number>;
            content: import("vue").ComputedRef<string>;
            slotData: import("vue").ComputedRef<{
                percentage: number;
            }>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            readonly type: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "line", unknown, "circle" | "line" | "dashboard", unknown>;
            readonly percentage: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
            readonly status: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, "" | "success" | "warning" | "exception", unknown>;
            readonly indeterminate: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
            readonly duration: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 3, unknown, unknown, unknown>;
            readonly strokeWidth: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 6, unknown, unknown, unknown>;
            readonly strokeLinecap: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<"round" | "inherit" | "butt" | "square">, "round", unknown, unknown, unknown>;
            readonly textInside: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
            readonly width: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 126, unknown, unknown, unknown>;
            readonly showText: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
            readonly color: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | ((percentage: number) => string) | {
                color: string;
                percentage: number;
            }[]>, "", unknown, unknown, unknown>;
            readonly format: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(percentage: number) => string>, (percentage: number) => string, unknown, unknown, unknown>;
        }>>, {
            type: import("element-plus/es/utils").BuildPropType<StringConstructor, "circle" | "line" | "dashboard", unknown>;
            color: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<string | ((percentage: number) => string) | {
                color: string;
                percentage: number;
            }[]>, unknown, unknown>;
            width: number;
            strokeLinecap: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<"round" | "inherit" | "butt" | "square">, unknown, unknown>;
            strokeWidth: number;
            indeterminate: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
            format: (percentage: number) => string;
            percentage: number;
            status: import("element-plus/es/utils").BuildPropType<StringConstructor, "" | "success" | "warning" | "exception", unknown>;
            duration: number;
            textInside: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
            showText: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
        }>> & Record<string, any>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        remove: (file: import("./src/upload").UploadFile) => boolean;
    }, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        readonly files: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("./src/upload").UploadFiles>, () => never[], unknown, unknown, unknown>;
        readonly disabled: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
        readonly handlePreview: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(uploadFile: import("./src/upload").UploadFile) => void>, () => void, unknown, unknown, unknown>;
        readonly listType: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "text", unknown, "text" | "picture" | "picture-card", unknown>;
    }>> & {
        onRemove?: ((file: import("./src/upload").UploadFile) => any) | undefined;
    }, {
        disabled: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
        listType: import("element-plus/es/utils").BuildPropType<StringConstructor, "text" | "picture" | "picture-card", unknown>;
        files: import("./src/upload").UploadFiles;
        handlePreview: (uploadFile: import("./src/upload").UploadFile) => void;
    }>;
    UploadContent: import("vue").DefineComponent<{
        readonly fileList: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("./src/upload").UploadUserFile[]>, () => [], unknown, unknown, unknown>;
        readonly beforeUpload: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(rawFile: import("./src/upload").UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>>, () => void, unknown, unknown, unknown>;
        readonly onRemove: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(file: import("./src/upload").UploadFile | import("./src/upload").UploadRawFile, rawFile?: import("./src/upload").UploadRawFile | undefined) => void>, () => void, unknown, unknown, unknown>;
        readonly onStart: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(rawFile: import("./src/upload").UploadRawFile) => void>, () => void, unknown, unknown, unknown>;
        readonly onSuccess: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(response: any, rawFile: import("./src/upload").UploadRawFile) => unknown>, () => void, unknown, unknown, unknown>;
        readonly onProgress: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(evt: import("./src/upload").UploadProgressEvent, rawFile: import("./src/upload").UploadRawFile) => void>, () => void, unknown, unknown, unknown>;
        readonly onError: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(err: import("./src/ajax").UploadAjaxError, rawFile: import("./src/upload").UploadRawFile) => void>, () => void, unknown, unknown, unknown>;
        readonly onExceed: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(files: File[], uploadFiles: import("./src/upload").UploadUserFile[]) => void>, () => void, unknown, unknown, unknown>;
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
        readonly httpRequest: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("./src/upload").UploadRequestHandler>, import("./src/upload").UploadRequestHandler, unknown, unknown, unknown>;
        readonly disabled: BooleanConstructor;
        readonly limit: NumberConstructor;
    }, {
        props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
            readonly fileList: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("./src/upload").UploadUserFile[]>, () => [], unknown, unknown, unknown>;
            readonly beforeUpload: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(rawFile: import("./src/upload").UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>>, () => void, unknown, unknown, unknown>;
            readonly onRemove: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(file: import("./src/upload").UploadFile | import("./src/upload").UploadRawFile, rawFile?: import("./src/upload").UploadRawFile | undefined) => void>, () => void, unknown, unknown, unknown>;
            readonly onStart: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(rawFile: import("./src/upload").UploadRawFile) => void>, () => void, unknown, unknown, unknown>;
            readonly onSuccess: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(response: any, rawFile: import("./src/upload").UploadRawFile) => unknown>, () => void, unknown, unknown, unknown>;
            readonly onProgress: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(evt: import("./src/upload").UploadProgressEvent, rawFile: import("./src/upload").UploadRawFile) => void>, () => void, unknown, unknown, unknown>;
            readonly onError: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(err: import("./src/ajax").UploadAjaxError, rawFile: import("./src/upload").UploadRawFile) => void>, () => void, unknown, unknown, unknown>;
            readonly onExceed: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(files: File[], uploadFiles: import("./src/upload").UploadUserFile[]) => void>, () => void, unknown, unknown, unknown>;
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
            readonly httpRequest: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("./src/upload").UploadRequestHandler>, import("./src/upload").UploadRequestHandler, unknown, unknown, unknown>;
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
        upload: (rawFile: import("./src/upload").UploadRawFile) => Promise<void>;
        doUpload: (rawFile: import("./src/upload").UploadRawFile) => void;
        handleChange: (e: Event) => void;
        handleClick: () => void;
        handleKeydown: () => void;
        abort: (file?: import("./src/upload").UploadFile | undefined) => void;
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
            uploaderContext: import("../..").UploadContext;
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
        readonly fileList: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("./src/upload").UploadUserFile[]>, () => [], unknown, unknown, unknown>;
        readonly beforeUpload: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(rawFile: import("./src/upload").UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>>, () => void, unknown, unknown, unknown>;
        readonly onRemove: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(file: import("./src/upload").UploadFile | import("./src/upload").UploadRawFile, rawFile?: import("./src/upload").UploadRawFile | undefined) => void>, () => void, unknown, unknown, unknown>;
        readonly onStart: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(rawFile: import("./src/upload").UploadRawFile) => void>, () => void, unknown, unknown, unknown>;
        readonly onSuccess: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(response: any, rawFile: import("./src/upload").UploadRawFile) => unknown>, () => void, unknown, unknown, unknown>;
        readonly onProgress: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(evt: import("./src/upload").UploadProgressEvent, rawFile: import("./src/upload").UploadRawFile) => void>, () => void, unknown, unknown, unknown>;
        readonly onError: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(err: import("./src/ajax").UploadAjaxError, rawFile: import("./src/upload").UploadRawFile) => void>, () => void, unknown, unknown, unknown>;
        readonly onExceed: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(files: File[], uploadFiles: import("./src/upload").UploadUserFile[]) => void>, () => void, unknown, unknown, unknown>;
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
        readonly httpRequest: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("./src/upload").UploadRequestHandler>, import("./src/upload").UploadRequestHandler, unknown, unknown, unknown>;
        readonly disabled: BooleanConstructor;
        readonly limit: NumberConstructor;
    }>>, {
        type: string;
        disabled: boolean;
        name: string;
        data: Record<string, any>;
        drag: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
        multiple: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
        onError: (err: import("./src/ajax").UploadAjaxError, rawFile: import("./src/upload").UploadRawFile) => void;
        onProgress: (evt: import("./src/upload").UploadProgressEvent, rawFile: import("./src/upload").UploadRawFile) => void;
        action: string;
        headers: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<Record<string, any> | Headers>, unknown, unknown>;
        method: string;
        showFileList: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
        accept: string;
        fileList: import("./src/upload").UploadUserFile[];
        autoUpload: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
        listType: import("element-plus/es/utils").BuildPropType<StringConstructor, "text" | "picture" | "picture-card", unknown>;
        httpRequest: import("./src/upload").UploadRequestHandler;
        withCredentials: boolean;
        beforeUpload: (rawFile: import("./src/upload").UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>;
        onRemove: (file: import("./src/upload").UploadFile | import("./src/upload").UploadRawFile, rawFile?: import("./src/upload").UploadRawFile | undefined) => void;
        onSuccess: (response: any, rawFile: import("./src/upload").UploadRawFile) => unknown;
        onExceed: (files: File[], uploadFiles: import("./src/upload").UploadUserFile[]) => void;
        onStart: (rawFile: import("./src/upload").UploadRawFile) => void;
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly beforeUpload: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(rawFile: import("./src/upload").UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>>, () => void, unknown, unknown, unknown>;
    readonly beforeRemove: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(uploadFile: import("./src/upload").UploadFile, uploadFiles: import("./src/upload").UploadFiles) => import("element-plus/es/utils").Awaitable<boolean>>, unknown, unknown, unknown, unknown>;
    readonly onRemove: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(uploadFile: import("./src/upload").UploadFile, uploadFiles: import("./src/upload").UploadFiles) => void>, () => void, unknown, unknown, unknown>;
    readonly onChange: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(uploadFile: import("./src/upload").UploadFile, uploadFiles: import("./src/upload").UploadFiles) => void>, () => void, unknown, unknown, unknown>;
    readonly onPreview: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(uploadFile: import("./src/upload").UploadFile) => void>, () => void, unknown, unknown, unknown>;
    readonly onSuccess: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(response: any, uploadFile: import("./src/upload").UploadFile, uploadFiles: import("./src/upload").UploadFiles) => void>, () => void, unknown, unknown, unknown>;
    readonly onProgress: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(evt: import("./src/upload").UploadProgressEvent, uploadFile: import("./src/upload").UploadFile, uploadFiles: import("./src/upload").UploadFiles) => void>, () => void, unknown, unknown, unknown>;
    readonly onError: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(error: Error, uploadFile: import("./src/upload").UploadFile, uploadFiles: import("./src/upload").UploadFiles) => void>, () => void, unknown, unknown, unknown>;
    readonly onExceed: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(files: File[], uploadFiles: import("./src/upload").UploadUserFile[]) => void>, () => void, unknown, unknown, unknown>;
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
    readonly fileList: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("./src/upload").UploadUserFile[]>, () => [], unknown, unknown, unknown>;
    readonly autoUpload: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
    readonly listType: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "text", unknown, "text" | "picture" | "picture-card", unknown>;
    readonly httpRequest: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("./src/upload").UploadRequestHandler>, import("./src/upload").UploadRequestHandler, unknown, unknown, unknown>;
    readonly disabled: BooleanConstructor;
    readonly limit: NumberConstructor;
}>>, {
    type: string;
    disabled: boolean;
    name: string;
    data: Record<string, any>;
    onChange: (uploadFile: import("./src/upload").UploadFile, uploadFiles: import("./src/upload").UploadFiles) => void;
    drag: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
    multiple: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
    onError: (error: Error, uploadFile: import("./src/upload").UploadFile, uploadFiles: import("./src/upload").UploadFiles) => void;
    onProgress: (evt: import("./src/upload").UploadProgressEvent, uploadFile: import("./src/upload").UploadFile, uploadFiles: import("./src/upload").UploadFiles) => void;
    action: string;
    headers: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<Record<string, any> | Headers>, unknown, unknown>;
    method: string;
    showFileList: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
    accept: string;
    fileList: import("./src/upload").UploadUserFile[];
    autoUpload: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
    listType: import("element-plus/es/utils").BuildPropType<StringConstructor, "text" | "picture" | "picture-card", unknown>;
    httpRequest: import("./src/upload").UploadRequestHandler;
    withCredentials: boolean;
    beforeUpload: (rawFile: import("./src/upload").UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>;
    beforeRemove: (uploadFile: import("./src/upload").UploadFile, uploadFiles: import("./src/upload").UploadFiles) => import("element-plus/es/utils").Awaitable<boolean>;
    onRemove: (uploadFile: import("./src/upload").UploadFile, uploadFiles: import("./src/upload").UploadFiles) => void;
    onPreview: (uploadFile: import("./src/upload").UploadFile) => void;
    onSuccess: (response: any, uploadFile: import("./src/upload").UploadFile, uploadFiles: import("./src/upload").UploadFiles) => void;
    onExceed: (files: File[], uploadFiles: import("./src/upload").UploadUserFile[]) => void;
}>> & Record<string, any>;
export default ElUpload;
export * from './src/upload';
export * from './src/upload-content';
export * from './src/upload-list';
export * from './src/upload-dragger';
