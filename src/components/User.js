
const User = () => {
    return (
        <div className="user">
            <div className="user__header">
                <img src="./assets/settings.svg" alt="Settings" className="user__settings" />
                <img src="./assets/user-img.png" alt="User" className="user__img" />
                <img src="./assets/ring.png" alt="Ring" className="user__ring" />
            </div>


            <h2 className="user__name">Roberto Cavanali</h2>
            <p className="user__phone">(+99893) 100-00-00</p>

            <div className="user__balance">
                <div className="user__money">
                    <p>Wallet balance</p>
                    <h2>$425,97</h2>
                </div>
                <img src="./assets/plus.png" alt="Add" />
            </div>

            <div className="user__share">
                <img src="./assets/telegram.png" alt="Share" />
                <p>Share wallet</p>
            </div>
        </div>
    )
}

export default User