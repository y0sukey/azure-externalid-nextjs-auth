export const msalConfig = {
  auth: {
    clientId: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', // Azure ポータルで取得したクライアントID
    authority:
      'https://login.microsoftonline.com/xxxxxxxxx-xxxxxxxxxxx-xxxxxxxxxxx', // テナントID
    redirectUri: 'http://localhost:3000', // リダイレクトURI
  },
  cache: {
    cacheLocation: 'sessionStorage', // キャッシュの場所
    storeAuthStateInCookie: false, // IE11やEdgeをサポートする場合はtrueに設定
  },
};

export const loginRequest = {
  scopes: ['User.Read'],
};