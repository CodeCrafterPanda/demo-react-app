export default function Card(props) {
	return (
		<div className='col-sm-4'>
			<div class='card'>
				<img src='...' class='card-img-top' alt='...' />
				<div class='card-body'>
					<h5 class='card-title'> {props.xy.name.split(" ")[1]}</h5>
					<p class='card-text'>{props.xy.desc}</p>
					<a href='#' class='btn btn-primary'>
						Go somewhere
					</a>
				</div>
			</div>
		</div>
	);
}
