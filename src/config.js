const config = {
  STRIPE_KEY: "YOUR_STRIPE_PUBLIC_KEY",
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
      REGION: "us-west-2",
      BUCKET: "notes-app-helene",
    },
    apiGateway: {
      REGION: "us-west-2",
      URL: "https://0w4yfguspe.execute-api.us-west-2.amazonaws.com/prod",
    },
    cognito: {
      REGION: "us-west-2",
      USER_POOL_ID: "us-west-2_GIAfgkgNi",
      APP_CLIENT_ID: "19otv45ng6binjj4nv9qlksfgs",
      IDENTITY_POOL_ID: "us-west-2:94e72e38-3cf6-4295-ba19-529cc7cfc55f",
    },
    
  };
  
  
  export default config;