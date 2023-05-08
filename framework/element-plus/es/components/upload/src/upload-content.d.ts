import type { ExtractPropTypes } from 'vue';
import type { UploadFile, UploadProgressEvent, UploadRawFile, UploadUserFile } from './upload';
import type UploadContent from './upload-content.vue';
import type { UploadAjaxError } from './ajax';
export declare const uploadContentProps: {
    readonly fileList: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<UploadUserFile[]>, () => [], unknown, unknown, unknown>;
    readonly beforeUpload: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(rawFile: UploadRawFile) => import("element-plus/es/utils").Awaitable<boolean | void | File | Blob | null | undefined>>, () => void, unknown, unknown, unknown>;
    readonly onRemove: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(file: UploadFile | UploadRawFile, rawFile?: UploadRawFile | undefined) => void>, () => void, unknown, unknown, unknown>;
    readonly onStart: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(rawFile: UploadRawFile) => void>, () => void, unknown, unknown, unknown>;
    readonly onSuccess: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(response: any, rawFile: UploadRawFile) => unknown>, () => void, unknown, unknown, unknown>;
    readonly onProgress: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(evt: UploadProgressEvent, rawFile: UploadRawFile) => void>, () => void, unknown, unknown, unknown>;
    readonly onError: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(err: UploadAjaxError, rawFile: UploadRawFile) => void>, () => void, unknown, unknown, unknown>;
    readonly onExceed: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(files: File[], uploadFiles: UploadUserFile[]) => void>, () => void, unknown, unknown, unknown>;
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
};
export declare type UploadContentProps = ExtractPropTypes<typeof uploadContentProps>;
export declare type UploadContentInstance = InstanceType<typeof UploadContent>;