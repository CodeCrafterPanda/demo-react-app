import React, { useState } from "react";
export default function Hero() {
	const [age, setAge] = useState(26);
	const [name, setName] = useState("");
	const [check, setCheck] = useState(false);
	const [cards, setCards] = useState([]);
	// let obj1 = { name: "XYZ", age: 26 };
	// const { name, age } = obj1;
	return (
		<>
			<div className='container mt-3'>
				<div className='row mt-3'>
					<div className='col-sm-6'> {age}</div>
					<div className='col-sm-6'>
						{check && name.length ? JSON.stringify(name) : <></>}
					</div>
				</div>

				<div className='row mt-3'>
					<div className='col-sm-6'>
						<div class='input-group mb-3'>
							<input
								type='text'
								class='form-control'
								placeholder='Username'
								aria-label='Username'
								aria-describedby='basic-addon1'
								onChange={(e) => setName(e.target.value)}
							/>
						</div>
					</div>
					<div className='col-sm-6'>
						<div class='form-check'>
							<input
								class='form-check-input'
								type='checkbox'
								checked={check}
								id='flexCheckDefault'
								onChange={(e) => setCheck(e.target.checked)}
							/>
							<label class='form-check-label' for='flexCheckDefault'>
								Show Name
							</label>
						</div>
					</div>
				</div>
				<div className='row mt-3'>
					<div className='col-sm-3'>
						<button
							class='btn btn-primary'
							onClick={() => (check ? setCheck(false) : setCheck(true))}
						>
							{check ? "Update" : "Save"}
						</button>
					</div>
					<div className='col-sm-3'>
						<button
							class='btn btn-primary'
							onClick={() => {
								if (check) {
									setCheck(false);
								} else {
									setCheck(true);
								}
							}}
						>
							{check ? "Hide" : "Show"} Name
						</button>
					</div>
					<div className='col-sm-3'>
						<button
							class='btn btn-primary'
							onClick={() =>
								setCards([
									{
										name: "Title 1",
										desc: "Description 1",
										address: {
											str1: "",
											str2: "",
											locality: { build: "", area: "" },
										},
									},
									{ name: "Title 2", desc: "Description 2" },
									{ name: "Title 4", desc: "Description 4" },
									{ name: "Title 5", desc: "Description 5" },
								])
							}
						>
							Set cards
						</button>
					</div>
					<div className='col-sm-3'>
						<button class='btn btn-primary' onClick={() => setCards([])}>
							Hide cards
						</button>
					</div>
				</div>
				<div className='row mt-3'>
					{cards.map((element) => (
						<Card xy={element} />
					))}
				</div>
			</div>
		</>
	);
}

function Card({ xy }) {
	const [name, setName] = useState("Dummy");
	return (
		<div className='col-sm-3'>
			<div class='card'>
				{name}
				<img src='...' class='card-img-top' alt='...' />
				<div class='card-body'>
					<h5 class='card-title'> {xy.name.split(" ")[1]}</h5>
					<p class='card-text'>{xy.desc}</p>
					<button
						class='btn btn-primary'
						onClick={() => setName(Math.random())}
					>
						Set Title
					</button>
				</div>
			</div>
		</div>
	);
}

// 1. compoent create
// 2. import component & use
// 3. Parent to child data passing ---> display
// 4. Hooks usestate for setting local state ------->

let address = {
	str1: "",
	str2: "",
	locality: { build: "", area: "" },
};
