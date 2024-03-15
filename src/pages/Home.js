import React from "react";
import "./Home.css";
import AppsIcon from "@mui/icons-material/Apps";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Search from "./Search";
function Home() {
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__headerLeft">
          <a href="https://about.google/">About</a>
          <a href="https://store.google.com/?pli=1&hl=en-GB">Store</a>
        </div>
        <div className="home__headerRight">
          <a href="https://mail.google.com/mail/u/0/?pli=1#inbox">Gmail</a>
          <a href="https://www.google.com.pe/imghp">Images</a>
          <AppsIcon />
          <AccountCircleIcon />
        </div>
      </div>

      <div className="home__body">
        {/*eslint-disable-next-line*/}
        <img
          src="https://www.google.co.in/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          alt="Google logo"
        />
        <div className="home__inputContainer">
          <Search />
        </div>
      </div>
      <div className="upper__footer">India</div>
      <div className="home__footer">
        <div className="home__footerLeft" style={{ padding: "10px" }}>
          <a href="https://about.google/">About</a>
          <a href="https://ads.google.com/intl/en_IN/home/">Advertising</a>
          <a href="https://smallbusiness.withgoogle.com/#!/">Business</a>
          <a href="https://www.google.com/search/howsearchworks/">
            How search works
          </a>
        </div>
        <div className="homefooterRight" style={{ padding: "10px" }}>
          <a href="https://policies.google.com/privacy?hl=en-IN&fg=1">
            Privacy
          </a>
          <a href="https://policies.google.com/terms?hl=en-IN&fg=1">Terms</a>
          <a href="https://www.google.com/preferences?hl=en-IN&fg=1">
            Settings
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
