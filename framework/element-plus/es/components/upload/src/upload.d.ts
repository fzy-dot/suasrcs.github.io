import type { UploadAjaxError } from './ajax';
import type { Awaitable } from 'element-plus/es/utils';
import type { ExtractPropTypes } from 'vue';
import type Upload from './upload.vue';
export declare const uploadListTypes: readonly ["text", "picture", "picture-card"];
export declare const genFileId: () => number;
export declare type UploadStatus = 'ready' | 'uploading' | 'success' | 'fail';
export interface UploadProgressEvent extends ProgressEvent {
    percent: number;
}
export interface UploadRequestOptions {
    action: string;
    method: string;
    data: Record<string, string | Blob | [string | Blob, string]>;
    filename: string;
    file: File;
    headers: Headers | Record<string, string | number | null | undefined>;
    onError: (evt: UploadAjaxError) => void;
    onProgress: (evt: UploadProgressEvent) => void;
    onSuccess: (response: any) => void;
    withCredentials: boolean;
}
export interface UploadFile {
    name: string;
    percentage?: number;
    status: UploadStatus;
    size?: number;
    response?: unknown;
    uid: number;
    url?: string;
    raw?: UploadRawFile;
}
export declare type UploadUserFile = Omit<UploadFile, 'status' | 'uid'> & Partial<Pick<UploadFile, 'status' | 'uid'>>;
export declare type UploadFiles = UploadFile[];
export interface UploadRawFile extends File {
    uid: number;
}
export declare type UploadRequestHandler = (options: UploadRequestOptions) => XMLHttpRequest | Promise<unknown>;
export interface UploadHooks {
    beforeUpload: (rawFile: UploadRawFile) => Awaitable<void | undefined | null | boolean | File | Blob>;
    beforeRemove: (uploadFile: UploadFile, uploadFiles: UploadFiles) => Awaitable<boolean>;
    onRemove: (uploadFile: UploadFile, uploadFiles: UploadFiles) => void;
    onChange: (uploadFile: UploadFile, uploadFiles: UploadFiles) => void;
    onPreview: (uploadFile: UploadFile) => void;
    onSuccess: (response: any, uploadFile: UploadFile, uploadFiles: UploadFiles) => void;
    onProgress: (evt: UploadProgressEvent, uploadFile: UploadFile, uploadFiles: UploadFiles) => void;
    onError: (error: Error, uploadFile: UploadFile, uploadFiles: UploadFiles) => void;
    onExceed: (files: File[], uploadFiles: UploadUserFile[]) => void;
}
export declare const uploadBaseProps: {
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
    readonly fileList: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<UploadUserFile[]>, () => [], unknown, unknown, unknown>;
    readonly autoUpload: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
    readonly listType: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "text", unknown, "text" | "picture" | "picture-card", unknown>;
    readonly httpRequest: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<UploadRequestHandler>, UploadRequestHandler, unknown, unknown, unknown>;
    readonly disabled: BooleanConstructor;
    readonly limit: NumberConstructor;
};
export declare const uploadProps: {
    readonly beforeUpload: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(rawFile: UploadRawFile) => Awaitable<void | undefined | null | boolean | File | Blob>>, () => void, unknown, unknown, unknown>;
    readonly beforeRemove: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(uploadFile: UploadFile, uploadFiles: UploadFiles) => Awaitable<boolean>>, unknown, unknown, unknown, unknown>;
    readonly onRemove: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(uploadFile: UploadFile, uploadFiles: UploadFiles) => void>, () => void, unknown, unknown, unknown>;
    readonly onChange: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(uploadFile: UploadFile, uploadFiles: UploadFiles) => void>, () => void, unknown, unknown, unknown>;
    readonly onPreview: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(uploadFile: UploadFile) => void>, () => void, unknown, unknown, unknown>;
    readonly onSuccess: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(response: any, uploadFile: UploadFile, uploadFiles: UploadFiles) => void>, () => void, unknown, unknown, unknown>;
    readonly onProgress: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(evt: UploadProgressEvent, uploadFile: UploadFile, uploadFiles: UploadFiles) => void>, () => void, unknown, unknown, unknown>;
    readonly onError: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(error: Error, uploadFile: UploadFile, uploadFiles: UploadFiles) => void>, () => void, unknown, unknown, unknown>;
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
    readonly fileList: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<UploadUserFile[]>, () => [], unknown, unknown, unknown>;
    readonly autoUpload: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
    readonly listType: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "text", unknown, "text" | "picture" | "picture-card", unknown>;
    readonly httpRequest: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<UploadRequestHandler>, UploadRequestHandler, unknown, unknown, unknown>;
    readonly disabled: BooleanConstructor;
    readonly limit: NumberConstructor;
};
export declare type UploadProps = ExtractPropTypes<typeof uploadProps>;
export declare type UploadInstance = InstanceType<typeof Upload>;
