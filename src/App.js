import logo from "./logo.svg";
import "./App.css";
import User from "./components/User";
import Clock from "./components/Clock";
import Nuclear from "./components/Broad";

function App() {
    return (
        <div className="App">
            <div className="AppPlay">
                <h3 className="title">CỜ CARO </h3>
                <User />
                <Clock />
                <Nuclear />
            </div>
            <div className="rule">
                <h3>Quy tắc trò chơi</h3>
                <ul>
                    <li>
                        Để bắt đầu chơi, bạn bắt buộc phải nhập đầy đủ tên vào
                        cả 2 ô, nếu không bạn không thể chơi và sẽ có thông báo
                        hiện lên
                    </li>
                    <li>
                        Khi bạn đã nhập đầy đủ 2 ô thông tin người chơi (Player
                        1: (X), Player 2: (O)) khi đó đồng hồ đếm giờ sẽ ngay
                        lập tức chạy và bạn sẽ bắt đầu chơi.
                    </li>
                    <li>
                        Đồng hồ sẽ dừng khi có người thắng hoặc thời gian chơi
                        vượt quá 20 phút
                    </li>
                    <li>
                        Luật trò chơi: Nếu có 5 'quân' (X hoặc O) thẳng hàng
                        (dọc, ngang, chéo) thì sẽ thắng
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default App;
