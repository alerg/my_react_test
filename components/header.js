export default () => ( 
<div>
	<div className="photo">
    	<img src="/static/banco.png" />
   	</div>
   	<div className="title">
   		<h1 style={{ color: 'red' }}> <img className="smallPhoto" src="/static/banco.png" /> Alejandro Rául Garcia </h1>
   		<p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. </p>
   	</div>
    <style jsx>{`
	  	display: flex;
		justify-content: center;
		.title {
			flex-direction: column;
		    flex: 1;
			align-self: center;
		    margin-left: 20px;
		}
		.smallPhoto{
			display: none;
		}
		.photo {
		    flex: 1;
			text-align: center;
		}
		.photo img{
		    width: 200px;
			height: 200px;
			display: block;
		}
		@media (max-width: 600px) {
			flex-direction: column;
			h1 {
				flex-direction: row;
			}
			.smallPhoto{
				display: block;
				width: 50px;
				height: 50px;
				padding-right: 20px;
			}
			.photo img {
				display: none;
			}
		}
    `}</style>
    <style global jsx>{`

    `}</style>
  </div>)
