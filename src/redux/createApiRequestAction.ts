import { createAsyncThunk } from '@reduxjs/toolkit';

/**
 * payload creator function
 *
 * @callback payloadCreatorFn
 * @param {{apiClient: any import('axios').AxiosInstance}} params
 * @param {*} secondParam
 * @param {*} thirdParam
 * @param {*} fourthParam
 * @param {*} fifthParam
 * @returns {any}
 */

/**
 * createApiRequestAction
 * @param {string} type type
 * @param {payloadCreatorFn | Promise<payloadCreatorFn>} payloadCreator payload creator function
 * @param {{[key: string]: any}} options options
 */
export default function createApiRequestAction(type: string, payloadCreator: any, options?: any) {
  return createAsyncThunk<any>(
    type,
    (args, thunkApi: any) => {
      const { apiClient, ...extra } = thunkApi.extra;

      return payloadCreator(
        {
          ...thunkApi,
          ...extra,
          apiClient,
        },
        args,
      );
    },
    options,
  );
}
