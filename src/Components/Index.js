import React from 'react';
import './Styles/style.min.css';
import logo from './logo-icon.png';
import helloLogo from './hello-icon.png';
import mac1 from './pc-1.jpeg';
import mac2 from './pc-2.jpg';
import mac3 from './pc-3.png';
import mac4 from './pc--4.png';
import mac5 from './pc-5.jpg';
import mac6 from './pc-6.jpg';
import mac7 from './pc-7.jpg';
import mac8 from './pc-8.jpg';
import mac9 from './pc-9.png';
import mac10 from './pc-10.jpg';

export class Index extends React.Component {
	render() {
		return (
			<div className="">
				<Header />
				<br /> <br />
				<Contents />
				<br /> <br /> <br />
				<Footer />
			</div>
		)
	}
}

//Header Section
class Header extends React.Component {

	render() {

		const LogoCont = {
			width : '100px',
			height : '100px',
			top : '5px'
		};

		return(
			<nav style={{height : '53px', position : 'fixed'}} className="bg-black navBar pard-12 flex relative flex-aln-center">
				<div className="absolute bg-black pos-left-0 img-cont theLogo" style={LogoCont}>
					<img src={logo} alt="Logo" />
				</div>

				<div className="absolute pos-right-2 flex just-between navMenu color-white">
					<a href="#home" className="color-white">Home</a>
					<a href="#collection" className="color-white">Collection</a>
					<a href="#makeIt" className="color-white">Make it</a>
				</div>	
			</nav>	
		)
	};
}








//All Contents
class Contents extends React.Component {
	render() {
		return(
			<div className="pard-12">
				<ContA />
				<div className="pard-12 bg-white top-10 row">
					<ContB image={mac1} />
					<ContB image={mac2} />
					<ContB image={mac3} />
					<ContB image={mac4} />
					<ContB image={mac5} />
					<ContB image={mac6} />
					<ContB image={mac7} />
					<ContB image={mac8} />
					<ContB image={mac9} />
				</div>

				<ContChoose />
			</div>
		)
	}
}

//Part 1
function ContA() {
	return (
		<div id="home" className="row top-10 bottom-5 pard-12">

			<div className="wid-100 col-main img-cont">
				<img src={mac1} alt="MacBook" />
			</div>

			<div className="wid-40 col-1 color-black top-3 pard-12 text-left">
				<h1 className="bold bottom-2 color-primary">MacBook Pro</h1>

				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
				</p>
				<br />

				<div className="flex top-10 flex-aln-center wid-100 just-around">
					<h2 className="bold">Price ~ $1200</h2>
					<button className="btn btn-md radius-4">Buy Now</button>
				</div>
			</div>
		</div>
	)
}


//Part 2
class ContB extends React.Component {
	render() {
		return(
			<div id="collection" className="col-2 center">
				
				<div className="bg-black pard-5 color-white wid-95 top-2 bottom-2">
					<div className="img-cont wid-100 bg-primary" style={{height: '200px'}}>
						<img src={this.props.image} alt="" style={{objectFit : 'cover'}} />
					</div>

					<p className="pard-12">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
					</p>

					<h2 className="text-center bold color-white">Price ~ $3000</h2>
					<br />

					<button className="btn-black bg-black border-white btn-block block center">Buy now</button>
				</div>

			</div>
		);
	}
}







//Component that allows you to choose
class ContChoose extends React.Component {
	constructor() {
		super();
		this.state = {
			color : '',
			image : mac1
		}
	}

	//Function to pick the color
	pickColorFun = e => {


		//Making effects to the button you click

		//Get all children
		let parent = e.target.parentElement;
		let children = parent.children;

		//Loop through children elements
		for(let i = 0; i < children.length; i++) {
			if (children[i].id == e.target.id) {
				continue;
			}

			children[i].classList.remove('clicked')
		}

		//Then change color
		e.target.classList.add('clicked');

		//Then change the color based on the clicked color
		this.setState(
			{
				color : e.target.id
			},

			() => {
				//Give the image based on the color
				if (this.state.color == 'green') {
					this.setState({image : mac5});
				}

				if (this.state.color == 'red') {
					this.setState({image : mac3});
				}

				if (this.state.color == 'blue') {
					this.setState({image : mac4});
				}

				if (this.state.color == 'orange') {
					this.setState({image : mac8});
				}

				if (this.state.color == 'black') {
					this.setState({image : mac7});
				}
			}
		);
	}

	render() {
		const {image, color} = this.state;

		return(
			<div id="makeIt" className="row pard-12">

				<h2 className="color-primary pard-6">Choose the color</h2>
				
				<ChooseColor pickColor = {this.pickColorFun} />
				<DisplayChoosen image={image} />

			</div>
		)
	}

}


function DisplayChoosen(props) {
	return(
		<div className="col-2 img-cont top-5">
			<img src={props.image} alt="" />
		</div>
	)
}

//Component to choose color
function ChooseColor(props) {

	return(
		<div className="col-2">
			<p className="pard-12">
				Choose your favorite color and we will display the computer resembling it.
				Color matters ofcourse, That's why we are only asking for your choice
				to satisfy you!
			</p>

			<div className="flex just-around" onClick={props.pickColor}>
				<div id="red" className="radius-full pointer" style={{background: 'red', width: '40px', height: '40px'}}></div>
				<div id="blue" className="radius-full pointer" style={{background: 'blue', width: '40px', height: '40px'}}></div>
				<div id="green" className="radius-full pointer" style={{background: 'green', width: '40px', height: '40px'}}></div>
				<div id="orange" className="radius-full pointer" style={{background: 'orange', width: '40px', height: '40px'}}></div>
				<div id="black" className="radius-full pointer" style={{background: 'black', width: '40px', height: '40px'}}></div>
			</div>

		</div>
	)
}







function Footer() {
	return (
		<div className="pard-12 text-center color-black bg-white">
				<img src={helloLogo} alt="" style={{width: '40px'}} className="block center" />
		</div>
	)
}