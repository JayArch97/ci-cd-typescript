const { GoogleAuth, Impersonated, IdTokenClient } = require('google-auth-library');

/**
Instead of specifying the type of client you'd like to use (JWT, OAuth2, etc)
this library will automatically choose the right client based on the environment.
*/
async function main() {
  const scopes = ['https://www.googleapis.com/auth/cloud-platform'];
  const targetPrincipal= "githubactions@acostajulio-dev.iam.gserviceaccount.com";
  const audience ="test2";
  const auth = new GoogleAuth({
    scopes: scopes
  });
  
  const creds = await auth.getClient();
  console.log(creds);
  
  // Create impersonated credentials
  const impersonatedClient = new Impersonated({

    sourceClient: creds,
    targetPrincipal: targetPrincipal,
    targetScopes: scopes,
    lifetime: 3600 // Token lifetime in seconds
  });

 
  
  // Get the ID token
  const token  = await impersonatedClient.fetchIdToken(audience);
  console.log(token)
  console.log("Finished running the script");
  return token;
}

main()
