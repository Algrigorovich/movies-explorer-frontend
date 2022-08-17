import "./Register.css";
import Input from "../Input/Input";

const Register = () => {
  return (
    <>
      <h1 className="form__header">Добро пожаловать!</h1>
      <Input label={"Имя"} id={"name"} name={"name"} type={"text"} defaultValue={"Александр"} hasError={false} />
      <Input label={"E-mail"} id={"email"} name={"email"} type={"email"} defaultValue={"pochta@yandex.ru"} hasError={false} />
      <Input label={"Пароль"} id={"password"} name={"password"} type={"password"} defaultValue={"********"} hasError={true} />
    </>
  );
};

export default Register;
