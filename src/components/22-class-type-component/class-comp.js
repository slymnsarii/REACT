import { Component } from "react";

class ClassComp extends Component {
  constructor(props) {
    //props'ları burada karşılıyoruz

    //props'lar extend edilen class'ın constructor'ına gönderilmelidir
    super(props); //super dediğimiz şey Ana Component

    //bulunduğumuz yapıyı tanımlar mesela şuan ClassComp'tayız onun state'ini oluşturuyoruz
    this.state = {
      //state'i okurken this.state diye okuyoruz
      message: "Hello World",
      hour: 15,
      minute: 35,
    };
  }

  componentDidMount() {
    console.log("Burası ilk girişte çalışır. (Render) ");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("re-render durumunda çalışır");

    if (prevState.hour !== this.state.hour) {
      console.log("Saat değişti");
    }

    if (prevState.minute !== this.state.minute) {
      console.log("Dakika değişti");
    }
  }

  componentWillUnmount() {
    console.log("Component un mount olduğunda çalışır");
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <h1>Hello World</h1>
        <h2>
          {this.state.hour}:{this.state.minute}
        </h2>
        <button onClick={() => this.setState({ hour: 19 })}>Set Hour</button>{" "}
        {/* state'i update yapmak için */}
        <button onClick={() => this.setState({ minute: 19 })}>
          Set Minute
        </button>
      </div>
    );
  }
}

export default ClassComp;
