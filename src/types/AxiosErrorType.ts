export type AxiosErrorType = {
  code: string;
  config: object;
  message: string;
  name: string;
  request: object;
  response: {
    config: object;
    data: {
      success: boolean;
      message: string;
      data: object | null;
    };
    headers: object;
    request: object;
    status: number;
    statusText: string;
  };
  stack: string;
};
