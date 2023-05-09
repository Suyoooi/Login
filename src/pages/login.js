const Login = () => {
  const handleLoginClick = () => {
    console.log("로그인 화면으로 이동합니다 . . .");
  };

  return (
    <>
      <div className="flex items-center justify-center h-screen bg-amber-200">
        <main className="max-w-lg p-4 bg-white rounded-lg cursor-pointer shadow-">
          <h1 onClick={handleLoginClick}>Login Page</h1>
        </main>
      </div>
    </>
  );
};

export default Login;
