const config = {
  STRIPE_KEY: "pk_test_51IcpXAEkzygh2BxDRrKpDgpuExvyrUwIeBEz4qIWYbnIUXUsdYWcsEY3NcqHK47uZ86boWDAH25BlbK6kh6bnSz600zrdKMsq2",
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
      REGION: "eu-west-3",
      BUCKET: "notes-app-upload-helene",
    },
    apiGateway: {
      REGION: "eu-west-3",
      URL: "https://ckbbaqrgv7.execute-api.eu-west-3.amazonaws.com/prod",
    },
    cognito: {
      REGION: "eu-west-3",
      USER_POOL_ID: "eu-west-3_ZgMDPdvQ2",
      APP_CLIENT_ID: "5vcjmiubgngajgqjr4aia6eipk",
      IDENTITY_POOL_ID: "eu-west-3:4b57c78c-9909-44fe-868d-af56471f86f5",
    },
    
  };
  
  
  export default config;