export interface ProtoInfo {
  Name: string;
  Version: string;
}

export interface OperationInfo {
  OperationId: string;
  Type: "Auth" | "Sign";
  Platform: "SIMA" | "ASAN";
}

export interface ClientInfo {
  ClientId: string;
  Callback: string;
  RedirectURI: string;
}

export interface SignableContainer {
  ProtoInfo: ProtoInfo;
  OperationInfo: OperationInfo;
  ClientInfo: ClientInfo;
}

export interface SSORequest {
  SignableContainer: SignableContainer;
  Header: {
    AlgName: string;
    Signature: string;
  };
}

export interface SSORedirectResponse {
  status: string;
  code: number;
  message: string;
  data: {
    ClientInfo: {
      RedirectURI: string;
      OperationId: string;
    };
  };
}