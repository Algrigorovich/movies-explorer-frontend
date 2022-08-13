import Input from "../Input/Input";

const Login = () => {
  return (
    <>
      <h1 className="form__header">Добро пожаловать!</h1>
      <Input label={"E-mail"} id={"email"} name={"email"} type={"email"} defaultValue={"pochta@yandex.ru"} hasError={false}/>
      <Input label={"Пароль"} id={"password"} name={"password"} type={"password"} hasError={false} />
    </>
  );
};

export default Login;
