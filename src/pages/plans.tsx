import Image from "next/image"
import weekly from "../public/weekly.png"
import months from "../public/months.png"
import annual from "../public/annual.png"
import twiceweek from "../public/twiceweek.jpg"
import singleuse from "../public/singleuse.png"

export default function Plans() {
    var small = 30;
    var medium = 45;
    var large = 60;
    var xlarge = 85;
    return (
        <div>
            <h1 className="centerVertical">
                <strong>
                    Plans:
                </strong>
            </h1>

            <div className="flex">
                <div className="dirVert textCenter card">
                    <Image src={twiceweek} alt="twice a week" />
                    <h3 className="noMargin">Twice a week</h3>
                    <p className="noMargin">Small lawn: ${small * 2} per week</p>
                    <p className="noMargin">Medium lawn: ${medium * 2} per week</p>
                    <p className="noMargin">Large lawn: ${large * 2} per week</p>
                    <p className="noMargin">Extra-Large lawn: ${xlarge * 2} per week</p>
                </div>
                <div className="dirVert textCenter card">
                    <Image src={weekly} alt="weekly" />
                    <h3 className="noMargin">Weekly</h3>
                    <p className="noMargin">Small lawn: ${small} per week</p>
                    <p className="noMargin">Medium lawn: ${medium} per week</p>
                    <p className="noMargin">Large lawn: ${large} per week</p>
                    <p className="noMargin">Extra-Large lawn: ${xlarge} per week</p>
                </div>
                <div className="dirVert textCenter card">
                    <Image src={singleuse} alt="single use" />
                    <h3 className="noMargin">Single Use</h3>
                    <p className="noMargin">Small lawn: ${small}</p>
                    <p className="noMargin">Medium lawn: ${medium}</p>
                    <p className="noMargin">Large lawn: ${large}</p>
                    <p className="noMargin">Extra-Large lawn: ${xlarge}</p>
                </div>
                <div className="dirVert textCenter card">
                    <Image src={months} alt="monthly" />
                    <h3 className="noMargin">Monthly</h3>
                    <p className="noMargin">Small lawn: ${small} per month</p>
                    <p className="noMargin">Medium lawn: ${medium} per month</p>
                    <p className="noMargin">Large lawn: ${large} per month</p>
                    <p className="noMargin">Extra-Large lawn: ${xlarge} per month</p>
                </div>
                <div className="dirVert textCenter card">
                    <Image src={annual} alt="annual" />
                    <h3 className="noMargin">Annual</h3>
                    <p className="noMargin">(Monthly payed up front)</p>
                    <p className="noMargin">Small lawn: ${small * 12}</p>
                    <p className="noMargin">Medium lawn: ${medium * 12}</p>
                    <p className="noMargin">Large lawn: ${large * 12}</p>
                    <p className="noMargin">Extra-Large lawn: ${xlarge * 12}</p>
                </div>
            </div>

            <p className="textCenter centerVertical">*To hire us, contact us through our email or phone number</p>
        </div>
    )
}