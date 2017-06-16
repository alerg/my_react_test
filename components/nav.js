import Link from 'next/link'

export default () => ( 
	<div>
		<Link href="mis_datos_personales">
			<a>Datos Personales</a>
		</Link>
		<Link href="mi_experiencia_laboral">
			<a>Experiencia</a>
		</Link>
		<Link href="no_existe">
			<a>No existe</a>
		</Link>
	    <style jsx>{`
	      div{
	      	display: flex;
	      }
	      a {
      	    display: flex;
			flex: 1;
			text-align: center;
			justify-content: center;
	      }
	      img{
	  	    width: 200px;
			height: 200px;
	      }
	      @media (max-width: 600px) {
	      	flex-direction: column;
	      }
	    `}</style>
	    <style global jsx>{`

	    `}</style>
  	</div>
)
