import illustration__box from "../images/illustration-box-desktop.svg";
import illustration__woman_desktop from "../images/illustration-woman-online-desktop.svg";
import illustration__woman_mobile from "../images/illustration-woman-online-mobile.svg";

const Illustrations = () => {
    return(
        <div className="illustration">
        <img
            src={illustration__box}
            alt="illustration with box"
            className="illustration__box"
        />

        <img
            className="illustration__woman-desktop"
            src={illustration__woman_desktop}
            alt="illustration with woman"
        />

        <img
            className="illustration__woman-mobile"
            src={illustration__woman_mobile}
            alt="illustration with woman"
        />
    </div>
    );
}

export default Illustrations;
