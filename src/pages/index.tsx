import { Inter } from '@next/font/google'
import grass from "../public/grass.jpg"
import feetGrass from "../public/feetGrass.jpg"
import Image from "next/image"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div>
        <h1 className="center">
          <strong>
            Welcome to RMLawnCo!
          </strong>
        </h1>
        <p className="paragraph indent marginCenter">
          Working with us at RMLawnCo will bring you great service, and great
          communication. Great
          communication can leave
          you with a great lawn and a happy face!</p>
        <p className='marginCenter paragraph indent'>
          If you get the annual or monthly plan you pay beforehand if
          you get hourly you sign off on a form and pay afterward</p>
        <p className='marginCenter paragraph indent'>
          We make lawncare easy for you and your time. That way you can spend your time at work or with friends/family.</p>

        <Image priority src={grass} alt="Grass" className='paragraphImg marginCenter centerVertical' />


        <h2 className='center'>Why You Should Hire Us:</h2>
        <ul className='paragraph marginCenter'>
          <li>We work toward our goals</li>
          <li>We are hardworking and good with communication with our consumers</li>
          <li>We make sure you know what you want and you get it</li>
        </ul>
        <h2 className='center'>Why We Chose Cheap Prices</h2>
        {/* <p className='marginCenter paragraph indent'>
          We wanted you to have affordable service at the tap of a finger
          it lets us keep the business running and it still be affordable</p>
        <h4 className='center'>Why We Feel Your money is important</h4> */}
        <ul className='paragraph marginCenter'>
          <li>It is more convient for you to have affordable prices</li>
          <li>You are the consumer meaning you're our pride</li>
          <li>We feel customer satisfaction is the #1 priority</li>
        </ul>
        <h2 className='center'>Why Our Business Is Important</h2>
        <ul className='paragraph marginCenter'>
          <li>We keep your and other peoples yard looking spik and span</li>
          <li>We make sure our consumers come first</li>
          <li>We also make sure employees are well payed</li>
        </ul>
        <h2 className='center'>How We Use Our Money</h2>
        <ul className='paragraph marginCenter'>
          <li>Most money goes to employees and utilities </li>
          <li>Only a fraction goes to the company</li>
          <li>And the remaining money is savings</li>
        </ul>
      </div >
    </>
  )
}