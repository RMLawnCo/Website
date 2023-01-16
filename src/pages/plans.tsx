import Image from "next/image"

export default function Plans() {
    return (
        <div>
            <h1 className="centerVertical">
                <strong>
                    Plans:
                </strong>
            </h1>

            <div className="flex">
                <div className="dirVert textCenter card">
                    <Image src="../hours.jpg" alt="hourly" />
                    <h3 className="noMargin">Basic (Hourly)</h3>
                    <p className="noMargin">$30 per hour</p>
                    <p className="noMargin">Single Use</p>
                </div>
                <div className="dirVert textCenter card">
                    <Image src="../months.png" alt="Months" />
                    <h3 className="noMargin">Premium (Monthly)</h3>
                    <p className="noMargin">$45 per month</p>
                    <p className="noMargin">Pay monthly</p>
                </div>
                <div className="dirVert textCenter card">
                    <Image src="../years.png" alt="Year" />
                    <h3 className="noMargin">Deluxe (Anually)</h3>
                    <p className="noMargin">$40 per month</p>
                    <p className="noMargin">Pay for whole year</p>
                </div>
            </div>

            <p className="textCenter centerVertical">*To hire us, contact us through our email or phone number</p>
        </div>
    )
}