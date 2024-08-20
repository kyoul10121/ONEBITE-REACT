const Button = ({text, color, children}) => {
    const onClickButton = () => {
        console.log(text);        
    }
    return (
    <button
        onClick={onClickButton}
        onMouseEnter={onClickButton}
        style={{ color:color}}>
        {text}-{color.toUpperCase()}
        {children}
    </button>);
};

// 버튼에 기본값을 설정해주지않으면 toUpperCase를 했을 때 오류가 난다.
// App.jsx에 카페와 블로그 버튼에는 color가 undefined에다가 점표기법을 쓰고 대문자로 바꿔주는 함수(toUpperCase)를 사용하면 오류가 생긴다.
// 무조건적으로 값이 있을 거라 생각하고 대문자로 바꿔주는 함수를 사용하면 위험하다. 그럴땐 기본값 설정이 필수 
Button.defaultProps = {
    color: "black",
};

export default Button;