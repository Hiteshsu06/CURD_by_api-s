export const Button = ({ data, id,type, onclickeventhandler, className, buttonText,disable }) => {
  const clickEventHandler = () => {
    onclickeventhandler(data);
  }
  return (
    <button
      type={type}
      onClick={clickEventHandler}
      className={className}
      id={id}
      disabled={disable}
    >
      {buttonText}
    </button>
  )
}