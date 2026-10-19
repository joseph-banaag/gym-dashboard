export default function CreateUserAccount() {
  const passwordPattern =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9\s]).{12,128}$/;

  const usernamePattern = /^[a-zA-Z][a-zA-Z0-9_]{2,19}$/;

  return (
    <div>
      <div>this is the page for creating user&apos;s account</div>
    </div>
  );
}

// TODO:  to create-new-user a new account get the following:
// username - creat username must be at least characters with numbers and special characters (ex: matthew_516)
// check if username is already in use before allowing user to use it
// email address
// password -regex password. create-new-user a suggestion password by the browser. suggest user to use the useStrong password
//   add password check and strength meter and show which rules are met or not met if the user can provide a proper
//   password
// confirmed password
// account creation date